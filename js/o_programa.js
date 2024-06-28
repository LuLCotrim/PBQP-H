function toggleAltura1() {
    toggleAltura(1);
}
function toggleAltura2() {
    toggleAltura(2);
}
function toggleAltura3() {
    toggleAltura(3);
}
function toggleAltura4() {
    toggleAltura(4);
}
function toggleAltura5() {
    toggleAltura(5);
}
function toggleAltura6() {
    toggleAltura(6);
}
function toggleAltura7() {
    toggleAltura(7);
}
function toggleAltura8() {
    toggleAltura(8);
}
function toggleAltura9() {
    toggleAltura(9);
}
function toggleAltura10() {
    toggleAltura(10);
}
function toggleAltura11() {
    toggleAltura(11);
}
function toggleAltura12() {
    toggleAltura(12);
}
function toggleAltura13() {
    toggleAltura(13);
}
function toggleAltura14() {
    toggleAltura(14);
}
function toggleAltura15() {
    toggleAltura(15);
}

function toggleAltura(numero) {
    let conteudo = document.getElementById('conteudo'+numero+'_historico');
    let conteudo1 = document.getElementById('conteudo'+numero+'_ofc');
    let barra = document.getElementById('enfeite_barra_historico');
    let historico = document.getElementById('historico');
    if(conteudo.style.height === '16vh'){
        conteudo.style.height = '0vh';
        conteudo1.style.display = 'none';
        let currentHeight = parseFloat(window.getComputedStyle(barra).height);
        let newHeight = currentHeight - (window.innerHeight * 0.16);
        barra.style.height = newHeight + 'px';
        let currentHeight2 = parseFloat(window.getComputedStyle(historico).height);
        let newHeight2 = currentHeight2 - (window.innerHeight * 0.16);
        historico.style.height = newHeight2 + 'px';
    }else{
        conteudo.style.height = '16vh';
        conteudo1.style.display = 'block';
        let currentHeight = parseFloat(window.getComputedStyle(barra).height);
        let newHeight = currentHeight + (window.innerHeight * 0.16);
        barra.style.height = newHeight + 'px';
        let currentHeight2 = parseFloat(window.getComputedStyle(historico).height);
        let newHeight2 = currentHeight2 + (window.innerHeight * 0.16);
        historico.style.height = newHeight2 + 'px';
    }
    
}
function handleNavScroll() {
    const nav = document.getElementById('nav');
    const button_nav = document.getElementById('button_nav');
    const scrollPosition = window.scrollY;
    const topPosition = nav.getBoundingClientRect().top;
    let ul_nav = document.getElementById("ul_nav");
    if (topPosition <= 0 && scrollPosition > 0) {
        nav.classList.add('nav-fixed');
        nav.classList.remove('nav-top');
        button_nav.classList.add('button_nav_fixed');
        button_nav.classList.remove('button_nav'); 
        ul_nav.style.position = 'fixed';
        if( window.matchMedia('(max-width: 768px)').matches){
            ocupation.style.height = "32vh"
        }else{
            ocupation.style.height = "264px"
        }
    } else {
        nav.classList.remove('nav-fixed');
        nav.classList.add('nav-top');
        button_nav.classList.add('button_nav');
        button_nav.classList.remove('button_nav_fixed');
        ul_nav.style.position = 'relative';
        if( window.matchMedia('(max-width: 768px)').matches){
             ocupation.style.height = "27vh"
        }else{
            ocupation.style.height = "264px"
        }
    }
}

function toggleAlturaMobile1() {
    toggleAlturam(1);
}
function toggleAlturaMobile2() {
    toggleAlturam(2);
}
function toggleAlturaMobile3() {
    toggleAlturam(3);
}
function toggleAlturaMobile4() {
    toggleAlturam(4);
}
function toggleAlturaMobile5() {
    toggleAlturam(5);
}
function toggleAlturaMobile6() {
    toggleAlturam(6);
}
function toggleAlturaMobile7() {
    toggleAlturam(7);
}
function toggleAlturaMobile8() {
    toggleAlturam(8);
}
function toggleAlturaMobile9() {
    toggleAlturam(9);
}
function toggleAlturaMobile10() {
    toggleAlturam(10);
}
function toggleAlturaMobile11() {
    toggleAlturam(11);
}
function toggleAlturaMobile12() {
    toggleAlturam(12);
}
function toggleAlturaMobile13() {
    toggleAlturam(13);
}
function toggleAlturaMobile14() {
    toggleAlturam(14);
}
function toggleAlturaMobile15() {
    toggleAlturam(15);
}
// Variável de estado para rastrear o estado de expansão
let isExpanded = {};

function toggleAlturam(numero) {
    let barra = document.getElementById("barra_enfeite_mobile");
    let box = document.getElementById("box_mobile" + numero);
    let conteudo = document.getElementById("box_center_" + numero);
    let altura = document.getElementById("h2_box2_"+numero);
    let historico = document.getElementById("historico");
      
        // Valores para ajuste de altura
        let alturaAumento = altura.offsetHeight + 75;
        let conteudoAumento = box.offsetHeight + altura.offsetHeight + 5;
        let barraAumento = alturaAumento; // Proporção ajustada
        let historicoAumento = alturaAumento;

        // Verifica se o número atual está expandido
        if (!isExpanded[numero]) {
            altura.innerHTML = "-";
            box.style.height = (box.offsetHeight + alturaAumento) + "px";
            conteudo.style.height = conteudoAumento + "px";
            barra.style.height = (barra.offsetHeight + barraAumento) + "px";
            historico.style.height = (historico.offsetHeight + historicoAumento) + "px";
            isExpanded[numero] = true; // Marca como expandido
        } else {
            altura.innerHTML = "+";
            box.style.height = "138px";
            conteudo.style.height = "4.5vh";
            barra.style.height = (barra.offsetHeight - barraAumento) + "px";
            historico.style.height = (historico.offsetHeight - historicoAumento) + "px";
            isExpanded[numero] = false; // Marca como contraído
        }
}





window.addEventListener('scroll', handleNavScroll);