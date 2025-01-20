// Alterar texto do título
const titulo = document.getElementById("titulo");
titulo.textContent = "Título Atualizado com JavaScript";

// Adicionar evento ao botão
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
    const caixa = document.getElementById("caixa");
    caixa.textContent = "Você clicou no botão!";
    caixa.style.backgroundColor = "lightblue";
    caixa.style.color = "darkblue";
});