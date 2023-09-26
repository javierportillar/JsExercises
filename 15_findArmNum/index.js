const btn = document.querySelector(".btn");
const num = document.querySelector(".number");
//Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", tableMulti);

function tableMulti() {
  let numFac = String(num.value);
  let n = numFac.length;
  // console.log(n);
  // console.log(numFac);
  var opera = 0
  for (var i = 0; i < n ; i++) {
    var d = parseFloat(numFac[i]);
    opera += Math.pow(d,n);
  }
  if (opera==numFac) {
    console.log(`Es Numero armstrong, ya que 
    la suma cada numero de (${numFac})^${n} = ${opera}`);
  }else{
    console.log(`No es Numero armstrong, ya que 
    la suma cada numero de (${numFac})^${n} =! ${opera}`);
  }
}
// 153, 370, 371 son numeros Armstrong
