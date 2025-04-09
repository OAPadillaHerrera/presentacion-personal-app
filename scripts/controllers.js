

const repositorio = new Repository ();

function manejadorEliminar (event) {

    const botónId = event.target.id;
    repositorio.deleteActivity (Number (botónId));
    insertarActividades ();

}

function construirActividad (activity) {

    const {id, title, description, imgUrl } = activity;
    const contenedorTarjeta = document.createElement ('div');
    const tituloElemento = document.createElement ('h3');
    const descripcionElemento = document.createElement ('p');
    const imagenElemento = document.createElement ('img');
    const eliminarActividades = document.createElement ('button');

    tituloElemento.innerHTML = title;
    descripcionElemento.innerHTML = description;
    imagenElemento.src = imgUrl;
    imagenElemento.alt = `Imagen de ${title}`;

    contenedorTarjeta.classList.add ("contenedor-Tarjeta");
    contenedorTarjeta.appendChild (tituloElemento);
    contenedorTarjeta.appendChild (descripcionElemento);
    contenedorTarjeta.appendChild (imagenElemento);

    eliminarActividades.innerHTML = "X";
    eliminarActividades.classList.add ("botonborrar");
    eliminarActividades.id = id;
    eliminarActividades.addEventListener ("click", manejadorEliminar);

    contenedorTarjeta.appendChild (eliminarActividades);

    return contenedorTarjeta;

}

function insertarActividades () {

    const contenedorTarjetas = document.querySelector ("#flex-container-misactfa");
    contenedorTarjetas.innerHTML = "";

    const todasLasActividades = repositorio.getAllActivities ().map (construirActividad);

    todasLasActividades.forEach ((element) => {

        contenedorTarjetas.appendChild (element);

    });

}

function handler (event) {

    event.preventDefault ();

    const entradaNombre = document.getElementById ("nombre_de_la_actividad").value;
    const entradaDescripcion = document.getElementById ("descripción_de_la_actividad").value;
    const entradaImagen = document.getElementById ("imagen_de_la_actividad").value;

    if (!entradaNombre || !entradaDescripcion || !entradaImagen) {

        return alert ("Todas las casillas deben estar diligenciadas");
        
    }

    repositorio.createActivity (entradaNombre, entradaDescripcion, entradaImagen);
    insertarActividades ();

    document.getElementById ("nombre_de_la_actividad").value = "";
    document.getElementById ("descripción_de_la_actividad").value = "";
    document.getElementById ("imagen_de_la_actividad").value = "";

}