function lojasNavirai(){
    var inputNumero = document.querySelector("input");
    var totCompra = parseFloat(inputNumero.value);
    var valorDesconto = totCompra -(totCompra*0.1);
    var valorPrazo = totCompra/3;
    
    var resultado ='O valor da compra é de: R$ '+ ' '+ totCompra+' '+' \nCom desconto de 10% é: R$ '
    + ' '+valorDesconto+' \nE à prazo em (3x) R$'+' ' +valorPrazo +' '+'cada parcela.'; 

    var divResultado = document.querySelector("#resultado");
    divResultado.textContent=resultado;
}
var botao = document.querySelector("button");
botao.addEventListener("click",lojasNavirai);








