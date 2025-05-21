

/* 
  activities.js – Interactive activity management for presentacion-personal-app

  This script handles the creation, validation, display, and deletion of user-defined 
  activities within the web interface. It integrates closely with the DOM to enable 
  a smooth, reload-free experience.

  Key features include:
  - Retrieving input elements and cleaning their values
  - Validating user input using regular expressions (text and image URL)
  - Highlighting invalid inputs and displaying contextual error messages
  - Managing activity data via a Repository class (in-memory storage)
  - Inserting and dynamically removing activity cards in the DOM
  - Clearing form fields and removing localStorage values after successful submission

  Provides a modular and responsive frontend interaction model for managing user content.
*/


const repository = new Repository ();

function deleteHandler (event) {

  const buttonId = event.target.id;
  repository.deleteActivity (Number (buttonId));
  insertActivities ();

}

function buildActivity (activity) {

    const {id, title, description, imgUrl } = activity;
    const cardContainer = document.createElement ("div");
    const titleElement = document.createElement ("h3");
    const descriptionElement = document.createElement ("p");
    const imageElement = document.createElement ("img");
    const deleteActivities = document.createElement ("button");

    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    imageElement.src = imgUrl;
    imageElement.alt = `Image of ${title}`;

    cardContainer.classList.add ("card-container");
    cardContainer.appendChild (titleElement);
    cardContainer.appendChild (descriptionElement);
    cardContainer.appendChild (imageElement);

    deleteActivities.innerHTML = "X";
    deleteActivities.id = id;
    deleteActivities.addEventListener ("click", deleteHandler);

    cardContainer.appendChild (deleteActivities);

    return cardContainer;

}

function insertActivities () {

    const containerCards = document.querySelector ("#my-activities-container");
    containerCards.innerHTML = "";
    const fragment = document.createDocumentFragment();
    repository.getAllActivities().map(buildActivity).forEach(el => fragment.appendChild(el));
    containerCards.appendChild(fragment);

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

  function clearInputs (...inputs) {
  inputs.forEach (input => input.value = "");

  }

  clearInputs (nameInput, descriptionInput, imageInput);

}










