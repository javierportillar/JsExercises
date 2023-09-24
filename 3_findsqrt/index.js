const btn = document.querySelector(".btn")
const answer = document.querySelector(".answer")
const number = document.querySelector(".number")

btn.addEventListener("click",stdnNumber)

function stdnNumber(){
    let a = number.value;
    console.log(a);
    if (a < 0) { 
        alert("Los numeros negativos no tienen raiz cuadrada, es imaginaria")
        alert("Vuelva a oprimir botón y seleccione un númer positivo")
    }

    let b = Math.sqrt(a)
    answer.textContent=b;
    console.log(`El restulatdo es ${parseFloat(b)}`);
}