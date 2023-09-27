const btn = document.querySelector(".btn");
const wordA = document.querySelector(".number-a");
const letterA = document.querySelector(".number-b");
const letterB = document.querySelector(".number-c");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", palinWord);
var wordIdentified = [];

function palinWord() {
  const word = wordA.value.toLowerCase(); //Convertir text a lowerCase
  const letterTextA = letterA.value.toLowerCase();
  const letterTextB = letterB.value.toLowerCase();
  let resultStart = word.startsWith(letterTextA);
  let resultEnd = word.endsWith(letterTextB);

  if (resultStart && letterTextA !== "") {
    console.log(`La palabra ${word} inicia con la letra ${letterTextA}`);
  } else {
    if (letterTextA == "") {
    } else {
      console.log(`La palabra ${word} NO inicia con la letra ${letterTextA}`);
    }
  }
  if (resultEnd && letterTextB !== "") {
    console.log(`La palabra ${word} termina con la letra ${letterTextB}`);
  } else {
    if (letterTextB == "") {
    } else {
      console.log(`La palabra ${word} NO termina con la letra ${letterTextB}`);
    }
  }
}
