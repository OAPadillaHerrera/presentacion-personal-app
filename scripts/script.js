

/* script.js – Animación de bienvenida y gestión del cambio de idioma
   
   Este archivo contiene la lógica para mostrar un mensaje de bienvenida 
   animado con efecto "máquina de escribir", y permite cambiar dinámicamente 
   el idioma del sitio web (español / inglés) usando los textos definidos en 
   languages.js. Se actualizan títulos, etiquetas y listas de contenido sin 
   necesidad de recargar la página.

*/


function escribirTexto (elemento, texto, velocidad, callback) {

    let i = 0;

    function escribir () {

        if (i < texto.length) {

            document.getElementById (elemento).innerHTML += texto.charAt (i);
            i++;
            setTimeout (escribir, velocidad);

        } else if (callback) {

            setTimeout (callback, 1000);

        }

    }

    escribir ();

}

function iniciarAnimacion () {

    escribirTexto("bienvenida", textos[idiomaActual].bienvenida || "Bienvenidos a mi Página Web!", 150);

}

let idiomaActual = "es";

function cambiarIdioma (idioma) {

    idiomaActual = idioma;
    const t = textos [idioma]

    document.getElementById ("nombre").textContent = t.nombre;
    document.getElementById ("titulo").textContent = t.titulo;

    document.querySelectorAll ("#tipodeletrahs")[0].textContent = t.sobreMiTitulo;
    document.querySelectorAll ("#tipodeletrahs")[1].textContent = t.tecnologiasTitulo;
    document.querySelectorAll ("#tipodeletrahs")[2].textContent = t.actividadesTitulo;

    document.querySelector ('label[for="nombre_de_la_actividad"]').textContent = t.nombreLabel;
    document.querySelector ('label[for="descripción_de_la_actividad"]').textContent = t.descripcionLabel;
    document.querySelector ('label[for="imagen_de_la_actividad"]').textContent = t.imagenLabel;

    document.getElementById ("cargar_actividad").textContent = t.botonAgregar;

    const listaSobreMi = document.getElementById ("sobreMi");
    listaSobreMi.innerHTML = "";

    t.sobreMiTexto.forEach (texto => {

        const li = document.createElement ("li");
        li.textContent = texto;
        listaSobreMi.appendChild (li);

    });

    document.getElementById ("bienvenida").innerHTML = "";
    escribirTexto ("bienvenida", t.bienvenida || "", 150);

}

document.addEventListener ("DOMContentLoaded", () => {

    cambiarIdioma (idiomaActual);

});
