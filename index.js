var nombre = prompt("Digita tu nombre");
var nombre = "Lina";
document.getElementById("saludo").innerHTML = "Hola " + nombre + " Bienvenido a la Trivia 'Viajando por el mundo' ";

function preguntas(){
    var bienvenida = document.getElementById("bienvenida");
    bienvenida.classList.add("ocultar");

    var questions = document.getElementById("questions");
    questions.classList.remove("questions")
}

var respCorrecta = "1";


function verificar(){
    var form = document.getElementById("p1");
    var respuesta = form.elements["p0"].value;

    if (respuesta == respCorrecta){

        alert("Usted acertó");

    }
    else{
        alert("Usted Erró");
    }



}

