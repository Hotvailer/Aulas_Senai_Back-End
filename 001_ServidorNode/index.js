const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor d NextCode!')
});

let produtos = ['mouse', 'teclado', 'gamepad', 'cadeira', 'mesa', 'monitor']
app.get('/produtos', (req,res) => {
    let html = 
    '<h1>Produtos</h1>' 
    html+= '<ul>';
    for (let PordutoAtual of produtos){
        html += `<li>${PordutoAtual}</li>`
    }
    
    html += '</ul>'
    res.send(html)
})
app.get('/produtos/:id', (req, res) => {
    let id = req.params.id
    const ProdutoId = produtos[id]
    if(ProdutoId == undefined){
        res.send(`Produto não foi encontrado`);
        
    } else{
        res.send(ProdutoId)
    }
});

app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    let preco= parseFloat(req.params.preco)
    let qtde= parseFloat(req.params.qtde)
    let total = preco * qtde
    let id = req.params.id
    const ProdutoId = produtos[id]
    
    res.send(`O produto ${ProdutoId[id]} cujo id é ${ProdutoId}, está saindo por R$${preco} reias e com ${qtde} produtos, com um total da compra de R$${total} Reais `)
})




























const porta = 3002;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});