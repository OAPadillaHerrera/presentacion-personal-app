

// Clase Activity
class Activity {

    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }
}

// Clase Repository
class Repository {

    constructor() {
        this.activities = [];
        this.nextId = 1; // Contador inicial

    }

    // Obtener todas las actividades
    getAllActivities() {

        return this.activities;

    }

    // Crear nueva actividad
    createActivity(title, description, imgUrl) {

        const activity = new Activity(this.nextId, title, description, imgUrl);
        this.activities.push(activity);
        this.nextId++; // Incrementar el id

    }

    // Eliminar actividad por id
    deleteActivity(id) {

        this.activities = this.activities.filter((element) => element.id !== id);
        return this.activities;
    }
    
}


module.exports = {Activity, Repository};