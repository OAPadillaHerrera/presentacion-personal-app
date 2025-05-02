

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

    document.getElementById("bienvenida").innerHTML = ""; 
    escribirTexto ("bienvenida", textos[idiomaActual].bienvenida || "Bienvenidos a mi Página Web!", 150);

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
    document.querySelector ('label[for="descripcion_de_la_actividad"]').textContent = t.descripcionLabel;
    document.querySelector ('label[for="imagen_de_la_actividad"]').textContent = t.imagenLabel;

    document.getElementById ("cargar_actividad").innerHTML = `
        <img src="assets/icono-agregar.png" alt="Agregar" class="icono-boton">
        ${t.botonAgregar}
    `;

    document.getElementById ("mensaje-general-error").innerHTML = t.mensajeError;

    const listaSobreMi = document.getElementById ("sobreMi");
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

 const botonAgregar = document.getElementById ("cargar_actividad");

 botonAgregar.addEventListener ("click", () => {

    const title = nombreInput.value.trim ();
        const description = descripcionInput.value.trim ();
        const imgUrl = imagenInput.value.trim ();

    if (!title || !description || !imgUrl) return;

    repositorio.createActivity (title, description, imgUrl); 
    insertarActividades (); 

    localStorage.removeItem ("nombreActividad");
    localStorage.removeItem ("descripcionActividad");
    localStorage.removeItem ("imagenActividad");

    nombreInput.value = "";
    descripcionInput.value = "";
    imagenInput.value = "";

 })

 const repositorio = new Repository (); 
    
});
