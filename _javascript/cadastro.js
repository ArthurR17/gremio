function validarFormulario() {
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (!nomeRegex.test(nome)) {
        alert("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Telefone inválido. Revise seu número de telefone, use parenteses e espaços.");
        return false;
    }

    var senha = document.getElementById("senha").value;
    var senhacof = document.getElementById("senhacof").value;
    if (senha != senhacof) {
        alert("As senhas não conferem!")
        return false;
    }
    return true;
}

function json() {

    let formulario = document.querySelector("#formulario")
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        let dados = {};
        dados.nome = document.querySelector("#nome").value;
        dados.idade = document.querySelector("#idade").value;
        dados.email = document.querySelector("#email").value;
        dados.telefone = document.querySelector("#telefone").value;
        dados.esporte = document.querySelector("#esporte").value;
        let dadosJSON = JSON.stringify(dados);
        alert("Dados Validados");
        document.write(dadosJSON);
    })
}   