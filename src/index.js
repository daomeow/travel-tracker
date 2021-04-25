import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
// import Trip from './trip.js'; 
import {apiData} from './data/api-data.js';
import domUpdates from './domUpdates.js';                  

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


const currentDate = "2020/11/11";

window.onload = onStartup();

function onStartup() {
  apiData()
  .then(data => {
    const travelerRepo = new TravelerRepo(data.allTravelers);
    let currentTraveler = new Traveler(data.currentTraveler);
    const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler.id, currentDate);
    domUpdates.addPastTrips(currentTraveler.id, currentDate);
    domUpdates.addCurrentTrip(currentTraveler.id, currentDate);
    domUpdates.addUpcomingTrips(currentTraveler.id, currentDate);
    // domUpdates.addPendingTrips(currentTraveler.id, currentDate);
  })
}

// Toggle page function 
