

/*
  activity-loader – Event listener for the dynamic activity creation button

  This section sets up the interaction logic for the "ADD ACTIVITY" button.
  It locates the button element by ID ("activity-loader") and assigns a click
  event listener that triggers the `handler` function. This handler is responsible
  for collecting user input from the form and dynamically generating a new
  activity card to be displayed on the page.
*/

const showActivity = document.getElementById ("activity-loader");
showActivity.addEventListener ("click", handler);


