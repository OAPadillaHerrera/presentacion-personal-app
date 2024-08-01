

/*import {Activity, Repository } from "../../src/index.mjs";

console.log (typeof Activity);*/

//----------------------------------------------------------

const {Activity, Repository} = require ("../../scripts/models");


//TESTS

describe ("Clase Activity", () => {

    /* TEST #1, PARA LA CLASE Activity*/
    it ("Debería existir", () => {

        expect (Activity).toBeDefined ();

    });

    /* TEST #2, PARA LA CLASE Activity*/
    it('Debería tener las propiedades id, title, description, and imgUrl', () => {

        const id = 1;

        const title = 'Cualquier Actividad';

        const description = 'Descripción de una actividad cualquiera';

        const imgUrl = 'http://example.com/image.jpg';

        const activity = new Activity(id, title, description, imgUrl);

        // Verificar que las propiedades existen en la instancia
        expect(activity.hasOwnProperty('id')).toBe(true);

        expect(activity.hasOwnProperty('title')).toBe(true);

        expect(activity.hasOwnProperty('description')).toBe(true);

        expect(activity.hasOwnProperty('imgUrl')).toBe(true);

    });

    /* TEST #3, PARA LA CLASE Activity*/
    it("Debería asignar valores correctos a las propiedades", () => {

        const id = 1;

        const title = 'Cualquier actividad';

        const description = "Descripción de una actividad cualquiera";
        const imgUrl = 'http://example.com/image.jpg';

        const activity = new Activity(id, title, description, imgUrl);

        expect(activity.id).toBe(id);

        expect(activity.title).toBe(title);

        expect(activity.description).toBe(description);

        expect(activity.imgUrl).toBe(imgUrl);

    });

});


describe ("Clase Repository", () => {

    /* TEST #1, PARA LA CLASE Repository*/
    it ("Debería existir", () => {

        expect(Repository).toBeDefined();

    });

    /* TEST #2, PARA LA CLASE Repository*/
    it("Debería inicializar con una lista de actividades vacia", () => {
        
        const repository = new Repository();

        expect (repository.getAllActivities().length).toBe(0);

    });

    /* TEST #3, PARA LA CLASE Repository*/
    it('Debería tener los métodos getAllActivities, createActivity, and clearActivity', () => {

        const repository = new Repository();

        expect(typeof repository.getAllActivities).toBe('function');

        expect(typeof repository.createActivity).toBe('function');

        expect(typeof repository.deleteActivity).toBe('function');

    });

})

