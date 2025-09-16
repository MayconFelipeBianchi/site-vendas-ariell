// Variáveis globais
let precoAtual = 40.65;

// Função para selecionar o kit
function selecionarKit(nome, preco, imagem) {
  precoAtual = preco;
  document.getElementById("preco").innerText = preco.toFixed(2);
  document.getElementById("main-img").src = imagem;
  
  // Atualiza o total com o novo preço
  updateTotal();
}

// Função para alterar a quantidade
function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let newValue = parseInt(quantityInput.value) + change;
  
  // Garante que o valor não seja menor que 1
  if (newValue < 1) newValue = 1;
  
  quantityInput.value = newValue;
  
  // Atualiza o total
  updateTotal();
}

// Função para atualizar o valor total
function updateTotal() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = precoAtual * quantity;
  document.getElementById("total").innerText = total.toFixed(2);
}

// Função para comprar
function comprar() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = precoAtual * quantity;
  
  alert(`Redirecionando para a página de pagamento...\nTotal: R$ ${total.toFixed(2)}`);
  // window.location.href = "https://seu-link-de-pagamento.com";
}

// Inicializa o total quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  updateTotal();
});