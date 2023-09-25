const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", facNum);

function facNum() {
  let numFac = num.value;
  var res=1
  console.log(numFac);
  for (let i = 1; i <= numFac; i++) {
    var multi = res*i // 1, 2, 6, 12
    res = multi
  }
  console.log(multi);
  answ.innerText = `El numero ${num.value} tiene de facotial= ${multi}`;
}
