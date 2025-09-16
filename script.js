let precoAtual = 40.65;

function selecionarKit(nome, preco, imagem) {
  precoAtual = preco;
  document.getElementById("preco").innerText = preco.toFixed(2);
  document.getElementById("main-img").src = imagem;
  
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
  const total = precoAtual * quantity;
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
});