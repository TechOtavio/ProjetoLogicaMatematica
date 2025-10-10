let estadoBotao = false;
let botao = document.getElementById('botaoAtivado') || document.getElementById('botaoDesativado');

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
})  