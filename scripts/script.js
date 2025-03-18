

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

    escribirTexto ("bienvenida", "Bienvenidos a mi Página Web!", 150);

}

document.addEventListener ("DOMContentLoaded", iniciarAnimacion);