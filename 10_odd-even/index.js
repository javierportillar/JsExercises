const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", posNegZer);
let state = "";
function posNegZer() {
  var res =
    num.value % 2 == 0
      ? console.log(`El numero ${num.value} Es PAR`)
      : console.log(`El numero ${num.value} Es IMPAR`); //VERSION CORTA
      
  if (num.value % 2 == 0) {
    //Con el modulo se identifica si es par o impar
    state = "Par";
    console.log(`El numero ${num.value} es ${state}`);
    answ.innerText = `El numero ${num.value} es ${state}`;
  } else {
    state = "Impar";
    console.log(`El numero ${num.value} es ${state}`);
    answ.innerText = `El numero ${num.value} es ${state}`;
  }
}
