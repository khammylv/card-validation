import validator from './validator.js';
const formCard = document.getElementById("form-card");





formCard.addEventListener("submit", e=>{
    e.preventDefault();
   
    const entrada = document.getElementById("input-card")
    
    const cardNews = entrada.value;
    const numVal = /\D/g;
    const valnum = numVal.test(cardNews);
    let valor = cardNews.length
     

      if(valnum == true) {
        modalLetras()
        entrada.value = "";
      }else{    if(valor >=17 ||valor <= 12) {
            modalNumeros()
            entrada.value = "";
      }else{
             mostrarNumero()
            entrada.value = "";
            
            
              
        
      }
    }
  } 
);



function mostrarNumero(){
  const validarNum =  validator.isValid(document.getElementById("input-card").value);
  const mostrarNum = validator.maskify(document.getElementById("input-card").value);
  const entradaEmisor = validator.issuer(document.getElementById("input-card").value);
  const mensajeValido = document.getElementById("numero_card_valid");
  const mensajeInvalido = document.getElementById("numero_card_invalid");
  const vistaForm = document.getElementById("form");
  const vistaValid = document.getElementById("card_valid");
  const vistaInvalido = document.getElementById("card_invalid");
  let mensajeCard;
 let largoCard = mostrarNum.length;
 // mostrar en pantalla
  switch (largoCard){
      case 16:{
        let cadena = mostrarNum
        let cadena4 = cadena.slice(-4);
        let cadena3 = cadena.slice(8, 12);
        let cadena2 = cadena.slice(4,8);
        let cadena1 = cadena.slice(0, 4);
        mensajeCard = cadena1 + " " + cadena2 + " " + cadena3 + " " + cadena4;
        break
      } 
      case 15:{
        let cadenaquince =mostrarNum
        let cadenaq4 = cadenaquince.slice(-4);
        let cadenaq3 = cadenaquince.slice(7, 11);
        let cadenaq2 = cadenaquince.slice(3,7);
        let cadenaq1 = cadenaquince.slice(0, 3);
        mensajeCard = cadenaq1 + " " + cadenaq2 + " " + cadenaq3 + " " + cadenaq4; 
        break 
      }
      case 14:{
        let cadenacatorce = mostrarNum
        let cadenac4 = cadenacatorce.slice(-4);
        let cadenac3 = cadenacatorce.slice(6, 10);
        let cadenac2 = cadenacatorce.slice(2,6);
        let cadenac1 = cadenacatorce.slice(0, 2);
        mensajeCard = cadenac1 + " " + cadenac2 + " " + cadenac3 + " " + cadenac4;
          break 
      }  
      case 13:{
        let cadenatrece = mostrarNum
        let cadenat4 = cadenatrece.slice(-4);
        let cadenat3 = cadenatrece.slice(5, 9);
        let cadenat2 = cadenatrece.slice(1,5);
        let cadenat1 = cadenatrece.slice(0, 1);
        mensajeCard= cadenat1 + " " + cadenat2 + " " + cadenat3 + " " + cadenat4;
        break 
      }        
      default:  
       alert("cadena no valida")
  }
  let cardFranquicia = entradaEmisor 
  const  card = document.getElementById("card");
  const contenido =
    ` <div class="logo_card_franquicia">
          <i class="bx bxs-credit-card-front"></i>
          <p>${cardFranquicia}</p>
      </div>
      <div class="name_card"></div>
      <div class="card_text">
        <p>${mensajeCard}</p>
        <p class="card_name">Alison Peth</p>
     </div>`;
 const contenidoVisa =
  ` <div class="logo_card">
      <i class="bx bxl-visa"></i>
    </div>
    <div class="name_card"></div>
    <div class="card_text">
         <p>${mensajeCard}</p>
         <p class="card_name">Alison Peth</p>
    </div>`;
    const contenidoMasterCard =
    ` <div class="logo_card">
        <i class="bx bxl-mastercard"></i>
      </div>
      <div class="name_card"></div>
      <div class="card_text">
           <p>${mensajeCard}</p>
           <p class="card_name">Alison Peth</p>
      </div>`; 
    let tarjetas;
    if(cardFranquicia == "Visa"){
    tarjetas =contenidoVisa
   card.classList.add("cards_uno")
  }
  if(cardFranquicia == "MasterCard"){
   tarjetas = contenidoMasterCard;
    card.classList.add("cards_dos")
  }
  if(cardFranquicia != "MasterCard" && cardFranquicia != "Visa"){
    card.classList.add("cards_tres")
    tarjetas = contenido
  }
  if (validarNum == true) {
    vistaForm.style.display = 'none';
    vistaValid.style.display = 'block';
    mensajeValido.innerHTML = mensajeCard;
    card.innerHTML = tarjetas
  }else{
    vistaForm.style.display = 'none';
    vistaInvalido.style.display = 'block';
    mensajeInvalido.innerHTML = mensajeCard
  }
}
const modal = document.getElementById("mi_modal");
const textModal = document.getElementById("text_modal")
const cerrar = document.getElementById('close');
function modalLetras() {
  modal.style.display = 'block';
  textModal.innerText = "Por favor escribir un mensaje valido"
}
function modalNumeros(){
  modal.style.display = 'block';
  textModal.innerText = "La tarjeta debe tener entre 13 y 16 números";
}
cerrar.addEventListener('click', function(){
  modal.style.display = 'none';
});