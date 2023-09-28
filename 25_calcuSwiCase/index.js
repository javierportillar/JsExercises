const btn = document.querySelector(".btn");
const num = document.querySelector(".number-a");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", calculator);
var acum = 0;
function calculator() {
  const numA = parseFloat(prompt("Pon primer número a operar (NUMERO A)"));
  const operator = 
    prompt(
      "Pon + para suma, - para resta, x para multiplicación y / para division entre Numero A y Numero B"
    
  );
  const numB = parseFloat(prompt("Pon segundo número a operar (NUMERO B)"));
  let result = 0;
  switch (operator) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "x":
      result = numA * numB;
      break;
    case "/":
      result = numA / numB;
      break;
  }
  console.log(`${numA} ${operator} ${numB} = ${result}`);
}
