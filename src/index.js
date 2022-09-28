import validator from './validator.js';
const formCard = document.getElementById("form-card");





formCard.addEventListener("submit", e=>{
    e.preventDefault();
   
    const entrada = document.getElementById("input-card")
    const mensajeCard = document.getElementById("mensaje-card");
    const cardNews = entrada.value;
    const numVal = /\D/g;
    const valnum = numVal.test(cardNews);
    if (cardNews === "" ||valnum == true ) {
        mensajeCard.innerHTML = "Escribe mensaje valido";
        entrada.value = "";
      } else {
             let entradaArray = cardNews;
             validator.isValid(entradaArray)
             validator.maskify(entradaArray)
             entrada.value = ""; 
              
        
      }
});

//console.log(validator);
