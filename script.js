
let precoAtual = 40.65;
let precoPixAtual = 13.42; // valor inicial do produto 100g no pix

function selecionarKit(nome, preco, imagem, titulo) {
  precoAtual = preco;
  document.getElementById("main-img").src = imagem;
  if (titulo) {
    document.getElementById("product-title").innerText = titulo;
  }
  // Esconde todos os blocos de preço
  document.getElementById('preco-100g').style.display = 'none';
  document.getElementById('preco-40mg').style.display = 'none';
  document.getElementById('preco-80mg').style.display = 'none';
  document.getElementById('preco-120mg').style.display = 'none';
  // Esconde as thumbs do 100g por padrão
  var thumbs100g = document.getElementById('thumbs-100g');
  if (thumbs100g) thumbs100g.style.display = 'none';

  // Mostra o bloco de preço correto e pega o valor do pix
  if (nome === '100g') {
    document.getElementById('preco-100g').style.display = '';
    precoPixAtual = parseFloat(document.querySelector('#preco-100g .preco-grande').textContent.replace('R$', '').replace(',', '.'));
    if (thumbs100g) thumbs100g.style.display = '';
  } else if (nome === '40mg') {
    document.getElementById('preco-40mg').style.display = '';
    precoPixAtual = parseFloat(document.querySelector('#preco-40mg .preco-grande').textContent.replace('R$', '').replace(',', '.'));
  } else if (nome === '80mg') {
    document.getElementById('preco-80mg').style.display = '';
    precoPixAtual = parseFloat(document.querySelector('#preco-80mg .preco-grande').textContent.replace('R$', '').replace(',', '.'));
  } else if (nome === '120mg') {
    document.getElementById('preco-120mg').style.display = '';
    precoPixAtual = parseFloat(document.querySelector('#preco-120mg .preco-grande').textContent.replace('R$', '').replace(',', '.'));
  }
  updateTotal();
}

function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let newValue = parseInt(quantityInput.value) + change;
  
  if (newValue < 1) newValue = 1;
  
  quantityInput.value = newValue;
  
  updateTotal();
}

function updateTotal() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = precoPixAtual * quantity;
  document.getElementById("total").innerText = total.toFixed(2);
}

function comprar() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = precoAtual * quantity;
  
  alert(`Redirecionando para a página de pagamento...\nTotal: R$ ${total.toFixed(2)}`);
  // window.location.href = "https://seu-link-de-pagamento.com";
}

document.addEventListener('DOMContentLoaded', function() {
  updateTotal();

  let cartCount = 0;
  const cartCountSpan = document.getElementById('cart-count');
  const addToCartBtn = document.getElementById('add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      cartCount += 1;
      cartCountSpan.textContent = cartCount;
    });
  }

  const cartIcon = document.getElementById('cart-icon-container');
  if (cartIcon) {
    cartIcon.addEventListener('click', function() {
      cartCount = 0;
      cartCountSpan.textContent = cartCount;
    });
  }
});