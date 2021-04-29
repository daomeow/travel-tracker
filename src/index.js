import './css/base.scss';
import domUpdates from './domUpdates.js';                  
import './images/turing-logo.png'
import './images/login-page.png'
import './images/faces.jpg'
// import {apiData, postData} from './api-data.js';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trip-repo';
import { apiCalls } from './api-data'

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
const currentDate = "2020/5/11";


const logInPage = document.getElementById('logInPage');
const mainHome = document.querySelector('.main-home');
const logInError = document.querySelector('.error-message');

formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
logInButton.addEventListener('click', validateUserLogIn);



// handle.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });
// password.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });
// dateError.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });
// durationError.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });
// numberOfTravelersError.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });
// destinationError.addEventListener('keydown', function(event) {
//   domUpdates.clearLogInError(event);
// });


function validateUserLogIn() {
  const travelerID = getCurrentTraveler();
  // if (password.value === 'travel2020' && (!isNaN(travelerID))) {

  //   if ((!isNaN(travelerID))) {
  //   logInPage.classList.toggle('hidden');
  //   mainHome.classList.toggle('hidden');
  // } else if (handle.value === "" || password === "" || password !== 'travel2020') {
  //   logInError.classList.remove('hidden');
  // };

  logInPage.classList.toggle('hidden');
  mainHome.classList.toggle('hidden');
  generateFetchData(travelerID); 
}



function generateFetchData(currUserID) {
  Promise.all([apiCalls.fetchAllData(`travelers`), apiCalls.fetchAllData(`trips`), 
    apiCalls.fetchAllData(`destinations`), apiCalls.currentTraveler(`travelers/${currUserID}`)])
      .then(data => {
        domUpdates.assignData(data)
      })
}




function getCurrentTraveler() {
  const userInput = handle.value.split(/([0-9]+)/);
  const travelerID = parseInt(userInput[1]);
  return travelerID;
}
