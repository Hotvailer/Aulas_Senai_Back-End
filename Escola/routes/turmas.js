const express = require('express');
const rotas = express.Router();
const BD = require('../bd');

rotas.get('/listar', async (req,res) => {
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_turma'
    const dados = await BD.query(`SELECT * from turmas where ativo = true and (nome_turma ilike $1) 
        order by ${ordem}`,
        ['%'+busca+'%']);
    console.log(dados.rows);
    res.render('turmas/lista.ejs', { dadosTurmas:dados.rows});
});


rotas.get('/novo', async(req,res) =>{
    res.render('turmas/novo.ejs')
});
rotas.post('/novo', async(req,res) =>{
    const nome_turma= req.body.nome_turma
    const ativo= req.body.ativo

    const sql = `Insert into turmas (nome_turma,ativo)
        VALUES ($1, $2)`
    await BD.query(sql, [nome_turma, ativo])

    res.redirect('/turmas/listar')
});

rotas.post('/excluir/:id', async(req,res) =>{
    const id = req.params.id
    const sql = 'DELETE from turmas where id_turma = $1';
    await BD.query(sql, [id]);
    res.redirect('/turmas/listar')
});


rotas.get('/editar/:id', async(req,res) =>{
    const id = req.params.id;
    const sql = 'SELECT * FROM turmas WHERE id_turma = $1'
    const dados = await BD.query(sql, [id]);
    res.render('turmas/editar.ejs', {turmas: dados.rows[0]});
});

rotas.post('/editar/:id', async(req,res) => {
    const id = req.params.id
    const nome_turma= req.body.nome_turma
    const ativo= req.body.ativo
    const sql = `update turmas set nome_turma=$1, ativo= $2 where id_turma= $3`
    await BD.query(sql, [nome_turma, ativo, id])
    res.redirect('/turmas/listar')
})

module.exports= rotas;