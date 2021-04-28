import './css/base.scss';
import domUpdates from './domUpdates.js';                  
import './images/turing-logo.png'
import './images/login-page.png'
import './images/faces.jpg'
import {apiData, postData} from './api-data.js';
import Traveler from './traveler';

const homeButton = document.getElementById('homeButton');
const formButton = document.getElementById('formButton');
const costButton = document.getElementById('costButton');
const bookTripButton = document.getElementById('postButton');
const logInButton = document.getElementById('logInButton');
const handle = document.querySelector('.handle');
const password = document.querySelector('.password');
const dateError = document.getElementById('formDate');
const durationError = document.getElementById('duration');
const numberOfTravelersError = document.getElementById('numTravelers');
const destinationError = document.getElementById('destination');

let currentTraveler, currentTravelerTrips, currentTravelerDestinations,
  allDestinationsData, allTripsData, tripObject, newTravelerTrip, plannedTrip;

formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
logInButton.addEventListener('click', domUpdates.loadTraveler);
handle.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
password.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
dateError.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
durationError.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
numberOfTravelersError.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
destinationError.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});


function generateAPIData(userID) {
  apiData(userID)
  .then(data => {
    let currentTraveler = new Traveler(data.allTravelers)
    console.log(currentTraveler)
  });
}

function generateSingleTraveler() {
  apiData.allTravelers
}



// loadTraveler(userID) {
//   domUpdates.validateUserLogIn();
//   apiData(userID)
//   .then(data => {
//     domUpdates.greetUser(data.currentTraveler);
//     domUpdates.totalSpent(data.currentTraveler.id, currentDate);
//     domUpdates.displayAllTrips(data.currentTraveler.id, currentDate);
//   });
//   homeButton.classList.remove('hidden');
//   addTripButton.classList.remove('hidden');
// },

// totalSpent(traveler, date) {
//   apiData(userID)
//   .then(data => {
//     const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
//     const total = document.querySelector('#totalSpent');
//     const sum = tripRepo.calculateYearlyExpenditure(traveler, date);
//     annualTotal.innerHTML = sum;
//   });
// },

