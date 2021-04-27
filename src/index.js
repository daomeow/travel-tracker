import './css/base.scss';
import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import {apiData, postData} from './api-data.js';
import domUpdates from './domUpdates.js';                  

import './images/turing-logo.png'
import './images/boulder.jpg'
import './images/faces.jpg'

const currentDate = "2020/5/11";
const homeButton = document.getElementById('homeButton');
const formButton = document.getElementById('formButton');
const costButton = document.getElementById('costButton');
const bookTripButton = document.getElementById('postButton');
const logInButton = document.getElementById('logInButton');
const handle = document.querySelector('.handle');
const password = document.querySelector('.password');

formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
logInButton.addEventListener('click', findCurrentTraveler);
handle.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});
password.addEventListener('keydown', function(event) {
  domUpdates.clearLogInError(event);
});

function findCurrentTraveler() {
  domUpdates.validateUserLogIn();
  apiData()
  .then(data => {
    const currentTraveler = new Traveler(data.currentTraveler);
    domUpdates.greetUser(currentTraveler);
    domUpdates.totalSpent(currentTraveler.id, currentDate);
    domUpdates.displayAllTrips(currentTraveler.id, currentDate);
  });
};



