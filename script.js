// Referência ao botão e parágrafo
const botaoRemover = document.getElementById("botaoRemover");
const paragrafo = document.getElementById("paragrafo");

// Adicionar evento ao botão
botaoRemover.addEventListener("click", function() {
    paragrafo.remove(); // Remove o elemento diretamente
});