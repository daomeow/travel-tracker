import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import {apiData, postData} from './api-data.js';
import domUpdates from './domUpdates.js';                  

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const currentDate = "2020/5/11";
const homeButton = document.getElementById('homeButton');
const formButton = document.getElementById('formButton');
const costButton = document.getElementById('costButton');
const bookTripButton = document.getElementById('postButton');

// const formDate = document.getElementById('formDate');
// const formDuration = document.getElementById('duration');
// const numTravelers = document.getElementById('numTravelers');
// const formDestination = document.getElementById('destination');

window.onload = onStartup();
formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.retrieveNewTripData);

costButton.addEventListener('click', domUpdates.calculateNewTripCost);

function onStartup() {
  apiData()
  .then(data => {
    const currentTraveler = new Traveler(data.currentTraveler);
    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler.id, currentDate);
    domUpdates.displayAllTrips(currentTraveler.id, currentDate);
  });
};



function addNewTrip(newTrip) {
  apiData()
  .then(data => {
    const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
    tripRepo.allTrips.push(newTrip);
  })
}



