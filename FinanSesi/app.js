const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Configurando o motor de visualização EJS
app.set('view engine', 'ejs');

// Configurando  pasta para os arquivos estáticos
app.use(express.static('public'));

//definindo o layout padrão da nossa página 
app.use(expressLayouts);
app.set('layout', 'layouts/principal')

// Para processar e receber os dados do formulário
app.use(express.urlencoded({extended: true}));

// Rota principal do site
app.get('/', (req,res) => {
    //Busanco o arquivo index.ejs na pasta views
    res.render('index')
});

app.get('/sobre', (req,res) => {
    //Busanco o arquivo index.ejs na pasta views
    res.render('sobre')
});

app.get('/juros_simples', (req,res) => {
    //Busanco o arquivo index.ejs na pasta views
    res.render('juros_simples')
});

app.post('/juros_simples', (req,res) => {
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo
    const juros = (capital * taxa * tempo) / 100
    const total = Number(capital) + Number(juros)

    res.render(`juros_simples`, {capital, taxa,tempo,juros,total})
})


app.post('/juros_compostos', (req,res) => {
    const capital = req.body.capital;
    const taxa = Number(req.body.taxa) / 100;
    const tempo = req.body.tempo
    const juros = capital * ((1+ taxa)** tempo);
    const total = Number(capital) + Number(juros)
    
    res.render(`juros_compostos`, {capital, taxa,tempo,juros,total})
})

app.get('/juros_compostos', (req,res) => {
    //Busanco o arquivo index.ejs na pasta views
    res.render('juros_compostos')
}); 

const porta = 3001;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`)
})