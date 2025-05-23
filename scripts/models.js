

/*
  models.js – Class definitions for "presentacion-personal-app"

  Contains:
  - Activity: A class representing a user-defined activity with title, description, and image.
  - Repository: A class that manages activity persistence using localStorage.
*/

class Activity {

    constructor (id, title, description, imgUrl) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }

}

class Repository {
    
    constructor () {

        const data = JSON.parse (localStorage.getItem ('activities')) || [];
        this.activities = data.map (obj => new Activity (obj.id, obj.title, obj.description, obj.imgUrl));

        this.nextId = this.activities.length > 0
        ? Math.max (...this.activities.map (a => a.id)) + 1
        : 1;

    }

    saveToLocalStorage () {

        localStorage.setItem ('activities', JSON.stringify (this.activities));

    }

    getAllActivities () {

        return this.activities;

    }

    createActivity (title, description, imgUrl) {

        const activity = new Activity (this.nextId, title, description, imgUrl);
        this.activities.push (activity);
        this.nextId++;
        this.saveToLocalStorage ();  

    }

    deleteActivity (id) {

        this.activities = this.activities.filter (activity => activity.id !== id);
        this.saveToLocalStorage ();  

}}
