function dividirConta(){
var conta;
var totConta = parseFloat(document.getElementById("totConta").value);
var totClientes = parseInt(document.getElementById("totClientes").value);
conta = totConta/totClientes;

var valor ='Cada cliente vai pagar R$ '+ conta; 

var divValor = document.querySelector("#valor");
divValor.textContent=valor;


}
var botao = document.querySelector("button");
botao.addEventListener("click",dividirConta);

