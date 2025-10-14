const fs = require('fs');
const dados = fs.readFile('.024_JSON.json', 'utf8');
const pessoa = JSON.parse(dados);