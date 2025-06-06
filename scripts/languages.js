

/* languages.js – Bilingual text file (Spanish / English)
   
   This file contains the texts used in the interface of the website
   in Spanish (es) and English (en). It allows dynamic language switching 
   without reloading the page, enabling internationalization of the application.
   
   Texts are organized by key and include titles, labels, messages, 
   and descriptive lists.
*/

const texts = {

  es: {

    name: "Óscar Padilla",
    title: "Desarrollador Web Full Stack",
    welcome: "¡Bienvenidos a mi Página Web!",
    aboutMeTitle: "Sobre Mi",
    technologiesTitle: "Tecnologías",
    activitiesTitle: "¡Agrega tus actividades favoritas!",
    nameLabel: "Nombre de la actividad",
    descriptionLabel: "Describir la actividad",
    imageLabel: "Link de la imagen",
    addButton: "AGREGAR ACTIVIDAD",

    aboutMeText: [            

      "Lo que hago hoy. <em> Desarrollo proyectos a la medida mediante el diseño e implementación de soluciones técnicas que satisfagan las necesidades de los clientes, con una fuerte orientación al detalle y a la experiencia del usuario. Disfruto el desarrollo web porque combina programación, parte visual, manejo de información y acceso desde casi cualquier lugar.</em>",
      "<br>",
      "Proyectos. <em> Entre los proyectos en los que estoy trabajando de forma independiente, o en los que trabajé durante el Bootcamp en Henry, se encuentran: una aplicación web para una asociación de gestión del riesgo empresarial, un sistema para monitorear y optimizar el consumo energético en estaciones de servicio, y un e-commerce. Estas experiencias me han permitido aplicar lo aprendido tanto en frontend como en backend.</em>",
      "<br>",
      "Cómo trabajo. <em> Soy una persona orientada a resultados, con capacidades de liderazgo, que disfruta aprender e investigar nuevas herramientas para mejorar cada día. Me adapto a contextos dinámicos, puedo trabajar de forma autónoma o en equipo, y busco seguir creciendo profesionalmente en el desarrollo web.</em>",
      "<br>",  
      "Cómo empezó todo. <em> Mi interés por la programación comenzó en la universidad, cuando conocí los simuladores de procesos químicos y trabajé en ese tema como proyecto de grado. Aunque no programaba directamente, descubrí el potencial de los lenguajes de programación para resolver problemas complejos.</em>",
      "<br>",  
      "Mi experiencia previa. <em> A lo largo de mi carrera profesional (13 años aproximadamente), trabajé con herramientas como ERP, LIMS y CRM. Esto me motivó a aprender C++ y más adelante Python, lo que reafirmó mi decisión de enfocarme en el desarrollo de software. Mi formación base en Ingeniería Química me dio una mentalidad analítica, visión estructurada y gran capacidad de adaptación.</em>",
      "<br>", 
      "Más sobre mí. <em> Fuera del código, me apasionan la música y el cine. Siempre busco formas de combinar lo técnico con lo creativo.</em>"

    ],

    errorMessage: `⚠️ Por favor completa todos los campos correctamente:<br>- Nombre y descripción sin números<br>- Imagen válida con extensión .jpg, .jpeg o .png`
    
  },

  en: {

    name: "Oscar Padilla",
    title: "Full Stack Developer",
    welcome: "Welcome to my Website!",
    aboutMeTitle: "About Me",
    technologiesTitle: "Technologies",
    activitiesTitle: "Add your favorite activities!",
    nameLabel: "Activity name",
    descriptionLabel: "Describe the activity",
    imageLabel: "Image URL",
    addButton: "ADD ACTIVITY",

    aboutMeText: [     
      
      "What I do today. <em> I develop custom web projects through the design and implementation of technical solutions that meet client needs, with strong attention to detail and user experience. I enjoy web development because it blends programming, visual design, data handling, and the ability to access applications from almost anywhere.</em>",
      "<br>",
      "Projects.</strong> <em>Among the projects I am currently working on independently, or that I worked on during the Bootcamp at Henry, are: a web application for a business risk management association, a system to monitor and optimize energy consumption at service stations, and an e-commerce platform. These experiences have allowed me to apply what I’ve learned in both frontend and backend development.</em>",
      "<br>",
      "How I work. <em> I'm results-oriented, have leadership skills, and enjoy learning and applying new tools to improve every day. I'm adaptable to dynamic environments, capable of working independently or in teams, and committed to growing professionally in web development.</em>",
      "<br>",
      "How it all started. <em> My interest in programming began at university when I discovered chemical process simulators and worked on them as part of my graduation project. Although I wasn't coding directly, I saw the potential of programming languages to solve complex problems.</em>",
      "<br>",
      "My previous experience. <em> Throughout my professional career (approximately 13 years), I worked with tools like ERP, LIMS, and CRM systems. This led me to learn C++, and later Python, reinforcing my decision to focus on software development. My background in Chemical Engineering gave me an analytical mindset, a structured approach to problem-solving, and great adaptability.</em>",
      "<br>",
      "More about me. <em> I'm passionate about music and cinema. I'm always looking for ways to combine the technical with the creative.</em>"

    ],

    errorMessage: `⚠️ Please complete all fields correctly:<br>- Name and description without numbers<br>- Valid image with extension .jpg, .jpeg, or .png`

  }
  
};


  