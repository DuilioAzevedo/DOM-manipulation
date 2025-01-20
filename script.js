// Referência ao contêiner e botão
const conteiner = document.getElementById("conteiner");
const botaoInfo = document.getElementById("botaoInfo");

// Adicionar evento ao botão
botaoInfo.addEventListener("click", function() {
    console.log("Pai do contêiner:", conteiner.parentNode.nodeName);
    console.log("Filhos do contêiner:", conteiner.children);
    console.log("Primeiro filho:", conteiner.firstElementChild.textContent);
    console.log("Último filho:", conteiner.lastElementChild.textContent);
});