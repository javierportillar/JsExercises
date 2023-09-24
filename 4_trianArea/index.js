const btn = document.querySelector(".btn")
const height = document.querySelector(".height")
const width = document.querySelector(".width")
const answ = document.querySelector(".answ")

btn.addEventListener("click",stdnNumber)

function stdnNumber(){
    let area = (height.value*width.value)/2
    answ.textContent=`El alto y ancho del triangulo son ${height.value},${width.value}
    Respectivamente y su area es ${area}`;
    console.log(`El Area de ese tringulo es ${area}`);
}
