const btn = document.querySelector(".btn");
const num = document.querySelector(".number-a");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", sumNatNumbers);
var acum = 0;
function sumNatNumbers() {
  const numValue = parseInt(num.value);
  let result = suma(numValue);
  console.log(`Si restamos a ${numValue}, 1 unidad hasta llegar a 0 y sumanos su restante
  el restulado de esa suma = ${result}`);

}

function suma(num) {
  acum = num + acum;
  if (num > 0) {
    suma(num - 1);
  }
  return acum;
}
// // 153, 370, 371 son numeros Armstrong
