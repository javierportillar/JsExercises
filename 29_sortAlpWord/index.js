const btn = document.querySelector(".btn");
const btnad = document.querySelector(".btn-add");
const textt = document.querySelector(".text-ph");

// Cuadro de respuesta
const answ = document.querySelector(".answ");
var objetos= [];
btn.addEventListener("click", sortAlph);
async function sortAlph() {
  
  if (objetos.length == 0) {
    console.log("Debes poner un objeto primero");
  }else{
    let organized = objetos;
    organized.sort();
    console.log(`los objetos organizados alfabéticamente son de la siguiente manera:
    ${organized}, originalmente era ${objetos}`);
  }

}

btnad.addEventListener("click", addObject);
function addObject(){
  objetos.push(textt.value);
  textt.value=""
  console.log(objetos);
}
