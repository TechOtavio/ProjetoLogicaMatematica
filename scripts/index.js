let inputEmail = document.getElementById('email')
let inputSenha = document.getElementById('senha')
let botao = document.getElementById('botaoAtivado') || document.getElementById('botaoDesativado');
let pErro = document.getElementById('textoErro')

let email = (JSON.parse(localStorage.getItem(1))).email;
let senha = (JSON.parse(localStorage.getItem(1))).senha;
console.log(window.localStorage.length)

let valorInputEmail;
let valorInputSenha;

let estadoBotao = false;


inputEmail.addEventListener('change', (event) => {
    valorInputEmail = event.target.value;
})

inputSenha.addEventListener('change', (event) => {
    valorInputSenha = event.target.value;
})

botao.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Página impedidado de recarregar com sucesso!");

    if(estadoBotao){
        botao.id = 'botaoDesativado';
        estadoBotao = false;
    }else{
        botao.id= 'botaoAtivado';
        estadoBotao = true;
    }

    if(valorInputEmail != email || valorInputSenha != senha){
        pErro.textContent = `Credenciamento inválido, cadastre-se ou tente novamente!`
    }

    setTimeout(() => {
            window.location.href = 'logado.html'
        }, 2000);
})