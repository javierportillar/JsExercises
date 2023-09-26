const btn = document.querySelector(".btn");
const wordA = document.querySelector(".number-a");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", palinWord);

function palinWord() {
  const word = wordA.value.toLowerCase(); //Convertir text a lowerCase
  const reversedWord = word.split("").reverse().join(""); // Separar carcarteres, Invertir caracteres y unir caracteres
  
  if (word === reversedWord) {
    answ.innerText = `${word} es un palíndromo.`;
    console.log(`${word} es un palíndromo.`);
  } else {
    answ.innerText = `${word} no es un palíndromo.`;
    console.log(`${word} No es un palíndromo.`);
  }
  // Mediante bucle
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      console.log(`${word} NO ES PALÍNDROMO.`);
      return; // Salir del bucle y detener la verificación
    } else {
      console.log(`${word} ES PALÍNDROMO.`);
    }
  }
}