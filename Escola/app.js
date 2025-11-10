const express = require('express');
const ejs = require('ejs');
const path = require('path')
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Rota da página principal "Landing page"
app.get('/', (req, res) => {
    res.render('landing/index');
});

const adminRotas = require('./routes/admin')
app.use('/admin', adminRotas); //todas as rotas do admin começam com o '/admin'


const ProfessoresRotas = require('./routes/professores')
app.use('/professores', ProfessoresRotas); //todas as rotas do admin começam com o '/admin'


const DisciplinasRotas = require('./routes/disciplinas')
app.use('/disciplinas', DisciplinasRotas); //todas as rotas do admin começam com o '/admin'

const TurmaRotas = require('./routes/turmas')
app.use('/turmas', TurmaRotas); //todas as rotas do admin começam com o '/admin'

const AlunosRotas = require('./routes/alunos')
app.use('/alunos', AlunosRotas); //todas as rotas do admin começam com o '/admin'



const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
});