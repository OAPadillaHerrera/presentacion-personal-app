

/* script.js – Animación de bienvenida y gestión del cambio de idioma
   
   Este archivo contiene la lógica para mostrar un mensaje de bienvenida 
   animado con efecto "máquina de escribir", y permite cambiar dinámicamente 
   el idioma del sitio web (español / inglés) usando los textos definidos en 
   languages.js. Se actualizan títulos, etiquetas y listas de contenido sin 
   necesidad de recargar la página.

*/

let timeoutId = null;  

function escribirTexto (elemento, texto, velocidad, callback) {

    let i = 0;

    if (timeoutId) {

        clearTimeout (timeoutId);
        timeoutId = null;

    }

    document.getElementById (elemento).innerHTML = ""; 

    function escribir () {

        if (i < texto.length) {

            document.getElementById (elemento).innerHTML += texto.charAt (i);
            i++;
            timeoutId = setTimeout (escribir, velocidad);

        } else if (callback) {            

            timeoutId = setTimeout (callback, 1000);

        }
    }

    escribir ();
    
}

function iniciarAnimacion () {

    escribirTexto ("bienvenida", textos[idiomaActual].bienvenida || "Bienvenidos a mi Página Web!", 150);

}

let idiomaActual = "es";

function cambiarIdioma (idioma) {

    idiomaActual = idioma;
    const t = textos [idioma]

    document.getElementById ("nombre").textContent = t.nombre;
    document.getElementById ("titulo").textContent = t.titulo;

    document.querySelectorAll (".font-heading")[0].textContent = t.sobreMiTitulo;
    document.querySelectorAll (".font-heading")[1].textContent = t.tecnologiasTitulo;
    document.querySelectorAll (".font-heading")[2].textContent = t.actividadesTitulo;

    document.querySelector ('label[for="nombre_de_la_actividad"]').textContent = t.nombreLabel;
    document.querySelector ('label[for="descripcion_de_la_actividad"]').textContent = t.descripcionLabel;
    document.querySelector ('label[for="imagen_de_la_actividad"]').textContent = t.imagenLabel;

    document.getElementById ("activity-loader").innerHTML = `
        <img src="assets/icono-agregar.png" alt="Agregar" class="button-icon">
        ${t.botonAgregar}
    `;

    document.getElementById ("mensaje-general-error").innerHTML = t.mensajeError;

    const listaSobreMi = document.getElementById ("about-me");
    listaSobreMi.innerHTML = "";

    t.sobreMiTexto.forEach (texto => {

        const li = document.createElement ("li");
        li.textContent = texto;
        listaSobreMi.appendChild (li);

    });

    iniciarAnimacion();

}

document.addEventListener ("DOMContentLoaded", () => {

 cambiarIdioma (idiomaActual);

 const nombreInput = document.getElementById ("nombre_de_la_actividad");
 const descripcionInput = document.getElementById ("descripcion_de_la_actividad");
 const imagenInput = document.getElementById ("imagen_de_la_actividad");

 const nombre = localStorage.getItem ("nombreActividad");
 const descripcion = localStorage.getItem ("descripcionActividad");
 const imagen = localStorage.getItem ("imagenActividad");

 if (nombre) nombreInput.value = nombre;
 if (descripcion) descripcionInput.value = descripcion;
 if (imagen) imagenInput.value = imagen;

 nombreInput.addEventListener ("input", () =>
    localStorage.setItem ("nombreActividad", nombreInput.value)
 );

 descripcionInput.addEventListener ("input", () =>
    localStorage.setItem ("descripcionActividad", descripcionInput.value)
 );

 imagenInput.addEventListener ("input", () =>
    localStorage.setItem ("imagenActividad", imagenInput.value)
 );

 insertarActividades ();

 const botonAgregar = document.getElementById ("activity-loader");

 botonAgregar.addEventListener ("click", handler);
    
});

function animarAparicionTitulos () { 

    const titulos = [

        document.getElementById ("nombre"),
        document.getElementById ("titulo"),
        ...document.querySelectorAll (".font-heading")

    ];

    titulos.forEach ((titulo, index) => {

        setTimeout (() => {

            titulo.classList.remove ("hidden-title");
            titulo.classList.add ("visible-title");
              
        }, (index + 1) * 5500);

    });  

}

document.addEventListener ("DOMContentLoaded", animarAparicionTitulos);









