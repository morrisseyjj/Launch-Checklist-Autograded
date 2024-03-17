// Write your helper functions here!

require('cross-fetch/polyfill');
// PART 3
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
    
 }// PART 2.1
//function checks testInput (entered input: pilot, copilot, fuelLevel, cargoLevel) is Empty, a Number or Not a Number
 function validateInput(testInput) {
    if (String(testInput).trim() === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number"
    } else {
        return "Is a Number";
    }
 }

// PART 2.2
 function formSubmission(document, faultyItemsDiv, pilot, copilot, fuelLevel, cargoMass) {
// create variables that check the input using the validateInput function
  let checkPilot = validateInput(pilot);
  let checkCopilot = validateInput(copilot);
  let checkFuel = validateInput(fuelLevel);
  let checkCargo = validateInput(cargoMass);

// create "Empty" variables for if/else statements
  let emptyInput = checkPilot === "Empty" || checkCopilot === "Empty" || checkFuel === "Empty" || (checkCargo === "Empty");

  // Get form elements to update innerHTML in the if/else statements
  const launchStatus = document.getElementById('launchStatus');
  const pilotStatus = document.getElementById('pilotStatus');
  const copilotStatus = document.getElementById('copilotStatus');
  const fuelStatus = document.getElementById('fuelStatus');
  const cargoStatus = document.getElementById('cargoStatus');

  if (emptyInput) {
    launchStatus.style.color = "inherit";
    launchStatus.innerHTML = "Awaiting Information Before Launch";
    alert("All fields are required!");
  } else if (!(checkPilot === "Not a Number") || !(checkCopilot === "Not a Number") || !(checkFuel === "Is a Number") || !(checkCargo === "Is a Number") ) {
    launchStatus.style.color = "inherit";
    launchStatus.innerHTML = "Awaiting Information Before Launch";
    alert("Make sure to enter valid information for each field!");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel >= 10000) {
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else {
      fuelStatus.innerHTML = "Fuel level too low for launch"
    }

    if (cargoMass <= 10000) {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } else {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    }

    if (fuelLevel < 10000 || cargoMass > 10000) {
      faultyItemsDiv.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch"
      launchStatus.style.color = "red";
    } else {
      //
      faultyItemsDiv.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle is Ready for Launch"
      launchStatus.style.color = "green";
    }
  }
 } 


// PART 3
//need to add the URL and return response.json() ...similiar to Ch. 27 "fetching data" example.
 async function myFetch() {
     let planetsReturned ;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 // PART 3
 //Using Math.random(), return one planet from the list with a randomly-selected index.
 function pickPlanet(planets) {
     let planet = {};
     planet = planets[Math.floor(Math.random() * planets.length)]

     return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;


