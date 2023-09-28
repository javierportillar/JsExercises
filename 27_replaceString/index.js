const btn = document.querySelector(".btn");
const textt = document.querySelector(".text-ph");
const wordA = document.querySelector(".word-a");
const newWord = document.querySelector(".word-replace");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", replaceString);
function replaceString() {

  var phrase = textt.value.toLowerCase();
  var wordReplace = wordA.value.toLowerCase();
  var wordtoReplace = newWord.value.toLowerCase();

  var reg = new RegExp(wordReplace,'gi') // Cambia a global los remplazos
  let resultB = phrase.replace(reg,wordtoReplace) // Se usa Reg y la nueva palabra a cambiar
  console.log(resultB);
  

  let result = phrase.replace(wordReplace,wordtoReplace)
  console.log(`La frase original es: ${phrase}
  y la cambiada es: ${result}`);
}