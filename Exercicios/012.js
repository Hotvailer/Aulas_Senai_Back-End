const prompt= require('prompt-sync')();

function ValorPi(){
    let PI = 3.1415;
    console.log(PI);
    return PI;
}
ValorPi();

let raio = prompt('Qual é o valor do raio?')

function Circunferencia(raio){
    let valorCircunferencia = 2 * ValorPi() * raio;
    return valorCircunferencia;
    
}
let resultado = Circunferencia(raio);
console.log(`O valor da circunferência é: ${resultado}`);