let valorTotal = 0;
let valor;
let produto;
let qtde;
let selecionarProduto;
let selecionarCarrinho;
let mostrarPrecoFinal;

limpar()

function adicionar() {
    selecionarProduto = document.getElementById('produto').value;
    selecionarCarrinho = document.querySelector('.carrinho__produtos__produto');
    qtde = parseInt(document.getElementById('quantidade').value);
    
    if (!(qtde > 0 && qtde <= 100)) {
        alert("A quantidade precisa ser informada ou ser maior que 0");
        return;
    }

    if (selecionarProduto == 'Fone de ouvido - R$100') {
        produto = 'Fone de ouvido'; 
        valor = 100 * qtde;   
    } else if (selecionarProduto == 'Celular - R$1400') {
        produto = 'Celular'; 
        valor = 1400 * qtde;
    } else {
        produto = 'Oculus VR'; 
        valor = 5000 * qtde;
    }

    selecionarCarrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtde}x</span> ${produto} <span class="texto-azul">R$${valor}</span></section>`;

    total();

    document.getElementById('quantidade').value = '';
}
 function total() {
    mostrarPrecoFinal = document.querySelector('.carrinho__total');
    selecionarProduto = document.getElementById('produto').value;
    qtde = parseInt(document.getElementById('quantidade').value);

    if (selecionarProduto == 'Fone de ouvido - R$100') {
        valor = 100 * qtde;
    } else if (selecionarProduto == 'Celular - R$1400') {
        valor = 1400 * qtde;
    } else {
        valor = 5000 * qtde;
    }
     
    soma = valor + valorTotal;
    valorTotal = soma;


    mostrarPrecoFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`

}

function limpar() {
    mostrarPrecoFinal = document.querySelector('.carrinho__total');
    selecionarProduto = document.getElementById('produto').value;
    selecionarCarrinho = document.querySelector('.carrinho__produtos__produto');
    valorTotal = 0;
    qtde = 0;
    valor = 0;
    produto = '';
    selecionarCarrinho.innerHTML = '';
    mostrarPrecoFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
   
}
