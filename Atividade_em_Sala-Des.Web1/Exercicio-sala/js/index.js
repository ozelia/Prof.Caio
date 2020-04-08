var campo = document.querySelector("input");
var botao = document.querySelector("button");
var lista = document.querySelector(".lista");




botao.addEventListener("click",function(){
    var texto = campo.value;
    var li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
});