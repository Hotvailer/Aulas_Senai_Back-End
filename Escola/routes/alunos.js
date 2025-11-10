const express = require('express');
const rotas = express.Router();
const BD = require('../bd');

rotas.get('/listar', async (req,res) => {
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome';
    
    const dados = await BD.query(`SELECT * FROM alunos LEFT JOIN turmas on alunos.id_turma = turmas.id_turma
	where alunos.ativo = true and (nome ilike $1 or nome_turma ilike $1 or  cast(idade as text) ilike $1)
	order by ${ordem}`, ['%'+busca+'%']);
    res.render('alunos/lista.ejs', { dadosAlunos:dados.rows});
});


rotas.get('/novo', async(req,res) =>{
    const dados = await BD.query('SELECT * from turmas where ativo = true')

    res.render('alunos/novo.ejs', {dadosAlunos: dados.rows})
});
rotas.post('/novo', async(req,res) =>{
    const nome= req.body.nome
    const idade = req.body.idade
    const email = req.body.email
    const cpf = req.body.cpf
    const sexo = req.body.sexo
    const nome_turma = req.body.nome_turma
    const ativo= req.body.ativo
    const sql = `Insert into disciplinas (foto,nome,idade,email,cpf,sexo,nome_turma, ativo)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    await BD.query(sql, [foto,nome,idade,email,cpf,sexo,nome_turma,ativo])

    res.redirect('/alunos/listar')
});

rotas.post('/excluir/:id', async(req,res) =>{
    const id = req.params.id
    const sql = 'DELETE from alunos where id_aluno = $1';
    await BD.query(sql, [id]);
    res.redirect('/alunos/listar')
});


rotas.get('/editar/:id', async(req,res) =>{
    const id = req.params.id;
    const sql = 'SELECT * FROM alunos WHERE id_aluno = $1'
    const dados = await BD.query(sql, [id]);
    const sqlTurm= "select * from turmas where ativo = true order by nome_turma"
    const dadosTurm = await BD.query(sqlTurm)
    res.render('alunos/editar.ejs', {alunos: dados.rows[0], dadosTurma:dadosTurm.rows});
});

rotas.post('/editar/:id', async(req,res) => {
    const id = req.params.id
    const foto= req.body.foto
    const nome= req.body.nome
    const idade = req.body.idade_aluno
    const email = req.body.email
    const cpf = req.body.cpf
    const sexo = req.body.sexo
    const id_turma = req.body.id_turma
    const ativo= req.body.ativo
    const sql = `update alunos set foto=$1, nome=$2,idade= $3, email= $4,cpf=$5,sexo=$6,id_turma=$7, ativo=$8 where id_aluno= $9`
    await BD.query(sql, [foto,nome,idade,email,cpf,sexo,id_turma, ativo, id])
    res.redirect('/alunos/listar')
})

module.exports= rotas;