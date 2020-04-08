function addItem(){                
    var newTR     = document.createElement("TR");
    var newINPUT  = document.createElement("INPUT"); 
    var newTD     = document.createElement("TD");
    var newBt     = document.createElement("BUTTON");
    newBt.innerHTML = 'Excluir Item';

    
    var newINPUT1 = document.createElement("INPUT"); 
     
    newTR.appendChild(newINPUT);         
    newTR.appendChild(newTD);       
    newTR.appendChild(newINPUT1);       
   
    newTR.appendChild(newBt);
     
    var element = document.getElementById("item");          
    element.appendChild(newTR);      
  }

  function removeItem(r){
           var i = r.parentNode.parentNode.rowIndex;
           alert(i);
           document.getElementById("idTable").deleteRow(i);     
  }
  