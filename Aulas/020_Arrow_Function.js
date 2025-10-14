//Função nomeada
function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
}

saudacao("Joao");




//Função anônima
const saudacaoAnonima = function (nome){
    console.log(`Bom dia ${nome}!`)
}


//Função arrow

const saudacaoArrow =  (nome) =>{
    console.log(`Bom dia ${nome}!`)
}


const saudacaoArrow2 = (v1,v2) => {

    console.log(v1 + v2);
}

saudacaoArrow2(20,30);