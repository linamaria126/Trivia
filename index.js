var nombre = prompt("Digita tu nombre");
// var nombre = "Lina";
document.getElementById("saludo").innerHTML = "Hola " + nombre + " Bienvenido a la Trivia 'Viajando por el mundo' ";

function preguntas(){
    var bienvenida = document.getElementById("bienvenida");
    bienvenida.classList.add("ocultar");

    var questions = document.getElementById("questions");
    questions.classList.remove("questions");
}


//arreglo que contiene las respuestas correctas
let respCorrectas = [1,3];

//arreglo donde se almacenarán las respuestas del usuario.
let opcion_elegida = [];

//variable que servirá para contar la cantidad de aciertos de la trivia.
let cantidad_correctas = 0;

// Función que toma el número de pregunta y el input elegido por el usuario.
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida en la variable 'opcion_elegida'
    opcion_elegida[num_pregunta] = seleccionada.value;

}


function verificar(){
    cantidad_correctas = 0;
    for (let i = 0; i < respCorrectas.length; i++) {
        if(respCorrectas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
        
        
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}




// function verificar(){
//     var form = document.getElementById("p1");
//     var respuesta = form.elements["p0"].value;

//     if (respuesta == respCorrecta){

//         alert("Usted acertó");

//     }
//     else{
//         alert("Usted Erró");
//     }



// }

