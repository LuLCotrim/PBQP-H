function handleNavScroll() {
    const nav = document.getElementById('nav');
    const button_nav = document.getElementById('button_nav');
    const scrollPosition = window.scrollY;
    const topPosition = nav.getBoundingClientRect().top;
    let ul_nav = document.getElementById("ul_nav");
    let ocupation = document.getElementById("img_noticias_nav")
    if (topPosition <= 0 && scrollPosition > 0) {
        nav.classList.add('nav-fixed');
        nav.classList.remove('nav-top');
        button_nav.classList.add('button_nav_fixed');
        button_nav.classList.remove('button_nav'); 
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
        if( window.matchMedia('(max-width: 768px)').matches){
             ocupation.style.height = "27vh"
        }else{
            ocupation.style.height = "264px"
        }
    }
}

window.addEventListener('scroll', handleNavScroll);

const sections = [
    { id: 'programa', liId: 'li_1', inverseNavId: 'inverseVNav_1' },
    { id: 'projetos', liId: 'li_2', inverseNavId: 'inverseVNav_2' },
    { id: 'pq_participar', liId: 'li_3', inverseNavId: 'inverseVNav_3' },
    { id: 'como_implantar', liId: 'li_4', inverseNavId: 'inverseVNav_4' },
    { id: 'base_legal', liId: 'li_5', inverseNavId: 'inverseVNav_5' },
    { id: 'noticias', liId: 'li_6' },
    { id: 'downloads', liId: 'li_7' }
];

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function handleIntersection(entries) {
    // Verificar se a largura da tela é maior que 768px
    const isWideScreen = window.matchMedia("(min-width: 769px)").matches;
    entries.forEach(entry => {
        const liElement = document.getElementById(entry.target.dataset.liId);
        const inverseNavElement = entry.target.dataset.inverseNavId ? document.getElementById(entry.target.dataset.inverseNavId) : null;

        if (entry.isIntersecting && isWideScreen) {
            liElement.classList.add('active');
            if (inverseNavElement) inverseNavElement.classList.add('inverse-active');
        } else {
            liElement.classList.remove('active');
            if (inverseNavElement) inverseNavElement.classList.remove('inverse-active');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

sections.forEach(section => {
    const element = document.getElementById(section.id);
    element.dataset.liId = section.liId;
    if (section.inverseNavId) element.dataset.inverseNavId = section.inverseNavId;
    observer.observe(element);
});


document.getElementById('box_siac_como_implementar').addEventListener('click', function() {
            document.getElementById('p1_como_implementar').textContent = 'DECISÃO';
            document.getElementById('p2_como_implementar').textContent = 'IMPLEMENTAÇÃO';
            document.getElementById('p3_como_implementar').textContent = 'AUDITORIA';
            document.getElementById('p4_como_implementar').textContent = 'CERTIFICAÇÃO';
            document.getElementById('up1').innerHTML = "-";
            document.getElementById('up2').innerHTML = "+";
            document.getElementById('up3').innerHTML = "+";
            if (window.matchMedia("(max-width: 768px)").matches) {
                document.getElementById('img_siac').style.display = "flex";
                document.getElementById('img_siac2').style.display = "none";
                document.getElementById('img_siac3').style.display = "none";
            }
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '#03989d13';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '';
        });

        document.getElementById('box_simat_como_implementar').addEventListener('click', function() {
            document.getElementById('p1_como_implementar').textContent = 'SOLICITAÇÃO';
            document.getElementById('p2_como_implementar').textContent = 'CREDENCIAMENTO';
            document.getElementById('p3_como_implementar').textContent = 'AVALIAÇÃO';
            document.getElementById('p4_como_implementar').textContent = 'QUALIFICAÇÃO';
            document.getElementById('up2').innerHTML = "-";
            document.getElementById('up1').innerHTML = "+";
            document.getElementById('up3').innerHTML = "+";
            if (window.matchMedia("(max-width: 768px)").matches) {
                document.getElementById('img_siac').style.display = "none";
                document.getElementById('img_siac2').style.display = "flex";
                document.getElementById('img_siac3').style.display = "none";
            }
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '#03989d13';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '';
        });

        document.getElementById('box_sinac_como_implementar').addEventListener('click', function() {
            document.getElementById('p1_como_implementar').textContent = 'SOLICITAÇÃO';
            document.getElementById('p2_como_implementar').textContent = 'TESTES';
            document.getElementById('p3_como_implementar').textContent = 'AVALIAÇÃO';
            document.getElementById('p4_como_implementar').textContent = 'EMISSÃO';
            document.getElementById('up3').innerHTML = "-";
            document.getElementById('up2').innerHTML = "+";
            document.getElementById('up1').innerHTML = "+";
            if (window.matchMedia("(max-width: 768px)").matches) {
                document.getElementById('img_siac').style.display = "none";
                document.getElementById('img_siac2').style.display = "none";
                document.getElementById('img_siac3').style.display = "flex";
            }
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '#03989d13';
        });

const scrollAmount = 320;
function scrollRight() {
    const outerContainer = document.getElementById('box_mobile');
    outerContainer.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}