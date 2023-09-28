const btn = document.querySelector(".btn");
const num = document.querySelector(".number-a");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", fibonacciSeq);
function fibonacciSeq() {
  var num_1 = 0;
  var num_2 = 1;
  var n = parseInt(prompt("¿Cuantos numeros Fibbonaci quieres ver?"));
  var resultado=[];
  for (let i = 0; i < n; i++) {
    // console.log(num_1,num_2);
    let valor = num_1 + num_2;
    num_1=num_2;
    num_2=valor;
    resultado.push(valor);
  }
  console.log(`Los ${n} primeros numeros de la 
  secuencia Fibonacci son: ${resultado}`);
}
