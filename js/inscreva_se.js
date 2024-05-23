import { connection } from "./conection.js";

export function handleNavScroll() {
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
export function connectionCadastro(){
    let conect = new connection;
    let name_input = document.getElementById("name-input").value;
    let name_input_2 = document.getElementById("name-input2").value;
    let seletor1 = document.getElementById("seletor1");
    let seletor2 = document.getElementById("seletor2");
    let name_input_3 = document.getElementById("name-input3").value;
    let name_input_4 = document.getElementById("name-input4").value;
    let name_input_5 = document.getElementById("name-input5").value;
    let name_input_6 = document.getElementById("name-input6").value;
    let seletor3 = document.getElementById("seletor3");
    let name_input_7 = document.getElementById("name-input7").value;
    let mensagem_textarea = document.getElementById("mensagem-textarea").value;
    let promisedCadastro = conect.cadastrar_usuario("cadastro",name_input, name_input_2, seletor1.value, seletor2.value, name_input_3, name_input_4, name_input_5, name_input_6, seletor3.value, name_input_7, mensagem_textarea);
    promisedCadastro.then(resultado => {
        console.log("funcionou", resultado);
    }).catch(error =>{
        console.error("ocorreu esse erro: ", error);
    });
}
window.addEventListener('scroll', handleNavScroll);