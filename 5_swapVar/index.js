const btn = document.querySelector(".btn");
const aInput = document.querySelector(".a-side");
const bInput = document.querySelector(".b-side");
//Cuadro de respuesta
const answ = document.querySelector(".answ");


btn.addEventListener("click", swapingNumbers);

function swapingNumbers() {
  let a= aInput.value;
  let b= bInput.value;
  let temporal = undefined;
  console.log(`La variable a era: ${a},b era: ${b}
  y la variable temporal almacenó ${temporal}`);
  temporal = a;
  a=b;
  b=temporal;
  answ.textContent = `La variable a es: ${a},b es: ${b}
  y la variable temporal almacenó ${temporal}`;
  
  /* Para hacerlo sin variable temporal
  a=a+b;
  b=a-b
  a=a-b  
  */


}
