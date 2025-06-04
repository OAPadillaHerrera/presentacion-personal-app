

/* 
  script.js – Dynamic welcome animation, language switching, 
  title animation, and localStorage handling

  This script provides:
  - A typewriter-style animated welcome message
  - Dynamic language switching (Spanish/English) using texts from languages.js
  - Real-time updates to all major page sections (headings, labels, button text, about-me content)
  - Smooth title fade-in animation for key sections
  - LocalStorage support to persist form input data across sessions
  - Initialization of existing activities via insertActivities()

  Enhances the interactivity and accessibility of the presentacion-personal-app site.
*/

let timeoutId = null;  

function writeText (elementId, text, speed, callback) {

  let i = 0;
  const el = document.getElementById (elementId);

  if (timeoutId) {

    clearTimeout (timeoutId);
    timeoutId = null;

  }

  el.innerHTML = "";

  function write () {

    if (i < text.length) {

      el.innerHTML += text.charAt (i);
      i++;
      timeoutId = setTimeout (write, speed);

    } else if (callback) {

      timeoutId = setTimeout (callback, 1000);

    }

  }

  write ();

}

function startAnimation () {

    writeText ("welcome", texts [currentLanguage].welcome || "Bienvenidos a mi Página Web!", 150);

}

let currentLanguage = "es";

function changeLanguage (language) {

    currentLanguage = language;
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
    document.getElementById ("about-me").innerHTML = t.aboutMeText.map (p => `<p>${p}</p>`).join ("");
    startAnimation ();

}

document.addEventListener ("DOMContentLoaded", () => {

  changeLanguage (currentLanguage);
  animateTitleAppearance ();
  const nameInput = document.getElementById ("activityName");
  const descriptionInput = document.getElementById ("activityDescription");
  const imageInput = document.getElementById ("activityImage");
  const name = localStorage.getItem ("activityName");
  const description = localStorage.getItem ("activityDescription");
  const image = localStorage.getItem ("activityImage");
  if (name) nameInput.value = name;
  if (description) descriptionInput.value = description;
  if (image) imageInput.value = image;

  nameInput.addEventListener ("input", () =>

    localStorage.setItem ("activityName", nameInput.value)

  );

  descriptionInput.addEventListener ("input", () =>

    localStorage.setItem ("activityDescription", descriptionInput.value)

  );

  imageInput.addEventListener ("input", () =>

    localStorage.setItem ("activityImage", imageInput.value)

  );

  insertActivities ();
  const addButton = document.getElementById ("activity-loader");
  addButton.addEventListener ("click", handler);
  animateTitleAppearance();

});

function animateTitleAppearance () { 

    const titles = [

        document.getElementById ("name"),
        document.getElementById ("title"),
        ...document.querySelectorAll (".font-heading")

    ];

   titles.forEach ((title, index) => {

        setTimeout (() => {

            title.classList.remove ("hidden-title");
            title.classList.add ("visible-title");
              
        }, (index + 1) * 5500);

    });  

}










