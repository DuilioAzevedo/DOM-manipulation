// Referência ao botão e contêiner
const botaoAdicionar = document.getElementById("botaoAdicionar");
const conteiner = document.getElementById("conteiner");

// Adicionar evento ao botão
botaoAdicionar.addEventListener("click", function() {
    // Criar novo elemento
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Parágrafo adicionado dinamicamente!";

    // Adicionar o parágrafo ao contêiner
    conteiner.appendChild(novoParagrafo);
});