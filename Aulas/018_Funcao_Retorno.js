function calcularComissao(valor, percComissao = 7.5) {
    return (valor * percComissao) / 100;
}

let valor = 5400;
console.log(`O valor da comissão é de R$ ${calcularComissao(valor)}`);

