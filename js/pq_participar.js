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
function alterarTamanho(elemento) {
  var divs = document.querySelectorAll('.box');
  
  divs.forEach(function(div) {
    if (div !== elemento) {
      div.style.height = '100px';
    } else {
      div.style.height = '150px';
    }
  });
}
window.addEventListener('scroll', handleNavScroll);