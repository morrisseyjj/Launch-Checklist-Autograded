// Write your JavaScript code here!

window.addEventListener("load", function() {
// TASK 3
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });
//TASK 2
    // add event listener for the button
    const submitButton = document.getElementById("formSubmit");

    submitButton.addEventListener('click', function (event) {

  // To prevent the Submit button from submitting a Form,running its code and the page reloading. Runs my code instead.
     event.preventDefault();

  // declare
      const pilotInput = document.getElementById('pilotName');
      const copilotInput = document.querySelector("input[name=copilotName]")
      const fuelInput = document.querySelector("input[name=fuelLevel]");
      const cargoInput = document.querySelector("input[name=cargoMass]");
  
      const faultyItemsDiv = document.getElementById('faultyItems');
      
  // call formSubmission function. 
      formSubmission(document, faultyItemsDiv, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
 
    });





 });