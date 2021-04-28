import './css/base.scss';
import domUpdates from './domUpdates.js';                  
import './images/turing-logo.png'
import './images/login-page.png'
import './images/faces.jpg'
import {apiData, postData} from './api-data.js';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trip-repo';

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

let currentTraveler, currentTravelerTrips, currentTravelerDestinations,
  allDestinationsData, allTripsData, tripObject, newTravelerTrip, plannedTrip, allTravelersData;

const logInPage = document.getElementById('logInPage');
const mainHome = document.querySelector('.main-home');
const logInError = document.querySelector('.error-message');


formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
logInButton.addEventListener('click', loadTraveler);
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

function generateAPIData(id) {
  const fetches = [apiData.generateAllTravelers(), apiData.generateAllTrips(), apiData.generateAllDestinations()]
  Promise.all(fetches)
  .then(data => {
    allTravelersData = data[0];
    allTripsData = data[1];
    allDestinationsData = data[2];

    const tripRepo = new TripRepo(allTripsData, allDestinationsData)


    domUpdates.totalSpent(tripRepo, currentTraveler.id, currentDate)


  });
}

function generateSingleTravelerAPI(id) {
  apiData.generateCurrentTraveler(id)
  .then(data => {
    currentTraveler = new Traveler(data);
    console.log(currentTraveler)
    domUpdates.greetUser(currentTraveler);
    generateAPIData();
  })
}



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

}

function getCurrentTraveler() {
  const userInput = handle.value.split(/([0-9]+)/);
  const travelerID = parseInt(userInput[1]);
  generateSingleTravelerAPI(travelerID)
}

function loadTraveler(userID) {
  validateUserLogIn();
  console.log(currentTraveler)
  // generateSingleTravelerAPI(userID);
  // console.log(currentTraveler)
  // domUpdates.greetUser(currentTraveler);

  //   domUpdates.totalSpent(data.currentTraveler.id, currentDate);

  // domUpdates.displayAllTrips(userID, currentDate);

  // homeButton.classList.remove('hidden');
  // addTripButton.classList.remove('hidden');
}

// function totalSpent(tripInfo) {

//     const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
//     const total = document.querySelector('#totalSpent');
//     const sum = tripRepo.calculateYearlyExpenditure(traveler, date);
//     annualTotal.innerHTML = sum;

// }

