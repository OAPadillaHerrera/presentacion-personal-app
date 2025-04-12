

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
  
    const nombreInput = document.getElementById ("nombre_de_la_actividad");
    const descripcionInput = document.getElementById ("descripcion_de_la_actividad");
    const imagenInput = document.getElementById ("imagen_de_la_actividad");
  
    const entradaNombre = nombreInput.value.trim ();
    const entradaDescripcion = descripcionInput.value.trim ();
    const entradaImagen = imagenInput.value.trim ();
  
    [nombreInput, descripcionInput, imagenInput].forEach (input => {

      input.classList.remove ("input-error");

    });
  
    let hayError = false;
  
    if (!entradaNombre) {

      nombreInput.classList.add ("input-error");      
      hayError = true;

    }
  
    if (!entradaDescripcion) {

      descripcionInput.classList.add ("input-error");
      hayError = true;

    }
  
    if (!entradaImagen) {

      imagenInput.classList.add ("input-error");
      hayError = true;

    }
  
    if (hayError) {

      alert ("Todas las casillas deben estar diligenciadas");
      return;

    }

    repositorio.createActivity (entradaNombre, entradaDescripcion, entradaImagen);
    insertarActividades ();
  
    nombreInput.value = "";
    descripcionInput.value = "";
    imagenInput.value = "";

  }
  
  