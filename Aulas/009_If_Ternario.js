const aprovado = true;
 let mensagem = '';

 //If tradicional
    if (aprovado == true) {
        mensagem = 'Aprovado';
    } else {
        mensagem = 'Reprovado';
    }
    console.log(mensagem);

//Operador Ternário
    mensagem = aprovado ? 'Aprovado' : 'Reprovado';
    console.log(mensagem);
    