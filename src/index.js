import validator from './validator.js';
const formCard = document.getElementById("form-card");





formCard.addEventListener("submit", e=>{
    e.preventDefault();
   
    const entrada = document.getElementById("input-card")
    const mensajeCard = document.getElementById("mensaje-card");
    const cardNews = entrada.value;
    const numVal = /\D/g;
    const valnum = numVal.test(cardNews);
    let valor = cardNews.length
     
    if(valor >=17 || valor <= 12) {
      mensajeCard.innerHTML = "La tarjeta debe tener entre 13 y 16 números";
      entrada.value = "";
    }else{
      if(cardNews === "" ||valnum == true ) {
        mensajeCard.innerHTML = "Escribe mensaje valido";
        entrada.value = "";
      } else {
             mostrarNumero()
             validarNumero()
             //validator.isValid(document.getElementById("input-card"))
             //validator.maskify(document.getElementById("input-card"))
             entrada.value = "";
            
            
              
        
      }
    }
     
});

function mostrarNumero(){
  const mensajeCard = document.getElementById("mensaje-card");
  let mostrarNum = validator.maskify(document.getElementById("input-card").value);
  let largoCard = mostrarNum.length;
 
  switch (largoCard){
      case 16:{
        let cadena = mostrarNum
        let cadena4 = cadena.slice(-4);
        let cadena3 = cadena.slice(8, 12);
        let cadena2 = cadena.slice(4,8);
        let cadena1 = cadena.slice(0, 4);
        mensajeCard.innerHTML= cadena1 + " " + cadena2 + " " + cadena3 + " " + cadena4;
        alert("16")
           break
      } 
              
      case 15:{
        let cadenaquince =mostrarNum
        let cadenaq4 = cadenaquince.slice(-4);
        let cadenaq3 = cadenaquince.slice(7, 11);
        let cadenaq2 = cadenaquince.slice(3,7);
        let cadenaq1 = cadenaquince.slice(0, 3);
        mensajeCard.innerHTML= cadenaq1 + " " + cadenaq2 + " " + cadenaq3 + " " + cadenaq4; 
        alert("15")
        break 
      }
          
      case 14:{
        let cadenacatorce = mostrarNum
        let cadenac4 = cadenacatorce.slice(-4);
        let cadenac3 = cadenacatorce.slice(6, 10);
        let cadenac2 = cadenacatorce.slice(2,6);
        let cadenac1 = cadenacatorce.slice(0, 2);
        mensajeCard.innerHTML= cadenac1 + " " + cadenac2 + " " + cadenac3 + " " + cadenac4;
           alert("14")
             break 
      }  
      case 13:{
        let cadenatrece = mostrarNum
        let cadenat4 = cadenatrece.slice(-4);
        let cadenat3 = cadenatrece.slice(5, 9);
        let cadenat2 = cadenatrece.slice(1,5);
        let cadenat1 = cadenatrece.slice(0, 1);
        mensajeCard.innerHTML= cadenat1 + " " + cadenat2 + " " + cadenat3 + " " + cadenat4;
          alert("13")
              break 
      }        
      default:  
       alert("cadena no valida")
  }
  

}

function validarNumero(){
  const validarNum =  validator.isValid(document.getElementById("input-card").value);
  alert(validarNum);
}


//console.log(validator);
