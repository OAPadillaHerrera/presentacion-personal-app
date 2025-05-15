

/* activities.js – Dynamic management of interactive activities on the web interface
   This file handles the logic related to creating, 
   displaying, and deleting activities within the graphical user interface.
   It relies on a `Repository` class that manages activities in memory 
   (without persistence).

   The included functions allow:

   - Inserting activities into the DOM based on stored data.
   - Validating form inputs for activity creation.
   - Creating new activities with user-provided data.
   - Dynamically deleting existing activities.
   
   This file integrates with the frontend of the webpage, enabling an 
   interactive and reload-free user experience.
*/

const repository = new Repository ();

function deleteHandler (event) {

  const buttonId = event.target.id;
  repository.deleteActivity (Number (buttonId));
  insertActivities ();

}

function buildActivity (activity) {

    const {id, title, description, imgUrl } = activity;
    const cardContainer = document.createElement ('div');
    const titleElement = document.createElement ('h3');
    const descriptionElement = document.createElement ('p');
    const imageElement = document.createElement ('img');
    const deleteActivities = document.createElement ('button');

    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    imageElement.src = imgUrl;
    imageElement.alt = `Image of ${title}`;

    cardContainer.classList.add ("card-container");
    cardContainer.appendChild (titleElement);
    cardContainer.appendChild (descriptionElement);
    cardContainer.appendChild (imageElement);

    deleteActivities.innerHTML = "X";
    /*deleteActivities.classList.add ("delete-button");*/
    deleteActivities.id = id;
    deleteActivities.addEventListener ("click", deleteHandler);

    cardContainer.appendChild (/*eliminarActividades*/deleteActivities);

    return cardContainer;

}

function insertActivities () {

    const containerCards = document.querySelector ("#my-activities-container");
    containerCards.innerHTML = "";

    const allActivities = /*repositorio*/repository.getAllActivities ().map (/*construirActividad*/buildActivity);

    allActivities.forEach ((element) => {

      containerCards.appendChild (element);

    });

}

const textRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s.,;:()¿?!¡'"-]{3,}$/;
const imageRegex = /\.(jpg|jpeg|png)$/i;

function getInputs () {

  return {

    nameInput: document.getElementById ("activityName"),
    descriptionInput: document.getElementById ("activityDescription"),
    imageInput: document.getElementById ("activityImage")

  };

}

function getCleanValues () {

  const { nameInput, descriptionInput, imageInput } = getInputs ();

  return {

    name: nameInput.value.trim (),
    description: descriptionInput.value.trim (),
    image: imageInput.value.trim ()

  };

}

function cleanErrors (inputs) {

  inputs.forEach (input => input.classList.remove ("input-error"));

}

function handler (event) {

  event.preventDefault ();

  const { nameInput, descriptionInput, imageInput } = getInputs ();
  const { name, description, image } =  getCleanValues ();

  const generalMessage = document.getElementById ("general-error-message");
  let ifError = false;

  cleanErrors ([nameInput, descriptionInput, imageInput]);

  if (!textRegex.test (name)) {

    nameInput.classList.add ("input-error");
    ifError = true;

  }

  if (!textRegex.test (description)) {

    descriptionInput.classList.add ("input-error");
    ifError = true;

  }

  if (!imageRegex.test (image)) {

    imageInput.classList.add ("input-error");
    ifError = true;

  }

  if (ifError) {

    generalMessage.classList.remove ("hidden");
    return;

  } else {

    generalMessage.classList.add ("hidden");

    localStorage.removeItem ("activityName");
    localStorage.removeItem ("activityDescription");
    localStorage.removeItem ("activityImage");

  }

  repository.createActivity (name, description, image);
  insertActivities ();

  nameInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";

 cleanErrors ([nameInput, descriptionInput, imageInput]);

  const button = document.getElementById ("activity-loader");

}










