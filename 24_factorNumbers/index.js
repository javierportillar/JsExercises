const btn = document.querySelector(".btn");
const num = document.querySelector(".number-a");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", factorialNums);
var acum = 0;
function factorialNums() {
  const numValue = parseInt(num.value);
  var factores = [];
  for (let i = 0; i <= numValue; i++) {
    if (numValue % i == 0) { //Verificar que si es factor con módulo
      factores.push(i);
    }
  }
  if (factores.length > 0) {
    console.log(`Los factores de ${numValue} son ${factores}`);
  }
}