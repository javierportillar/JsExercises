const btn = document.querySelector(".btn");
const wordA = document.querySelector(".number-a");
const letter = document.querySelector(".number-b");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", palinWord);
var wordIdentified = [];

function palinWord() {
  const word = wordA.value.toLowerCase(); //Convertir text a lowerCase
  const letterText = letter.value.toLowerCase(); // Separar carcarteres, Invertir caracteres y unir caracteres
  const wordSplit = word.split("");

  const letterTextSplit = letterText.split("");
  let allLettersFound = false;

  let result = word.includes(letterText);
  // console.log(result);

  if (result) {
    console.log(`La palabra ${letterText} Si está dentro de ${word}`);
  } else {
    console.log(`La palabra ${letterText} NO está dentro de ${word}`);
  }

  // Se revisa si la palabra a buscar está contenida en la palabra principal
  for (let i = 0; i < word.length; i++) {
    if (letterTextSplit[i] !== wordSplit[i]) {
      break;
    } else {
      wordIdentified.push(letterTextSplit[i]);
      allLettersFound = true;
    }
  }

  if (allLettersFound && letterTextSplit.length === wordIdentified.length) {
    console.log(`La palabra ${wordIdentified.join("")} ESTÁ dentro de ${word}`);
  } else {
    console.log(`La palabra ${letterText} NO ESTÁ dentro de ${word}`);
  }

  wordIdentified = [];
}
