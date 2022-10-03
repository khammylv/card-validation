const validator = {
  isValid : function(creditCardNumber){
    const cardNew = Array.from(creditCardNumber)
    const cards =  cardNew.reverse();
    let cardPares = cards.filter((num, index) =>index % 2 != 0);
    let cardNum = cards.filter((num, index) =>index % 2 == 0);
    let dobles = cardPares.map((element) => element * 2);
 
       
       
         for (let i = 0; i < dobles.length; i++) {
           if (dobles[i] >=10){
            
            dobles[i] = parseInt(String(dobles[i]).slice(0,1)) +  parseInt(String(dobles[i]).slice(-1))
             cardNum.push(dobles[i])
           }else{ 
            cardNum.push(dobles[i]);
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
  
  const cardEntrada = Array.from(creditCardNumber)
  let oculto = []
 
 for (let i = 0; i < cardEntrada.length; i++){
    oculto.push('#')
}
let letras = cardEntrada.slice(- 4)
let resulFinal = oculto.slice(0,- 4);



  
return resulFinal.join('') + letras.join('');
    
 
    
   
  
} 

};

export default validator;
