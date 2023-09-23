const btn = document.querySelector(".btn")

btn.addEventListener("click",stdnNumber)

function stdnNumber(){
    let a = prompt("Pon primer numero a sumar")
    let b = prompt("Pon segundo numero a sumar")

    console.log(`El restulatdo es ${parseFloat(b)+parseFloat(a)}`);
}