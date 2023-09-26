const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", tableMulti);

function tableMulti() {
  let numFac = parseFloat(num.value);
  var operation;
  // console.log(numFac);
  for (let i = 1; i <= 10; i++) {
    let multi = numFac * i;
    operation = `${numFac}X${i}=${multi}`;
    console.log(operation); 
  }
}

