const produtos = [
  { id: 1, nome: "Whey Protein", preco: 120.00, img: "assets/img/produto1.png" },
  { id: 2, nome: "Creatina Monohidratada", preco: 85.00, img: "assets/img/produto2.png" },
  { id: 3, nome: "Pré-Treino Turbo", preco: 95.00, img: "assets/img/produto3.png" }
];

const listaProdutos = document.getElementById("lista-produtos");

produtos.forEach(produto => {
  const div = document.createElement("div");
  div.className = "col-md-4 mb-4";
  div.innerHTML = `
    <div class="card h-100">
      <img src="${produto.img}" class="card-img-top" alt="${produto.nome}">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${produto.nome}</h5>
        <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
        <button class="btn btn-warning mt-auto" onclick="adicionarCarrinho(${produto.id})">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `;
  listaProdutos.appendChild(div);
});

window.adicionarCarrinho = function(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(`${produto.nome} adicionado ao carrinho!`);
};
