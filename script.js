//cadastro do usuário//
let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");

// Verifica se a idade é maior ou igual a 13
if (idade >= 13) {
    alert("Login permitido. Bem-vindo!");

    // Solicita nome e senha para verificação
    let nomeVerificar = prompt("Confirme seu nome:");
    let senha = prompt("Crie uma senha:");
    let senhaVerificar = prompt("Confirme sua senha:");

    // Verifica se o nome e senha conferem
    if (nomeVerificar === nome && senhaVerificar === senha) {
        alert("Você fez o login com sucesso!");
    } else {
        alert("Nome ou senha incorretos. Tente novamente.");
    }
} else {
    alert("Você não tem idade suficiente para realizar o login.");
}

