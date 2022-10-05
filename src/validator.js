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
 
}, 

issuer : function (creditCardNumber) {
  const numVal = Array.from(creditCardNumber);
  const valorEmisor = numVal.slice(0,4)
  let issuer;
  for(let i = 0; i <valorEmisor.length; i++) {
    if(valorEmisor[0] == 1 && valorEmisor[1] == 8 && valorEmisor[2] == 0 && valorEmisor[3] ==0){
      issuer = "JCB"
    }

if (valorEmisor[0] == 4){
       issuer = "Visa"
}  
   if (valorEmisor[0] == 5 && valorEmisor[1] == 1){
       issuer = "MasterCard"
   }
   if (valorEmisor[0] == 6 && valorEmisor[1] == 0 && valorEmisor[2] == 1 && valorEmisor[3] ==1){
       issuer = "Discover"
   }
}if(issuer == undefined){
   issuer = "Franquicia"
}
return issuer;

}

};

export default validator;
