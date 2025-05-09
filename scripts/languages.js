

/* languages.js – Archivo de textos bilingües (español / inglés)
   
   Este archivo contiene los textos utilizados en la interfaz de la página 
   en español (es) e inglés (en). Permite el cambio dinámico de idioma sin 
   necesidad de recargar la página, facilitando la internacionalización de 
   la aplicación. 
   
   Los textos están organizados por clave e incluyen títulos, etiquetas, 
   mensajes y listas descriptivas.

*/

const textos = {

  es: {

    nombre: "ÓSCAR PADILLA",
    titulo: "Desarrollador Web Full Stack",
    bienvenida: "¡Bienvenidos a mi Página Web!",
    sobreMiTitulo: "Sobre Mi",
    tecnologiasTitulo: "Tecnologías",
    actividadesTitulo: "Mis Actividades Favoritas",
    nombreLabel: "Nombre de la actividad",
    descripcionLabel: "Describir la actividad",
    imagenLabel: "Link de la imagen",
    botonAgregar: "AGREGAR ACTIVIDAD",

    sobreMiTexto: [
      
      "Desarrollador Web Full Stack, con formación en Ingeniería. Mi pasión por la programación comenzó cuando conocí los simuladores de procesos químicos y trabajé en ese ámbito como proyecto de grado en la universidad. En ese momento, y aunque mi aporte en el trabajo no era el de programar, sí descubrí el potencial de los lenguajes de programación y las bases de datos, lo que despertó mi curiosidad por el desarrollo de software. Posteriormente, y a lo largo de mi carrera, esta inquietud me llevó a estudiar C++ y, más adelante, Python. También interactué con diversas herramientas como software de certificación, LIMS, ERP y CRM, lo que reforzó aún más mi interés por la programación. Finalmente, me gusta el Desarrollo Web porque combina programación, parte visual, manejo de información, e independencia geográfica."

    ],

    mensajeError: `⚠️ Por favor completa todos los campos correctamente:<br>- Nombre y descripción sin números<br>- Imagen válida con extensión .jpg, .jpeg o .png`

  },

  en: {

    nombre: "OSCAR PADILLA",
    titulo: "Full Stack Developer",
    bienvenida: "Welcome to my Website!",
    sobreMiTitulo: "About Me",
    tecnologiasTitulo: "Technologies",
    actividadesTitulo: "My Favorite Activities",
    nombreLabel: "Activity name",
    descripcionLabel: "Describe the activity",
    imagenLabel: "Image URL",
    botonAgregar: "ADD ACTIVITY",

    sobreMiTexto: [

      "Full Stack Developer, with a background in Engineering. My passion for programming began when I discovered chemical process simulators and worked with them during my university graduation project. Although I wasn’t coding at that time, I saw the potential of programming languages and databases, which sparked my curiosity for software development. Later in my career, this interest led me to study C++ and eventually Python. I also interacted with tools like certification software, LIMS, ERP, and CRM systems, which reinforced my interest in programming. Finally, I enjoy Web Development because it combines logic, visual design, data manipulation, and accessibility from anywhere."

    ],

    mensajeError: `⚠️ Please complete all fields correctly:<br>- Name and description without numbers<br>- Valid image with extension .jpg, .jpeg, or .png`

  }
  
};


  