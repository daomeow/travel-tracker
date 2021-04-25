import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
// import Trip from './trip.js'; 
import {apiData} from './data/api-data.js';
import domUpdates from './domUpdates.js';                  

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

//query slectors
const currentDate = "2020/05/04";
//event listeners
window.onload = onStartup();

function onStartup() {
  apiData()
  .then(data => {
    const travelerRepo = new TravelerRepo(data.allTravelers);
    let currentTraveler = new Traveler(data.currentTraveler);
    const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler, "2020/05/04")
  })
}

// Toggle page function 
