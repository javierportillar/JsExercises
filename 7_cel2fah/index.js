const btn = document.querySelector(".btn");
const cInput = document.querySelector(".cInput");
//Cuadro de respuesta
const answ = document.querySelector(".answ");


btn.addEventListener("click", c2f);

function c2f() {
  let c = cInput.value;
  let f= (c*9/5)+32;
  console.log(`°${c} Celcius equivale a: ${f} Fahrenheit`);
  answ.innerText = `${c}° Celcius equivale a: ${f} Fahrenheit`;
}
