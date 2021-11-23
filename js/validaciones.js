/**
 * @author Sergio Matamoros Delgado
 * @description Script principal del examen del día 23-11-21
 * @license GPL v3 2021
 */
'use strict'

console.log('Cargado JS')

window.onload = iniciar;

//Vars
let index = null;


/**
 * Función principal que se llama cuando carga la página.
 */
function iniciar() {

    window.onclick = clicks;


    document.getElementById("sCurso").onchange = function() {
        //crear otro select debajo del mismo
        let cursoSelected = document.getElementById("sCurso").value;

        if(cursoSelected == "") return;

        if(cursoSelected == "1DAW") index = 0;
        if(cursoSelected == "2DAW") index = 1;

        /*if(document.getElementById("modulos")) document.getElementById("modulos").remove() 
        else {


            console.log(index + " e");

            crearModulos(index);
        }*/
    }
}

/**
 * Crea los modulos al dar click a cursos.
 * @param {Number} num -> Recibe el modulo a través de un número.
 */
function crearModulos(num) {

    if(document.getElementById("modulos")) document.getElementById("modulos").remove() 
    else {
        let arrayModu = [
            ["Sistemas Informáticos","Programación", "Bases de Datos", "Entornos de Desarrollo"],
            ["Desarrollo en Servidor","Desarrollo en Cliente", "Despliegue de Aplicaciones Web", "Diseño de Interfaces Web"]
        ];

        let modulos = document.createElement("select");
        modulos.id = "modulos";

        console.log(arrayModu);

        for(let i=0;i<arrayModu[num].length;i++) {
        
            let option = document.createElement("option");

            option.textContent= arrayModu[num][i];

            modulos.appendChild(option);
        }

        document.querySelectorAll("p")[2].appendChild(modulos);

        console.log(num);
    }
}

/**
 * Función que recibe los clicks y los controla.
 * @param {*} event 
 */
function clicks(event) {

    //Resetear campos numericos (punto 4)
    if(event.target.id == "btnCero") {
        for(let i=1;i<=3;i++) {
            document.getElementById("iCalculo"+i).value = "0";
        }
    }

    if(event.target.value == "1DAW" || event.target.value == "2DAW") {

        crearModulos(index);
    }

    //Botón enviar
    if(event.target.id == "send") {
        //Hacer media
        let valor1 = parseFloat(document.getElementById("iCalculo1").value);
        let valor2 = parseFloat(document.getElementById("iCalculo2").value);
        let valor3 = parseFloat(document.getElementById("iCalculo3").value);

        let suma = parseFloat(valor1+valor2+valor3);

        let media = parseFloat(suma / 3);
        document.getElementById("spanMedia").textContent = media;

        //Comprobar suma de campos
        if(!(suma >= 10 && suma <= 20)) {
            document.getElementById("divError").style.display = "block";
            document.getElementById("divError").textContent = "Error al enviar el formulario, la media de los campos deben estar entre 10 y 20";
        } else 
            document.getElementById("divError").style.display = "none";

        console.log(suma);
    }

}