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
function alterarTamanho1(){
  var p1 = 'Implantar os projetos do PBQP-H/ SiAC;';
  var p2 = 'Atender às normas técnicas da ABNT, incluindo o conjunto de Normas de Desempenho;';
  var p3 = 'Adquirir produtos, componentes e sistemas construtivos que atendam às normas da ABNT e que sejam produtos e empresas certificadas.';
  var p4 = 'Empresa habilitada para participar de licitações, financiamentos e obras em que o cliente exija a certificação;';
  var p5 = 'Processos e produtos de qualidade e aumento da produtividade;';
  var p6 = 'Aumento da competitividade e visibilidade comercial da empresa.';
  alterarTamanho(1, p1, p2, p3, p4, p5, p6);
}
function alterarTamanho2(){
  var p1 = 'Atendimento às normas técnicas da ABNT e legislações específicas.';
  var p2 = 'Atendimento à requisitos técnicos de desempenho relativos à segurança, usabilidade e sustentabilidade;';
  var p3 = 'Participar do PBQP-H, seja no SiMaT/ PSQ ou SINAT, caso seja um produto enquadrado.';
  var p4 = 'Habilitação para fornecimento em obras públicas, licitadas, financiadas ou ainda de exigência do cliente;';
  var p5 = 'Visibilidade da marca junto aos construtores e usuários;';
  var p6 = 'Aumento de qualidade e produtividade, assim como da competitividade.';
  alterarTamanho(2, p1, p2, p3, p4, p5, p6);
}
function alterarTamanho3(){
  var p1 = 'Participar da criação de novos projetos e acompanhamento das ações do PBQP-H;';
  var p2 = 'Uso do poder de compra para exigência das certificações do PBQP-H de seus prestadores de serviços e fornecedores, bem como de terceiros.';
  var p3 = 'Incentivar a cobrança do uso do PBQP-H nas diversas esferas públicas e privadas.';
  var p4 = 'Obras públicas de qualidade;';
  var p5 = 'Melhora na aplicação do dinheiro público em obras e serviços de construção civil;';
  var p6 = 'Aumento da qualidade de vida dos usuários das obras públicas.';
  alterarTamanho(3, p1, p2, p3, p4, p5, p6);
}
function alterarTamanho4(){
  var p1 = 'Adquirir imóveis e materiais de construção civil de empresas certificadas no PBQP-H, em conformidade com padrões de qualidade.';
  var p2 = 'Exigir seus direitos na compra ou contratação de serviços de construção civil, desde o momento da contratação ao pós-entrega.';
  var p3 = 'Denunciar aos órgãos competentes a má qualidade ou não atendimento às normas e regimentos dos produtos.';
  var p4 = 'Garantia de qualidade na compra do seu imóvel ou no uso de materiais com qualidade.';
  var p5 = 'Atendimento pós-entrega do imóvel obrigatória;';
  var p6 = 'Assistência Técnica e manutenção garantida.';
  alterarTamanho(4, p1, p2, p3, p4, p5, p6);
}
function alterarTamanho5(){
  var p1 = 'Exigência das certificações do PBQP-H em seus projetos nas diversas modalidades de financiamentos oferecidos;';
  var p2 = 'Fiscalização da qualidade das obras financiadas com seus recursos;';
  var p3 = 'Incentivar e beneficiar as obras e produtos certificados.';
  var p4 = 'Usuário mutuário satisfeito por ter financiado um imóvel de qualidade;';
  var p5 = 'Baixo retorno de devolução de imóvel ou cancelamento de contratos.';
  var p6 = 'Redução de inadimplência.';
  alterarTamanho(5, p1, p2, p3, p4, p5, p6);
}
function alterarTamanho(numero, p1, px, p3, p4, p5, p6) {
  let div = document.getElementById('box_' + numero);
  let p = document.getElementById('p'+numero);
  p.classList.remove('p_razoes');
  p.classList.add('p1_razoes');
  div.classList.remove('box');
  div.classList.add('iniciado');
  for(var i = 1; i<=5; i++){
    let div2 = document.getElementById('box_' + i);
    let p2 = document.getElementById('p'+i);
    if(i!==numero){
      div2.classList.remove('iniciado');
      div2.classList.add('box');
      p2.classList.remove('p1_razoes');
      p2.classList.add('p_razoes');
    }
  }
  let paragrafos = [p1, px, p3, p4, p5, p6];
  console.log(paragrafos[1])
  for(let i = 1; i<=6; i++){
    let pX = document.getElementById("p_contents_"+i);
    pX.innerText = paragrafos[i - 1];
  }
}
window.addEventListener('scroll', handleNavScroll);