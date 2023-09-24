const btn = document.querySelector(".btn");
//Seleccion de tipo de triangulo
const equilateral = document.querySelector(".equilateral");
const isosceles = document.querySelector(".isosceles");
//Detalles de equilatero
const equiDetails = document.querySelector(".equilateral-option");
const height = document.querySelector(".height");
const width = document.querySelector(".width");
//Detalles de isoceles
const isoDetails = document.querySelector(".isosceles-option");
const a = document.querySelector(".a-side");
const b = document.querySelector(".b-side");
const c = document.querySelector(".c-side");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

let eqiState = true;

btn.addEventListener("click", stdnNumber);
equilateral.addEventListener("click", showEqui);
isosceles.addEventListener("click", showIso);

function showEqui() {
  equiDetails.classList.add("active");
  equiDetails.classList.remove("inactive");
  isoDetails.classList.add("inactive");
  isoDetails.classList.remove("active");
  eqiState = true;
}
function showIso() {
  equiDetails.classList.add("inactive");
  equiDetails.classList.remove("active");
  isoDetails.classList.add("active");
  isoDetails.classList.remove("inactive");
  eqiState = false;
}

function stdnNumber() {
  let area = undefined;
  if (eqiState) {
    area = (height.value * width.value) / 2;
    answ.textContent = `El alto del triangulo es ${height.value} y su ancho es ${width.value}
        Su area es ${area}`;
  } else {
    let s = (a.value + b.value + c.value) / 2;
    area = Math.sqrt(s * (s - a.value) * (s - b.value) * (s - c.value));
    answ.textContent = `El lado a del triangulo es ${a.value} el lado b es${b.value}
         y el lado c es ${c.value}. Su area es ${area}`;
  }
  console.log(`El Area de ese tringulo es ${area}`);
}
