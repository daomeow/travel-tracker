import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
// import Trip from './trip.js'; 
import {apiData} from './data/api-data.js';
import domUpdates from './domUpdates.js';                  

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


const currentDate = "2020/5/11";
const homeButton = document.querySelector('#homeButton');
const formButton = document.querySelector('#formButton');
const costButton = document.querySelector('#costButton');
const bookTripButton = document.querySelector('#postButton');

window.onload = onStartup();
formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);

function onStartup() {
  apiData()
  .then(data => {
    let currentTraveler = new Traveler(data.currentTraveler);

    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler.id, currentDate);
    domUpdates.displayAllTrips(currentTraveler.id, currentDate);
  });
}



