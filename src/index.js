import './css/base.scss';
import domUpdates from './domUpdates.js';                  
import './images/turing-logo.png'
import './images/login-page.png'
import './images/faces.jpg'

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




