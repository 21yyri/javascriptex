botao = document.getElementById("botao");
botao.addEventListener(onclick, function () {
    let opcao = document.getElementById("opcao");

    switch (opcao) {
        case ('primeiro'):
            document.write("Você é novato!");
        case ('segundo'):
            document.write("Você está no caminho!");
        case ('terceiro'):
            document.write("Você está quase lá!");
        case ('quarto'):
            document.write("Você é concluinte!");
})
