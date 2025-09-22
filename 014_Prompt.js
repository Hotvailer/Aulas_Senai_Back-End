const prompt = require('prompt-sync')();


let nome = prompt('Qual o seu nome? ');
console.log(`Seja bem vindo, ${nome}!`);

let idade = prompt(`${nome}, Qual a sua idade? `);
console.log(`Ahh, ${nome}, então você nasceu em ${2025 - idade}!`);
let niver = prompt(`Você já fez aniversário esse ano, ${nome}?  `);
if( niver == 'sim' || niver == 'Sim'){
    console.log(`Então você já tem ${idade} anos!`);
} else{
    console.log(`Então você vai fazer ${idade - 1} anos!`);
}