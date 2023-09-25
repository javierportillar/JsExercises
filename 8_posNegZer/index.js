const btn = document.querySelector(".btn");
const num = document.querySelector(".num");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", posNegZer);

function posNegZer() {
  let val = Math.sign(num.value); //Math.sign retrona 1 si el num es +
  let state = ""; //Math.sign retrona -1 si el num es -
  if (val == 1) { //Math.sign retrona 0 si el num es 0
    state = "Postivo";
    console.log(`${num.value} es un numero ${state}`);
    answ.innerText = `${num.value} es un numero ${state}`;
  }
  if (val == -1) {
    state = "Negativo";
    console.log(`${num.value} es un numero ${state}`);
    answ.innerText = `${num.value} es un numero ${state}`;
  }
  if (val == 0) {
    state = "Sin signo, es 0";
    console.log(`${num.value} es un numero ${state}`);
    answ.innerText = `${num.value} es un numero ${state}`;
  }
}
