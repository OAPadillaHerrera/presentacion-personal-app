

/*
  models.spec.js – Unit tests for Activity and Repository classes using Jasmine

  This file tests the main functionalities of the Activity and Repository classes
  defined in the application. These tests validate object structure, data consistency,
  and method behavior to ensure reliability in the application's data management logic.

  Includes:
  - Existence and structure checks for Activity instances
  - Validation of property assignment in Activity objects
  - Initial state and method verification in the Repository class

  These tests are written in Jasmine and help maintain code quality and prevent regressions.
*/

const { Activity, Repository } = require ("../../scripts/models");

// Tests for the Activity class
describe ("Activity Class", () => {

  // Test #1: Check if the class exists
  it ("should be defined", () => {

    expect (Activity).toBeDefined ();

  });

  // Test #2: Check if all expected properties exist
  it ("should have id, title, description, and imgUrl properties", () => {

    const id = 1;
    const title = "Any Activity";
    const description = "Description of a generic activity";
    const imgUrl = "http://example.com/image.jpg";
    const activity = new Activity (id, title, description, imgUrl);
    expect (activity.hasOwnProperty ("id")).toBe (true);
    expect (activity.hasOwnProperty ("title")).toBe (true);
    expect (activity.hasOwnProperty ("description")).toBe (true);
    expect (activity.hasOwnProperty ("imgUrl")).toBe (true);

  });

  // Test #3: Validate correct assignment of properties
  it ("should correctly assign values to properties", () => {

    const id = 1;
    const title = "Any Activity";
    const description = "Description of a generic activity";
    const imgUrl = "http://example.com/image.jpg";
    const activity = new Activity (id, title, description, imgUrl);
    expect (activity.id).toBe (id);
    expect (activity.title).toBe (title);
    expect (activity.description).toBe (description);
    expect (activity.imgUrl).toBe (imgUrl);

  });

});

// Tests for the Repository class
describe ("Repository Class", () => {

  // Test #1: Check if the class exists
  it ("should be defined", () => {

    expect (Repository).toBeDefined ();

  });

  // Test #2: Verify it initializes with an empty activities list
  it ("should initialize with an empty activities list", () => {

    const repository = new Repository ();
    expect (repository.getAllActivities ().length).toBe (0);

  });

  // Test #3: Check if all expected methods exist
  it ("should have the methods getAllActivities, createActivity, and deleteActivity", () => {

    const repository = new Repository ();
    expect (typeof repository.getAllActivities).toBe ("function");
    expect (typeof repository.createActivity).toBe ("function");
    expect (typeof repository.deleteActivity).toBe ("function");

  });

});

