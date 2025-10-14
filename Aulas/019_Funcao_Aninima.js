function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
}

saudacao("Joao");


//Função Anônima
const saudacaoAnonima = function (nome){
    console.log(`Bom dia ${nome}!`)
}

function soma(v1,v2){
    console.log(v1+v2)
}
soma(4,8);

const SomaAnonima = function (v1,v2){
    console.log(v1+v2)
}

SomaAnonima(4,8);
