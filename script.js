// Referência aos botões
const adItem = document.getElementById("adItem");
const remItem = document.getElementById("remItem");
const lista = document.getElementById("lista");

// Adicionar evento ao botão
adItem.addEventListener("click", function() {
    // Criar novo elemento
    const novoitem = document.createElement("li");
    novoitem.textContent = "Item";

    // Adicionar o parágrafo ao contêiner
    lista.appendChild(novoitem);
});

// Adicionar evento ao botão
remItem.addEventListener("click", function() {
    // Remover elemento
    lista.removeChild(lista.lastElementChild);
    
});