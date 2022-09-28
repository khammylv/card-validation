const validator = {
  isValid : function(creditCardNumber){
    const cardNew = Array.from(creditCardNumber)
    const cards =  cardNew.reverse();
    let cardPares = cards.filter((num, index) =>index % 2 != 0);
    let cardNum = cards.filter((num, index) =>index % 2 == 0);
    let dobles = cardPares.map((element) => element * 2);
    let multCards = [];
     
        for (let doble of dobles) {
         if(doble >=10){
             multCards.push(doble);
         }else{
           cardNum.push(doble);
         }
        }
       
       
         for (let i = 0; i < multCards.length; i++) {
           if (multCards[i] >=10){
            
             multCards[i] = parseInt(String(multCards[i]).charAt(0)) +  parseInt(String(multCards[i]).charAt(1))
             cardNum.push(multCards[i])
           }
           
          }

        let sumaTotal = 0;
        for (let i = 0; i < cardNum.length; i++){
            sumaTotal += parseInt(cardNum[i]);
          }
        
         
        sumaTotal = sumaTotal % 10;
        
         if (sumaTotal === 0){
           return true;
         }else{
           return false;
         }
         
 

},

maskify : function (creditCardNumber) {
  let validar = validator.isValid(creditCardNumber);
  const cardEntrada = Array.from(creditCardNumber)
  let cambio = cardEntrada;
  let oculto = []
 
 for (let i = 0; i < cambio.length; i++){
    oculto.push('#')
}
let letras = cardEntrada.slice(- 4)
let resulFinal = oculto.slice(0,- 4);
 let valido = resulFinal.join('') + letras.join('')
 let invalido = resulFinal.join('') +letras.join('')

  if(validar == true){ 
    return valido
    
  }else{
    return invalido
   
  }
  

}
};

export default validator;
