import {barcelona, roma, paris, londres} from './ciudades.js' //esto se llama destructuracion de datos


//Obtener los elementos del dom

let enlaces = document.querySelectorAll('a') //hacemos una consulta de todos los elementos que sean a y los guardamos en enlaces

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')




//Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace){ //es decir uqe va a recorrer cada elemento del enlace que le puse enlace

    enlace.addEventListener('click', function(){

        //remover activo de todos los elementos
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });        
        //agregar active al que corresponde, marca al que le hicimos click
        this.classList.add('active')


        //Obtener el contenido correspondiente segun el enlace

        let contenido = obtenerContenido(this.textContent) //le mandamos el texto del elemento que tocamos

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
});
//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){ //si enlace es barcelona retorna el contenido con barcelona adentro
    let contenido = {
        'Barcelona' : barcelona, //devuelve el barcelona de la derecha, el objeto que importamos de arriba de todo
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
        
    };
    return contenido[enlace] //esto devuelve el objeto del enlace, por ejemplo el objeto barcelona de ciudades.js
}