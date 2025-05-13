

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

    escribirTexto ("welcome", texts [idiomaActual].welcome || "Bienvenidos a mi Página Web!", 150);

}

let idiomaActual = "es";

function changeLanguage (language) {

    idiomaActual = language;
    const t = texts [language]

    document.getElementById ("name").textContent = t.name;
    document.getElementById ("title").textContent = t.title;

    document.querySelectorAll (".font-heading")[0].textContent = t.aboutMeTitle;
    document.querySelectorAll (".font-heading")[1].textContent = t.technologiesTitle;
    document.querySelectorAll (".font-heading")[2].textContent = t.activitiesTitle;

    document.querySelector ('label[for="activityName"]').textContent = t.nameLabel;
    document.querySelector ('label[for="activityDescription"]').textContent = t.descriptionLabel;
    document.querySelector ('label[for="activityImage"]').textContent = t.imageLabel;

    document.getElementById ("activity-loader").innerHTML = `
        <img src="assets/icono-agregar.png" alt="Add" class="button-icon">
        ${t.addButton}
    `;

    document.getElementById ("general-error-message").innerHTML = t.errorMessage;

    const listaSobreMi = document.getElementById ("about-me");
    listaSobreMi.innerHTML = "";

    t.aboutMeText.forEach (texto => {

        const li = document.createElement ("li");
        li.textContent = texto;
        listaSobreMi.appendChild (li);

    });

    iniciarAnimacion();

}

document.addEventListener ("DOMContentLoaded", () => {

changeLanguage (idiomaActual);

 const nombreInput = document.getElementById ("activityName");
 const descripcionInput = document.getElementById ("activityDescription");
 const imagenInput = document.getElementById ("activityImage");

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

        document.getElementById ("name"),
        document.getElementById ("title"),
        ...document.querySelectorAll (".font-heading")

    ];

    titulos.forEach ((title, index) => {

        setTimeout (() => {

            title.classList.remove ("hidden-title");
            title.classList.add ("visible-title");
              
        }, (index + 1) * 5500);

    });  

}

document.addEventListener ("DOMContentLoaded", animarAparicionTitulos);









