const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", facNum);

function facNum() {
  let numFac = parseInt(num.value);
  var res = 1;
  // console.log(numFac);
  for (let i = 1; i <= numFac; i++) {
    var multi = res * i; // 1, 2, 6, 12
    res = multi;
  }
  let facRecursive=facNumRecursion(num.value); //Llama a funcion recursiva
  console.log(facRecursive); // Log recursivo
  console.log(multi);
  answ.innerText = `El numero ${num.value} tiene de facotial= ${multi}`;
}

function facNumRecursion(n) {
  // let n=num.value;
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * facNumRecursion(n - 1); // Recursion, llama a la misma funcion para terminar proceso
  }
}
