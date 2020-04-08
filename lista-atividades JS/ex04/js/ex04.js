function calculoMedia(){
  var media;
  var nota01 = parseFloat(document.getElementById('nota01').value);
  var nota02 = parseFloat(document.getElementById('nota02').value);
 
  media = (nota01 + nota02) / 2;
  
  var media ='A média aritmética é '+ media; 

  var divMedia = document.querySelector("#media");
  divMedia.textContent=media;
}
  var botao = document.querySelector("button");
  botao.addEventListener("click",calculoMedia);
