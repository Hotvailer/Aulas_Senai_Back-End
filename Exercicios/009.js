const prompt = require('prompt-sync')();


let nome = prompt("Qual é o seu nome?");
let sobrenome = prompt("Qual é o seu sobrenome?");

function NomeCompleto(nome, sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}!`);
}

NomeCompleto(nome, sobrenome);
