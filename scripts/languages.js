

/* languages.js – Bilingual text file (Spanish / English)
   
   This file contains the texts used in the interface of the website
   in Spanish (es) and English (en). It allows dynamic language switching 
   without reloading the page, enabling internationalization of the application.
   
   Texts are organized by key and include titles, labels, messages, 
   and descriptive lists.
*/

const texts = {

  es: {

    name: "ÓSCAR PADILLA",
    title: "Desarrollador Web Full Stack",
    welcome: "¡Bienvenidos a mi Página Web!",
    aboutMeTitle: "Sobre Mi",
    technologiesTitle: "Tecnologías",
    activitiesTitle: "Mis Actividades Favoritas",
    nameLabel: "Nombre de la actividad",
    descriptionLabel: "Describir la actividad",
    imageLabel: "Link de la imagen",
    addButton: "AGREGAR ACTIVIDAD",

    aboutMeText: [
      
      "Desarrollador Web Full Stack, con formación en Ingeniería. Mi pasión por la programación comenzó cuando conocí los simuladores de procesos químicos y trabajé en ese ámbito como proyecto de grado en la universidad. En ese momento, y aunque mi aporte en el trabajo no era el de programar, sí descubrí el potencial de los lenguajes de programación y las bases de datos, lo que despertó mi curiosidad por el desarrollo de software. Posteriormente, y a lo largo de mi carrera, esta inquietud me llevó a estudiar C++ y, más adelante, Python. También interactué con diversas herramientas como software de certificación, LIMS, ERP y CRM, lo que reforzó aún más mi interés por la programación. Finalmente, me gusta el Desarrollo Web porque combina programación, parte visual, manejo de información, e independencia geográfica."

    ],

    errorMessage: `⚠️ Por favor completa todos los campos correctamente:<br>- Nombre y descripción sin números<br>- Imagen válida con extensión .jpg, .jpeg o .png`

  },

  en: {

    name: "OSCAR PADILLA",
    title: "Full Stack Developer",
    welcome: "Welcome to my Website!",
    aboutMeTitle: "About Me",
    technologiesTitle: "Technologies",
    activitiesTitle: "My Favorite Activities",
    nameLabel: "Activity name",
    descriptionLabel: "Describe the activity",
    imageLabel: "Image URL",
    addButton: "ADD ACTIVITY",

    aboutMeText: [

      "Full Stack Developer, with a background in Engineering. My passion for programming began when I discovered chemical process simulators and worked with them during my university graduation project. Although I wasn’t coding at that time, I saw the potential of programming languages and databases, which sparked my curiosity for software development. Later in my career, this interest led me to study C++ and eventually Python. I also interacted with tools like certification software, LIMS, ERP, and CRM systems, which reinforced my interest in programming. Finally, I enjoy Web Development because it combines logic, visual design, data manipulation, and accessibility from anywhere."

    ],

    errorMessage: `⚠️ Please complete all fields correctly:<br>- Name and description without numbers<br>- Valid image with extension .jpg, .jpeg, or .png`

  }
  
};


  