document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Valida os campos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exibe mensagem de sucesso
    document.getElementById("mensagem-sucesso").style.display = "block";

    // Limpa os campos do formulário
    document.getElementById("form-contato").reset();
});

// Função para validar o formato do e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}