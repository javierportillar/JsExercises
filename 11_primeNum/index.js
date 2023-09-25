const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

let state = "";
btn.addEventListener("click", isPrime);
function isPrime() {
  for (let i = 2; i < num.value / 2; i++) {
    console.log(state);
    if (num.value % i == 0) {
      state = "No Primo";
      console.log(`El numero ${num.value} es ${state}`);
      answ.innerText = `El numero ${num.value} es ${state}`;
    } else {
      state = "Primo";
      console.log(`El numero ${num.value} es ${state}`);
      answ.innerText = `El numero ${num.value} es ${state}`;
    }
  }
}
