function toggleAltura1() {
    toggleAltura(1, 5.5);
}
function toggleAltura2() {
    toggleAltura(2, 5.5);
}
function toggleAltura3() {
    toggleAltura(3, 5.7);
}
function toggleAltura4() {
    toggleAltura(4, 5.7);
}
function toggleAltura5() {
    toggleAltura(5, 5.5);
}
function toggleAltura6() {
    toggleAltura(6, 5.8);
}
function toggleAltura7() {
    toggleAltura(7, 5.35);
}
function toggleAltura8() {
    toggleAltura(8, 5.2);
}
function toggleAltura9() {
    toggleAltura(9, 5.9);
}
function toggleAltura10() {
    toggleAltura(10, 5.9);
}
function toggleAltura11() {
    toggleAltura(11, 5.8);
}
function toggleAltura12() {
    toggleAltura(12, 5.3);
}
function toggleAltura13() {
    toggleAltura(13, 6);
}
function toggleAltura14() {
    toggleAltura(14, 5.4);
}
function toggleAltura15() {
    toggleAltura(15, 5.4);
}

function toggleAltura(numero, marginBottom) {
    var alturaInicial = 2; 
    var conteudoDiv = document.getElementById("conteudo" + numero + "_historico");
    var alturaAtual = conteudoDiv.offsetHeight;
    var conteudo_ofc = document.getElementById("conteudo"+numero+"_ofc");
    var conteudoButton = document.getElementById("button_title" + numero + "_historico");
    var marginbottonData = document.getElementById("h3_barra_historico_" + numero);

        let div = document.getElementById("enfeite_barra_historico");
        let divOfc = document.getElementById("historico");
        const valueDivOfc = divOfc.offsetHeight;
        const valueBarra = div.offsetHeight;
        const val = window.innerHeight;
    if (alturaAtual === alturaInicial) {
        conteudoDiv.style.height = "16vh";
        conteudoButton.innerHTML = "-";
        marginbottonData.style.marginBottom = (16+marginBottom) + "vh";
        conteudo_ofc.style.display = "block";
        div.style.height = (((valueBarra/val)*100)+16)+"vh";
        divOfc.style.height = (((valueDivOfc/val)*100)+16)+"vh";
    } else {
        conteudoDiv.style.height = "0vh";
        conteudoButton.innerHTML = "+";
        marginbottonData.style.marginBottom = marginBottom + "vh";
        conteudo_ofc.style.display = "none";
        div.style.height = (((valueBarra/val)*100)-16)+"vh";
        divOfc.style.height = (((valueDivOfc/val)*100)-16)+"vh";
    }
}


