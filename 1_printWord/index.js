const btn = document.querySelector(".btn")

btn.addEventListener("click",printHelloW)

function printHelloW(){
    let msj ="Hello Word" //Mensaje a indicar
    console.log(msj); // En consola
    alert(msj); // Alerta del mensaje
    document.write(msj) // Escribir en el documento
}