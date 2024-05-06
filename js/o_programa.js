function toggleAltura1() {

    var alturaInicial = 1; 
    var conteudoDiv = document.getElementById("conteudo1_historico");
    var alturaAtual = conteudoDiv.offsetHeight;
    console.log(alturaAtual)
    if (alturaAtual === alturaInicial) {
        conteudoDiv.style.height = "12vh";
    } else {
        conteudoDiv.style.height = "0vh";
    }
}

