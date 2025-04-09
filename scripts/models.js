

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

        this.activities = [];
        this.nextId = 1; 

    }

    getAllActivities () {

        return this.activities;

    }

    createActivity (title, description, imgUrl) {

        const activity = new Activity (this.nextId, title, description, imgUrl);
        this.activities.push (activity);
        this.nextId++; 

    }

    deleteActivity (id) {

        this.activities = this.activities.filter ((element) => element.id !== id);
        return this.activities;

    }
    
}

module.exports = {Activity, Repository};