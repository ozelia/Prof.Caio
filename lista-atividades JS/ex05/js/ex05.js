function tabuada(){
    var numero = document.getElementById("numero").value;
    var multiplicador = 1;
    document.getElementById("conteudo").innerHTML = "";
    while(multiplicador <=10 ) {
        document.getElementById("conteudo").innerHTML += numero + "*" + multiplicador + "="
         + (numero*multiplicador)+"<br />";
        multiplicador++;
    }
}


























