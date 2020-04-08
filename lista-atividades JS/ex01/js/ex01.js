function mostrarVizinhos(){
    var inputNumero = document.querySelector("input");
    var n = parseInt(inputNumero.value);
    var ve = n-1;
    var vd = n+1;
    
    var resultado ='Os vizinhos de '+n+' são: '+ve+' e '+vd;  
    var divResultado = document.querySelector("#resultado");
    divResultado.textContent=resultado;
}
var botao = document.querySelector("button");
botao.addEventListener("click",mostrarVizinhos);