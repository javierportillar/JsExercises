const btn = document.querySelector(".btn");
const kmInput = document.querySelector(".kmInput");
//Cuadro de respuesta
const answ = document.querySelector(".answ");


btn.addEventListener("click", km2mi);

function km2mi() {
  let km = kmInput.value;
  let mi= km*0.6214;
  console.log(`${km} equivale a: ${mi} millas`);
  answ.textContent = `${km} equivale a: ${mi} millas`;
  
  /* Para hacerlo sin variable temporal
  a=a+b;
  b=a-b
  a=a-b  
  */


}
