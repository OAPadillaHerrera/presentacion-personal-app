

/* actividades.js – Gestión dinámica de actividades interactivas en la interfaz web

   Este archivo se encarga de la lógica relacionada con la creación, 
   visualización y eliminación de actividades en la interfaz gráfica del usuario. 
   Se apoya en una clase `Repository` que gestiona las actividades en memoria 
   (sin persistencia).

   Las funciones incluidas permiten:

   - Insertar actividades en el DOM a partir de los datos almacenados.
   - Validar entradas del formulario de creación.
   - Crear nuevas actividades con datos ingresados por el usuario.
   - Eliminar actividades existentes de forma dinámica.
   
   Este archivo se integra con el frontend de la página, permitiendo una experiencia 
   interactiva y sin recargas para el usuario.

*/

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

    contenedorTarjeta.classList.add ("card-container");
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

    const contenedorTarjetas = document.querySelector ("#my-activities-container");
    contenedorTarjetas.innerHTML = "";

    const todasLasActividades = repositorio.getAllActivities ().map (construirActividad);

    todasLasActividades.forEach ((element) => {

        contenedorTarjetas.appendChild (element);

    });

}

const textoRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s.,;:()¿?!¡'"-]{3,}$/;
const imagenRegex = /\.(jpg|jpeg|png)$/i;

function obtenerInputs () {

  return {

    nombreInput: document.getElementById ("nombre_de_la_actividad"),
    descripcionInput: document.getElementById ("descripcion_de_la_actividad"),
    imagenInput: document.getElementById ("imagen_de_la_actividad")

  };

}

function obtenerValoresLimpios () {

  const { nombreInput, descripcionInput, imagenInput } = obtenerInputs();

  return {

    nombre: nombreInput.value.trim (),
    descripcion: descripcionInput.value.trim (),
    imagen: imagenInput.value.trim ()

  };

}

function limpiarErrores (inputs) {

  inputs.forEach (input => input.classList.remove ("input-error"));

}

function handler (event) {

  event.preventDefault ();

  const { nombreInput, descripcionInput, imagenInput } = obtenerInputs ();
  const { nombre, descripcion, imagen } = obtenerValoresLimpios ();

  const mensajeGeneral = document.getElementById ("mensaje-general-error");
  let hayError = false;

  limpiarErrores ([nombreInput, descripcionInput, imagenInput]);

  if (!textoRegex.test (nombre)) {

    nombreInput.classList.add ("input-error");
    hayError = true;

  }

  if (!textoRegex.test (descripcion)) {

    descripcionInput.classList.add("input-error");
    hayError = true;
  }

  if (!imagenRegex.test (imagen)) {

    imagenInput.classList.add ("input-error");
    hayError = true;

  }

  if (hayError) {

    mensajeGeneral.classList.remove ("hidden");
    return;

  } else {

    mensajeGeneral.classList.add ("hidden");

    localStorage.removeItem ("nombreActividad");
    localStorage.removeItem ("descripcionActividad");
    localStorage.removeItem ("imagenActividad");

  }

  repositorio.createActivity (nombre, descripcion, imagen);
  insertarActividades ();

  nombreInput.value = "";
  descripcionInput.value = "";
  imagenInput.value = "";

  limpiarErrores ([nombreInput, descripcionInput, imagenInput]);

  const boton = document.getElementById ("activity-loader");

  if (hayError) {

    boton.classList.add ("boton-inactivo");

  } else {

    boton.classList.remove ("boton-inactivo");
    
  }

}










