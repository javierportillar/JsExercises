const btn = document.querySelector(".btn");
const wordA = document.querySelector(".number-a");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", firstLetUp);
var wordIdentified = [];

function firstLetUp() {
  const word = wordA.value.toLowerCase(); //Convertir text a lowerCase
  const wordSplit = word.split("");

  var mayus = wordSplit[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    mayus += wordSplit[i];
  }
  console.log(mayus);
}
