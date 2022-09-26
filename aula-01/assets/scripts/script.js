/*
É possível alterar o estilo da página pelo js acessando esse caminho:
(nome.style.width = 100%)
No caso irá estilizar o CAMPO id nome (input) e aumentar em cem por cento, mas já fiz isso no CSS
*/

let nome = document.getElementById('nome') //Não precisa colocar # acessando pelo getElementById
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOK = false
let emailOK = false
let mensagemOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length < 3) { //Se a qtde de caracteres do nome for menor que três...
        txtNome.innerHTML = 'Nome inválido!' //Coloca um valor dentro de txt, no caso, um texto
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido :)' //Se a qtde de caracteres for maior que três incluímos essa mensagem
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { //Se dentro do valor email NÃO conter o '@' ou NÃO possuir '.' ...
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length >= 200) { //Se o tamanho da mensagem foi maior que cem...
        txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 200 caracteres' 
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block' //Se entrar nesta condição ele esconde o contéudo da mensagem pra não ficar aparecendo
    } else {
        txtMensagem.style.display = 'none' //Maneira como um elemento aparece na página, no caso, não aparece
        mensagemOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOK == true && mensagemOk == true) {
        alert('Formuário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

function mapaZoom() {
    mapa.style.width = '700px' //Aumenta a largura do mapa
    mapa.style.height = '550px' //Aumenta a altura do mapa
}

function mapaNormal() { //Volta para o tamanho normal do mapa que está na página contatos
    mapa.style.width = '500px' 
    mapa.style.height = '350px'
}