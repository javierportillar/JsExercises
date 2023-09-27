const btn = document.querySelector(".btn");
const wordA = document.querySelector(".number-a");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", firstLetUp);
var wordIdentified = [];

function firstLetUp() {
  const word = wordA.value.toLowerCase(); //Convertir text a lowerCase
  const reg = /[aeiou]/gi;
  var vowels = word.match(reg);
  var numVowels = vowels.length;
  answ.textContent = `Dentro de la frase ${word}, se encontró
  ${vowels} vocales y en total hay ${numVowels} vocales`
  console.log(vowels);

}
