import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import {apiData, addTripData} from './api-data.js';
import domUpdates from './domUpdates.js';                  

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const currentDate = "2020/5/11";
const homeButton = document.querySelector('#homeButton');
const formButton = document.querySelector('#formButton');
const costButton = document.querySelector('#costButton');
const bookTripButton = document.querySelector('#postButton');

const formDate = document.querySelector('#formDate');
const formDuration = document.querySelector('#duration');
const numTravelers = document.querySelector('#numTravelers');
const formDestination = document.querySelector('#destination');

window.onload = onStartup();
formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', submitTrip);

function onStartup() {
  apiData()
  .then(data => {
    const currentTraveler = new Traveler(data.currentTraveler);
    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler.id, currentDate);
    domUpdates.displayAllTrips(currentTraveler.id, currentDate);
  });
};

function submitTrip() {
  // apiData()
  // .then(data => {
  //   const currentTraveler = new Traveler(data.currentTraveler);
  //   const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
  //   const formData = {
  //     "id": tripRepo.allTrips.length + 1,
  //     "userID": currentTraveler.id,
  //     "destinationID": formDestination.value,
  //     "travelers": numTravelers.value,
  //     "date": formDate.value,
  //     "duration": formDuration.value,
  //     "status": "pending",
  //     "suggestedActivities": []
  //   }
  //   console.log(formData)
  // })
  console.log(retrieveNewTripData())
};

function retrieveNewTripData() {
  const formData = {
    "destinationID": formDestination.value,
    "travelers": numTravelers.value,
    "date": formDate.value,
    "duration": formDuration.value,
    "status": "pending",
    "suggestedActivities": []
  }
  return formData;   
};



