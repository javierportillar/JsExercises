const btn = document.querySelector(".btn");
const numA = document.querySelector(".number-a");
const numB = document.querySelector(".number-b");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", tableMulti);

function tableMulti() {
  let LastnumberA = numA.value.slice(-1); //Slice retorna una cadena según el parametro
  let LastnumberB = numB.value.slice(-1); //Indicado, -1 toma ultmimo valor, 0..n toma
  if (LastnumberA == LastnumberB) {       //Desde inicio hasta n
    console.log(`Los ultímos digitos de ${numA.value} y ${numB.value}
    Coinciden y es ${LastnumberA}`);
  } else {
    console.log(`Los ultímos digitos de ${numA.value} y ${numB.value}
    NO Coinciden, porque ${LastnumberA} =! ${LastnumberB}`);
  }
}
// 153, 370, 371 son numeros Armstrong
