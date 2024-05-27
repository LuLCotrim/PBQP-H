function handleNavScroll() {
    const nav = document.getElementById('nav');
    const button_nav = document.getElementById('button_nav');
    const scrollPosition = window.scrollY;
    const topPosition = nav.getBoundingClientRect().top;
    
    // Verificar se a largura da tela é maior que 768px
    if (window.matchMedia("(min-width: 769px)").matches) {
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
    if (window.matchMedia("(min-width: 769px)").matches) {
        entries.forEach(entry => {
            const liElement = document.getElementById(entry.target.dataset.liId);
            const aElement = liElement.querySelector('a');
            const inverseNavElement = entry.target.dataset.inverseNavId ? document.getElementById(entry.target.dataset.inverseNavId) : null;

            if (entry.isIntersecting) {
                liElement.style.backgroundColor = 'white';
                aElement.style.color = 'black';
                if (inverseNavElement) inverseNavElement.style.stroke = 'black';
            } else {
                liElement.style.backgroundColor = '';
                aElement.style.color = '';
                if (inverseNavElement) inverseNavElement.style.stroke = 'white';
            }
        });
    }
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
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '#f0f0f0';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '';
        });

        document.getElementById('box_simat_como_implementar').addEventListener('click', function() {
            document.getElementById('p1_como_implementar').textContent = 'SOLICITAÇÃO';
            document.getElementById('p2_como_implementar').textContent = 'CREDENCIAMENTO';
            document.getElementById('p3_como_implementar').textContent = 'AVALIAÇÃO';
            document.getElementById('p4_como_implementar').textContent = 'QUALIFICAÇÃO';
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '#f0f0f0';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '';
        });

        document.getElementById('box_sinac_como_implementar').addEventListener('click', function() {
            document.getElementById('p1_como_implementar').textContent = 'SOLICITAÇÃO';
            document.getElementById('p2_como_implementar').textContent = 'TESTES';
            document.getElementById('p3_como_implementar').textContent = 'AVALIAÇÃO';
            document.getElementById('p4_como_implementar').textContent = 'EMISSÃO';
            document.getElementById('box_siac_como_implementar').style.backgroundColor = '';
            document.getElementById('box_simat_como_implementar').style.backgroundColor = '';
            document.getElementById('box_sinac_como_implementar').style.backgroundColor = '#f0f0f0';
        });
