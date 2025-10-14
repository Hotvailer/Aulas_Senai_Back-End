let variavelGlobal = 'Sou Global';

function minhaFuncao() {
    let variavelLocal = 'Sou Local';
    console.log(variavelGlobal); // Acessa variável global
    console.log(variavelLocal);  // Acessa variável local
}

minhaFuncao();
console.log(variavelGlobal);