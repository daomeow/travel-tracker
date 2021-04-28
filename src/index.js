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

let currentTraveler, currentTravelerTrips, currentTravelerDestinations,
  allDestinationsData, allTripsData, tripObject, newTravelerTrip, plannedTrip, allTravelersData;

let tripRepo;

const logInPage = document.getElementById('logInPage');
const mainHome = document.querySelector('.main-home');
const logInError = document.querySelector('.error-message');



formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
// logInButton.addEventListener('click', domUpdates.loadTraveler);
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

// function loadTraveler() {
//   validateUserLogIn();
// }

// function bookNewTrip(tripInfo, currentTraveler) {
//   domUpdates.addNewTrip(tripInfo, currentTraveler)
//   // generateAPIData()
// }



//BEFORE 

// function generateFetchData() {
//   const fetches = [apiData.generateAllTravelers(), apiData.generateAllTrips(), apiData.generateAllDestinations()]
//   Promise.all(fetches)
//   .then(data => {
//     allTravelersData = data[0];
//     allTripsData = data[1];
//     allDestinationsData = data[2];

//     const tripRepo = new TripRepo(allTripsData, allDestinationsData);

//     // filterAllTripsForTraveler(allTripsData)
//     domUpdates.totalSpent(tripRepo, currentTraveler.id, currentDate);
//     domUpdates.displayAllTrips(tripRepo, currentTraveler.id, currentDate);

//     // bookNewTrip(tripRepo, currentTraveler.id)
//     domUpdates.addNewTrip(tripRepo, currentTraveler)
//   });
// }

// function generateSingleTravelerAPI(id) {
//   apiData.generateCurrentTraveler(id)
//   .then(data => {
//     // console.log(data, 'checking!!!');
//     currentTraveler = new Traveler(data);
//     domUpdates.greetUser(currentTraveler);
//     generateFetchData();
//   })
// }



// function validateUserLogIn() {
//   const travelerID = getCurrentTraveler();
//   // if (password.value === 'travel2020' && (!isNaN(travelerID))) {

//   //   if ((!isNaN(travelerID))) {
//   //   logInPage.classList.toggle('hidden');
//   //   mainHome.classList.toggle('hidden');
//   // } else if (handle.value === "" || password === "" || password !== 'travel2020') {
//   //   logInError.classList.remove('hidden');
//   // };

//   logInPage.classList.toggle('hidden');
//   mainHome.classList.toggle('hidden');

// }

// function getCurrentTraveler() {
//   const userInput = handle.value.split(/([0-9]+)/);
//   const travelerID = parseInt(userInput[1]);
//   generateSingleTravelerAPI(travelerID)
// }

// function loadTraveler() {
//   validateUserLogIn();
// }

// function bookNewTrip(tripInfo, currentTraveler) {
//   domUpdates.addNewTrip(tripInfo, currentTraveler)
//   // generateAPIData()
// }


// // function generateAPIData() {
// //   const fetches = [apiData.generateAllTravelers(), apiData.generateAllTrips(), apiData.generateAllDestinations()]
// //   Promise.all(fetches)
// //   .then(data => {
// //     allTravelersData = data[0];
// //     allTripsData = data[1];
// //     allDestinationsData = data[2];

// //   const tripRepo = new TripRepo(allTripsData, allDestinationsData)

// //     console.log(tripRepo)
// //     domUpdates.addNewTrip(tripRepo, currentTraveler.id)
// //   });
// // }






