const prompt = require('prompt-sync')();

let altura = prompt('Qual é a altura do triângulo?')
let largura = prompt('Qual é a largura do triângulo?')

function AreaTriangulo(altura,largura){
    let valorArea = altura * largura / 2;
    return valorArea;
}

console.log(AreaTriangulo(altura, largura));