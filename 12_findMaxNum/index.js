const btn = document.querySelector(".btn");
const btnNumMax = document.querySelector(".btn-largest-num");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");
let state = "";
let arreglo = [];

btn.addEventListener("click", maxNum);
btnNumMax.addEventListener("click", maxNumDetail);

function maxNum() {
  let newNum = num.value;
  arreglo.push(num.value);
  console.log(arreglo);
  answ.innerText = `El numero agregado de ${arreglo} es ${newNum}`;
}

function maxNumDetail() {
  // let numMax = Math.max(...arreglo); Toco usar propagacion ya que Math.max no recibe arrays como parametro
  numMax = arreglo[0];
  console.log(...arreglo,arreglo);
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > numMax) {
      numMax = arreglo[i];
    }
  }
  console.log(`El numero máximo de ${arreglo} es ${numMax}`);
  answ.innerText = `El numero máximo de ${arreglo} es ${numMax}`;
}
