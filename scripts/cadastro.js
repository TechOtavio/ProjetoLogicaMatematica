let inputNome = document.getElementById('nome');
let inputData = document.getElementById('data');

let inputEmail = document.getElementById('email');
let inputConfirmarEmail = document.getElementById('confirmarEmail');
let pErroEmail = document.getElementById('textoErroEmail');

let inputSenha = document.getElementById('senha');
let inputConfirmarSenha = document.getElementById('confirmarSenha');
let pErroSenha = document.getElementById('textoErroSenha');

let botao = document.getElementById('botaoBloqueado') || document.getElementById('botaoAtivado') || document.getElementById('botaoDesativado');

let PessoaObjeto = {
    nome: null,
    idade: null,
    email: null,
    senha: null
};

let nome;
let idade;
let email;
let confirmarEmail;
let senha;
let confirmarSenha;

let valorInputData;
let valorInputEmail;
let valorInputConfirmarEmail;
let valorInputSenha;
let valorInputConfirmarSenha;

let validacaoIdade;
let estadoBotao = false;

inputNome.addEventListener('change', (event) => {
    nome = event.target.value;
})
inputData.addEventListener('change', (event) => {
    valorInputData = event.target.value;
    valorInputData = Number(valorInputData.slice(0, 4))
    validacaoIdade = 2025 - valorInputData 
    if(validacaoIdade >= 14 && validacaoIdade <= 100){
        idade = validacaoIdade
    }else{
        idade = null;
    }
})

//Captando mudança de estado dos componentes Emails
inputEmail.addEventListener('change', (event) => {
    valorInputEmail = event.target.value;
    if(valorInputConfirmarEmail == valorInputEmail){
        email = valorInputEmail;
        confirmarEmail = valorInputConfirmarEmail;
        pErroEmail.textContent = '';
    }
    else{
        email = null;
        confirmarEmail = null;
        pErroEmail.textContent = 'Confirmação de Email Inválido!';
    }
})

inputConfirmarEmail.addEventListener('change', (event) => {
    valorInputConfirmarEmail = event.target.value;
    if(valorInputConfirmarEmail == valorInputEmail){
        email = valorInputEmail;
        confirmarEmail = valorInputConfirmarEmail;
        pErroEmail.textContent = '';
    }
    else{
        email = null;
        confirmarEmail = null;
        pErroEmail.textContent = 'Confirmação de Email Inválido!'; 
    }
})

//Captando mudança de estado dos componentes Senhas
inputSenha.addEventListener('change', (event) => {
    valorInputSenha = event.target.value;
    if (valorInputConfirmarSenha == valorInputSenha) {
        senha = valorInputSenha;
        confirmarSenha = valorInputConfirmarSenha;
        pErroSenha.textContent = '';
    }else {
        senha = null;
        confirmarSenha = null;
        pErroSenha.textContent = 'Confirmação de Senha Inválido!';
    }
})

inputConfirmarSenha.addEventListener('change', (event) => {
    valorInputConfirmarSenha = event.target.value;
    if (valorInputConfirmarSenha == valorInputSenha) {
        senha = valorInputSenha;
        confirmarSenha = valorInputConfirmarSenha;
        pErroSenha.textContent = '';
    }else {
        senha = null;
        confirmarSenha = null;
        pErroSenha.textContent = 'Confirmação de Senha Inválido!';
    }
})

document.addEventListener('change', () => {
    if(nome && idade && email && confirmarEmail && senha && confirmarSenha){
        botao.id = 'botaoDesativado';
    }else{
        botao.id = 'botaoBloqueado';
    }
})

botao.addEventListener('click', (event) => {
    event.preventDefault();
    if(estadoBotao){
        botao.id = 'botaoDesativado';
        estadoBotao = false;
    }else{
        botao.id = 'botaoAtivado';
        estadoBotao = true;
    }

    if(nome && idade && email && confirmarEmail && senha && confirmarSenha){
        PessoaObjeto.nome = nome;
        PessoaObjeto.idade = idade;
        PessoaObjeto.email = email;
        PessoaObjeto.senha = senha;
        localStorage.setItem(window.localStorage.length + 1, JSON.stringify(PessoaObjeto));    

        setTimeout(() => {
            window.location.href = 'cadastrado.html'
        }, 3000);
    }else{
        
    }
})