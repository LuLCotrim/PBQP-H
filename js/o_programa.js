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

    if (topPosition <= 0 && scrollPosition > 0) {
        nav.classList.add('nav-fixed');
        nav.classList.remove('nav-top');
        button_nav.classList.add('button_nav_fixed');
        button_nav.classList.remove('button_nav');
    } else {
        nav.classList.remove('nav-fixed');
        nav.classList.add('nav-top');
        button_nav.classList.add('button_nav');
        button_nav.classList.remove('button_nav_fixed');
    }
}

window.addEventListener('scroll', handleNavScroll);