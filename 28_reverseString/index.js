const btn = document.querySelector(".btn");
const textt = document.querySelector(".text-ph");

// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", reverseString);
function reverseString() {

var phrase = textt.value.toLowerCase();
var phSplit = phrase.split("")
  let result = reversePh(phSplit);
  console.log(`La frase ${phrase} al revez se escribe
  así: ${result}`);
}

function reversePh(word) {
  let result=[]
  for(i=word.length;i>=0;i--){
    result.push(word[i]);
  }
  return result.join("");
}