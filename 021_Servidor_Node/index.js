const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor Node.js com Express!')
});



app.get('/sobre', (req, res) => {
    res.send('Essa é a página sobre do projeto!')
});



app.get('/usuario/:id', (req, res) => {
    const id = req.params.id
    const usuarioSel = usuarios[id]
    res.send(usuarioSel);});



app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1)
    const n2 = Number(req.params.n2)
    const resultado = n1+ n2
    res.send(`O resultado de ${n1} + ${n2} é igual á ${resultado}`);
});

app.get('/menu', (re,res) => {
    let html =  `
    <h1 style="text-align:center">Menu</h1>
    <a href="/" style="text-align:center">Principal</a> <br>
    <a href="/usuarios" style="text-align:center">Usuários</a> <br>
    <a href="/usuarios/1" style="text-align:center">Usuario 1</a> <br>
    <a href="/soma" style="text-align:center">Soma</a> <br>
 `
    res.send(html)
});



app.get('/usuarios', (req, res) => {
    let html = '<h1> Lista de usuarios</h1>';
    html += '<ul>';
    for (let usuarioAtual of usuarios){
        html += `<li>${usuarioAtual}</li>`
    }
    html += '</ul>';
    res.send(html)
});

const usuarios = ['Mauro', 'Alice', 'Juliana', 'Roger']

const porta = 3001;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});