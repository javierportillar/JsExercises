const btn = document.querySelector(".btn");
const numMen = document.querySelector(".number-a");
const numMay = document.querySelector(".number-b");
// Cuadro de respuesta
const answ = document.querySelector(".answ");

btn.addEventListener("click", tableMulti);

function tableMulti() {
  const numMenValue = parseInt(numMen.value);
  const numMayValue = parseInt(numMay.value);
  var numArmStrong = [];

  for (let i = numMenValue; i <= numMayValue; i++) {
    const numFac = String(i);
    const n = numFac.length;
    const opera = detectarArm(n, numFac);

    if (opera == i) {
      numArmStrong.push(opera);
    }
  }

  if (numArmStrong.length > 0) {
    console.log(
      `Dentro del rango ${numMenValue} y ${numMayValue} ${numArmStrong} Son numeros Armstrong`
    );
  }
}

function detectarArm(n, numFac) {
  let opera = 0;
  for (let i = 0; i < n; i++) {
    const d = parseFloat(numFac[i]);
    opera += Math.pow(d, n);
  }
  return opera;
}
// // 153, 370, 371 son numeros Armstrong
