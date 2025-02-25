function nomear(id) {
    const elemento = document.getElementById(id);
    elemento.addEventListener('click', function() {
        if (confirm("Posso saber seu nome?") == true) {
            let nome = prompt("Insira seu nome: ");
            alert("Seja bem vindo, " + nome + '!');
        } else {
            alert("Você respondeu que não. Que pena! Bye bye!");
        }
    });
}

nomear('botao');