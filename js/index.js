// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //obter o elemento DOM que contém o price:
  const price = product.querySelector('.price span');
  //obter a quantidade
  const quantity = product.querySelector('.quantity input');

  const subtotal = product.querySelector('.subtotal span');

  console.log(price.innerText);
  console.log(quantity.value);
  const total = +price.innerText * +quantity.value;
  subtotal.innerText = total;

  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  const valortotal = document.querySelector('#total-value span');
  valortotal.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const btnpai = event.currentTarget.parentNode; //div do botão
  const produtoRemove = btnpai.parentNode; // div do produto (td do html)
  const linhadoproduto = produtoRemove.parentNode;

  linhadoproduto.removeChild(produtoRemove);
  calculateAll();

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const novoProduto = document.querySelectorAll('.create-product input');

  const novoNome = novoProduto[0];
  const novoPreco = novoProduto[1];
  const btnCreate = document.querySelector(`#create`);
  const novaLinha = document.querySelector('tbody');
  novaLinha.getElementsByTagName('.product');

  //Povoar novaLinha com todos os filhos de tbody

  //substituir name span por novoNOme

  //substituir price por novo preço

  /*let tbody = document.createElement('tbody');
  tbody.innerText = element;
  novaLinha.appendChild(tbody);*/

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const grupoBotoes = document.querySelectorAll('.btn-remove');
  //console.log(grupoBotoes)

  grupoBotoes.forEach((botao) => {
    botao.addEventListener('click', removeProduct);
  });

  const criarProduto = document.getElementById(`create`);
  criarProduto.addEventListener(`click`, createProduct);
  //console.log(criarProduto)

  //... your code goes here
});
