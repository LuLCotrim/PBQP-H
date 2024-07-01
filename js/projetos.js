function handleNavScroll() {
    const nav = document.getElementById('nav');
    const button_nav = document.getElementById('button_nav');
    const scrollPosition = window.scrollY;
    const topPosition = nav.getBoundingClientRect().top;
    let ul_nav = document.getElementById("ul_nav");
    let ocupation = document.getElementById("pre_nav")
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

window.addEventListener('scroll', handleNavScroll);
