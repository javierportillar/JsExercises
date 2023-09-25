const btn = document.querySelector(".btn");
const num = document.querySelector(".num");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", posNegZer);

function posNegZer() {
  let val = Math.random()*100; //Segun el número de dijitos es el límite de unidades
  console.log(`El numero aleatorio es ${Math.floor(val)}`);
  answ.innerText = `El numero aleatorio es ${Math.floor(val)}`; //Acota solo las unidades
}
