const express = require('express');
const rotas = express.Router();
const BD = require('../bd');

rotas.get('/listar', async (req,res) => {
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_disciplina'
    const dados = await BD.query(`SELECT * FROM disciplinas LEFT JOIN professores on disciplinas.id_professor = professores.id_professor
where disciplinas.ativo = true and (nome_professor ilike $1 or nome_disciplina ilike $1)
order by ${ordem}`,['%'+busca+'%'] );
    res.render('disciplinas/lista.ejs', { dadosDisciplinas:dados.rows});
});


rotas.get('/novo', async(req,res) =>{
    const dados = await BD.query('SELECT * FROM professores WHERE ativo = true ORDER BY nome_professor')

    res.render('disciplinas/novo.ejs', {dadosProfessores: dados.rows})
});


rotas.post('/novo', async(req,res) =>{
    const nome_disciplina= req.body.nome_disciplina
    const id_professor= req.body.id_professor
    const ativo= req.body.ativo

    const sql = `Insert into disciplinas (nome_disciplina, id_professor, ativo)
        VALUES ($1, $2, $3)`
    await BD.query(sql, [nome_disciplina,id_professor, ativo])

    res.redirect('/disciplinas/listar')
});

rotas.post('/excluir/:id', async(req,res) =>{
    const id = req.params.id
    const sql = 'DELETE from disciplinas where id_disciplina = $1';
    await BD.query(sql, [id]);
    res.redirect('/disciplinas/listar')
});


rotas.get('/editar/:id', async(req,res) =>{
    const id = req.params.id;
    const sql = 'SELECT * FROM disciplinas WHERE id_disciplina = $1'
    const dados = await BD.query(sql, [id]);

    const sqlProf = "Select * from professores where ativo = true order by nome_professor"
    const dadosProf = await BD.query(sqlProf)

    res.render('disciplinas/editar.ejs', {disciplinas: dados.rows[0], dadosProfessores: dadosProf.rows});
});

rotas.post('/editar/:id', async(req,res) => {
    const id = req.params.id
    const nome_disciplina= req.body.nome_disciplina
    const id_professor= req.body.id_professor
    const ativo= req.body.ativo
    const sql = `update disciplinas set nome_disciplina=$1, id_professor= $2, ativo= $3 where id_disciplina= $4`
    await BD.query(sql, [nome_disciplina,id_professor, ativo, id])
    res.redirect('/disciplinas/listar')
})

module.exports= rotas;