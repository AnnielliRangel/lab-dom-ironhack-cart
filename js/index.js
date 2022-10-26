// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  
  //obter o elemento DOM que contém o price:
  const price = product.querySelector('.price span')
  //obter a quantidade
  const quantity = product.querySelector(".quantity input")

  const subtotal = product.querySelector(".subtotal span")
  
  console.log(price.innerText)
  console.log(quantity.value)
  const total= (+price.innerText * +quantity.value)
  subtotal.innerText = total

  
  
  return total
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

    // ITERATION 2
  const products = document.getElementsByClassName("product")
  let total = 0
  
  for(let i=0; i<products.length; i++){
    total += updateSubtotal(products[i])
  }

  // ITERATION 3
 const valortotal = document.querySelector("#total-value span")
 valortotal.innerText = total
 
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const btnpai = event.currentTarget.parentNode //div do botão
  const produtoRemove =  btnpai.parentNode // div do produto (td do html)
  const linhadoproduto = produtoRemove.parentNode 

  linhadoproduto.removeChild(produtoRemove)
  calculateAll()

  


  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const grupoBotoes = document.querySelectorAll(".btn-remove")
  console.log(grupoBotoes)

  grupoBotoes.forEach((botao)=>{
    botao.addEventListener("click",removeProduct)
  })

  //... your code goes here
});
