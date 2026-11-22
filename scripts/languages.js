

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
    title: "Desarrollador Web Full Stack | Backend y Analítica de Datos",
    welcome: "¡Bienvenidos a mi Página Web!",
    aboutMeTitle: "Sobre Mi",
    technologiesTitle: "Tecnologías",
    activitiesTitle: "¡Agrega tus actividades favoritas!",
    nameLabel: "Nombre de la actividad",
    descriptionLabel: "Describir la actividad",
    imageLabel: "Link de la imagen",
    addButton: "AGREGAR ACTIVIDAD",

    aboutMeText: [

      "Lo que hago hoy. <em>Soy Desarrollador Web Full Stack con enfoque en Backend. Cuento con experiencia práctica en el diseño y desarrollo de aplicaciones web, APIs y soluciones basadas en bases de datos, utilizando tecnologías como Node.js, NestJS, TypeScript, Python y PostgreSQL. He participado en el desarrollo de funcionalidades para aplicaciones en producción, durante mi experiencia como Backend Developer en una fintech, y en proyectos freelance, trabajando tanto de manera autónoma como colaborativa.</em>",
      "<br>",
      "<em>También he ampliado mi campo de trabajo hacia la Analítica de Datos, desarrollando soluciones que integran Python, SQL, PostgreSQL y herramientas de Business Intelligence como Metabase. Me interesa especialmente el ciclo completo de los datos: desde su obtención e integración mediante APIs externas, hasta su procesamiento, almacenamiento, análisis y visualización. Disfruto encontrar soluciones tecnológicas que permitan automatizar procesos, aprovechar mejor la información y facilitar la toma de decisiones.</em>",
      "<br>",
      "Proyectos. <em>A lo largo de mi formación y experiencia práctica he desarrollado proyectos individuales y colaborativos en las áreas de Frontend, Backend y Full Stack. Actualmente, trabajo como desarrollador freelance en <strong>energy-da-ml-platform</strong>, una plataforma web orientada al registro, análisis y gestión de información sobre consumo energético en estaciones de servicio. El proyecto integra tecnologías de desarrollo web, Data Analytics y Machine Learning para procesar información, generar indicadores y facilitar su visualización e interpretación.</em>",
      "<br>",
      "Cómo trabajo. <em>Soy una persona orientada a resultados, con capacidad de análisis, iniciativa y disposición para aprender continuamente. Me gusta investigar, comprender cómo funcionan las herramientas y aplicar buenas prácticas para construir soluciones claras, funcionales y mantenibles. Puedo trabajar de manera autónoma o en equipo, adaptándome a diferentes contextos y metodologías de trabajo.</em>",
      "<br>",
      "Cómo empezó todo. <em>Mi interés por la programación comenzó en la universidad, cuando conocí los simuladores de procesos químicos y trabajé en ese tema como proyecto de grado. Aunque no desarrollaba directamente el software, descubrí el potencial de los lenguajes de programación y las herramientas computacionales para representar procesos y resolver problemas complejos.</em>",
      "<br>",
      "Mi experiencia previa. <em>Antes de enfocarme en el desarrollo de software, construí una trayectoria profesional de aproximadamente 13 años en áreas relacionadas con operaciones, inspección, ensayos y desarrollo de negocios. Durante ese tiempo trabajé con herramientas empresariales como ERP, LIMS y CRM, además de utilizar Excel avanzado para el análisis de información y la elaboración de reportes operativos.</em>",
      "<br>",
      "<em>Esta experiencia, junto con mi formación como Ingeniero Químico, fortaleció mi capacidad analítica, comprensión de procesos y orientación a la resolución de problemas. Posteriormente, mi interés por la programación me llevó a profundizar en lenguajes como C++ y Python, hasta orientar mi desarrollo profesional hacia la ingeniería de software y la tecnología.</em>",
      "<br>",
      "Más sobre mí. <em>Fuera del código, me apasionan la música y el cine. Siempre encuentro interesante la conexión entre la tecnología, la creatividad y las distintas formas de expresión.</em>"

    ],

    errorMessage: `⚠️ Por favor completa todos los campos correctamente:<br>- Nombre y descripción sin números<br>- Imagen válida con extensión .jpg, .jpeg o .png`

  },

  en: {

    name: "Oscar Padilla",
    title: "Full Stack Web Developer | Backend & Data Analytics",
    welcome: "Welcome to my Website!",
    aboutMeTitle: "About Me",
    technologiesTitle: "Technologies",
    activitiesTitle: "Add your favorite activities!",
    nameLabel: "Activity name",
    descriptionLabel: "Describe the activity",
    imageLabel: "Image URL",
    addButton: "ADD ACTIVITY",

    aboutMeText: [

      "What I do today. <em>I am a Full Stack Web Developer focused on Backend development. I have hands-on experience designing and developing web applications, APIs, and database-driven solutions using technologies such as Node.js, NestJS, TypeScript, Python, and PostgreSQL. I have contributed to the development of features for production applications during my experience as a Backend Developer at a fintech company, as well as through freelance projects, working both independently and collaboratively.</em>",
      "<br>",
      "<em>I have also expanded my work into Data Analytics, developing solutions that combine Python, SQL, PostgreSQL, and Business Intelligence tools such as Metabase. I am particularly interested in the entire data lifecycle, from data acquisition and integration through external APIs to processing, storage, analysis, and visualization. I enjoy building technological solutions that automate processes, make better use of information, and support decision-making.</em>",
      "<br>",
      "Projects. <em>Throughout my training and hands-on experience, I have developed individual and collaborative projects in Frontend, Backend, and Full Stack development. I am currently working as a freelance developer on <strong>energy-da-ml-platform</strong>, a web platform focused on recording, analyzing, and managing energy consumption data from fuel stations. The project combines web development technologies, Data Analytics, and Machine Learning to process information, generate performance indicators, and support data visualization and interpretation.</em>",
      "<br>",
      "How I work. <em>I am results-oriented, analytical, proactive, and always willing to learn. I enjoy researching, understanding how tools work, and applying good development practices to build clear, functional, and maintainable solutions. I am comfortable working independently or as part of a team, adapting to different environments and working methodologies.</em>",
      "<br>",
      "How it all began. <em>My interest in programming began at university, when I was introduced to chemical process simulators and explored this subject as part of my undergraduate thesis. Although I was not directly involved in software development at the time, I discovered the potential of programming languages and computational tools to model processes and solve complex problems.</em>",
      "<br>",
      "My previous experience. <em>Before focusing on software development, I built approximately 13 years of professional experience in operations, inspection, testing, and business development. During that time, I worked with enterprise tools such as ERP, LIMS, and CRM systems, as well as advanced Excel for data analysis and operational reporting.</em>",
      "<br>",
      "<em>This experience, together with my background in Chemical Engineering, strengthened my analytical thinking, process understanding, and problem-solving skills. Later, my interest in programming led me to explore languages such as C++ and Python, eventually guiding my professional development toward software engineering and technology.</em>",
      "<br>",
      "More about me. <em>Outside of coding, I am passionate about music and cinema. I am always interested in the connection between technology, creativity, and different forms of expression.</em>"

    ],

    errorMessage: `⚠️ Please complete all fields correctly:<br>- Name and description without numbers<br>- Valid image with extension .jpg, .jpeg, or .png`

  }

};



  