var email = "caio@ifms.edu.br"
var senha = "123456"
var btn = document.querySelector("button")
var msg = document.querySelector(".msg")
function logar(){
    var form = document.querySelector("form");
    var emailDigitado = form.email.value
    var senhaDigitada = form.senha.value
    if(email==emailDigitado && senha==senhaDigitada){
        msg.textContent = "Usuário Logado"
    }else{
        msg.textContent= "Usuário ou senha inválidos"
    }

}
btn.addEventListener("click",logar)