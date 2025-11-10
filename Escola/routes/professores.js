const express = require('express');
const rotas = express.Router();
const BD = require('../bd');

rotas.get('/listar', async (req,res) => {
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_professor'

    
    const dados = await BD.query(`SELECT * from professores where ativo = true and (nome_professor ilike $1 or formacao ilike $1) 
        order by ${ordem}`,
        ['%'+busca+'%']);
    console.log(dados.rows);
    res.render('professores/lista.ejs', { dadosProfessores:dados.rows});
});

rotas.get('/novo', async(req,res) =>{
    res.render('professores/novo.ejs')
});
rotas.post('/novo', async(req,res) =>{
    const nome_professor= req.body.nome_professor
    const telefone= req.body.telefone
    const Formacao= req.body.Formacao
    const ativo= req.body.ativo

    const sql = `Insert into professores (nome_professor,telefone,Formacao,ativo)
        VALUES ($1, $2, $3, $4)`
    await BD.query(sql, [nome_professor, telefone,Formacao,ativo])

    res.redirect('/professores/listar')
});
rotas.post('/excluir/:id', async(req,res) =>{
    const id = req.params.id
    const sql = 'Update professores set ativo = false where id_professor = $1';
    await BD.query(sql, [id]);
    res.redirect('/professores/listar')
});

rotas.get('/editar/:id', async(req,res) =>{
    const id = req.params.id;
    const sql = 'SELECT * FROM professores WHERE id_professor = $1'
    const dados = await BD.query(sql, [id]);
    res.render('professores/editar.ejs', {professor: dados.rows[0]});
});
rotas.post('/editar/:id', async(req,res) => {
    const id = req.params.id
    const nome_professor= req.body.nome_professor
    const telefone= req.body.telefone
    const Formacao= req.body.Formacao
    const ativo= req.body.ativo
    const sql = `update professores set nome_professor=$1, telefone= $2, Formacao= $3, ativo= $4 where id_professor= $5`
    await BD.query(sql, [nome_professor, telefone, Formacao, ativo, id])
    res.redirect('/professores/listar')
})

module.exports= rotas;