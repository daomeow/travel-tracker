import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import {apiData, postData} from './api-data.js';

const currentDate = "2020/5/11";
const currentTripSection = document.getElementById('currentTrip');
const pastSection = document.getElementById('pastTrips');
const pendingTripSection = document.getElementById('pendingTrips');
const upcomingTripSection = document.getElementById('upcomingTrips');
const mainHome = document.querySelector('.main-home');
const userForm = document.querySelector('.user-form');
const formDate = document.getElementById('formDate');
const formDuration = document.getElementById('duration');
const numTravelers = document.getElementById('numTravelers');
const formDestination = document.getElementById('destination');
const estimatedCost = document.querySelector('.form-cost')
const formTotal = document.getElementById('totalCost');
const handle = document.querySelector('.handle');
const password = document.querySelector('.password');
const logInPage = document.getElementById('logInPage');
const logInError = document.querySelector('.error-message');
const dateError = document.querySelector('.date-message');
const durationError = document.querySelector('.duration-message');
const numberOfTravelersError = document.querySelector('.num-travelers-message');
const destinationError = document.querySelector('.destination-message');
const userName = document.getElementById('userName');
const annualTotal = document.getElementById('totalSpent');
// const total = document.querySelector('#totalSpent');
const homeButton = document.querySelector('.home');
const addTripButton = document.querySelector('.document');

let allTravelersData, allTripsData,allDestinationsData;

const domUpdates = {

  assignData: (data) => {
    console.log(data)

    allTravelersData = data[0];
    allTripsData = data[1];
    allDestinationsData = data[2];

    console.log(allTravelersData)
  },

  loadTraveler() {
    console.log(allTravelersData)
  }
  // validateUserLogIn() {
  //   const travelerID = domUpdates.getCurrentTraveler();
  //   if (password.value === 'travel2020' && (!isNaN(travelerID))) {
  //     logInPage.classList.toggle('hidden');
  //     mainHome.classList.toggle('hidden');
  //   } else if (handle.value === "" || password === "" || password !== 'travel2020') {
  //     logInError.classList.remove('hidden');
  //   };
  // },

  // getCurrentTraveler() {
  //   const userInput = handle.value.split(/([0-9]+)/);
  //   const travelerID = parseInt(userInput[1]);
  //   console.log(travelerID)
  //   return travelerID;
  // },

//   greetUser(traveler) {
//     userName.innerHTML = traveler.name.split(' ')[0]; 
//   },

//   totalSpent(tripInfo, traveler, date) {
//     const sum = tripInfo.calculateYearlyExpenditure(traveler, date);
//     annualTotal.innerHTML = sum;
// },


//   displayAllTrips(tripInfo, userID, date) {
//     const pastTrips = tripInfo.findUserPastTrips(userID, date);
//     const currentTrip = tripInfo.findUserCurrentTrip(userID, date);
//     const upcomingTrips = tripInfo.findUserUpcomingTrips(userID, date);
//     const pendingTrips = tripInfo.findUserPendingTrips(userID, date);
//     pastTrips.map(trip => {
//       pastSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     currentTrip.map(trip => {
//       currentTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     upcomingTrips.map(trip => {
//       upcomingTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     pendingTrips.map(trip => {
//       pendingTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });
//     homeButton.classList.remove('hidden');
//     addTripButton.classList.remove('hidden');      
//   },

//   displayPage() {
//     mainHome.classList.toggle('hidden');
//     userForm.classList.toggle('hidden');
//     domUpdates.clearForm();
//   },

//   retrieveNewTripData() {
//     const formData = {
//       "destinationID": Number(formDestination.value),
//       "travelers": numTravelers.value,
//       "date": formDate.value,
//       "duration": formDuration.value,
//       "status": "pending",
//       "suggestedActivities": []
//     }
//     return formData;   
//   },

//   addNewTrip(tripInfo, currentTraveler) {
//     console.log(tripInfo)
//     console.log(currentTraveler)
//     const formData = domUpdates.retrieveNewTripData();
//     const destinationIDUserID = {
//       "id": (tripInfo.allTrips.length) + 1,
//       "userID": Number(currentTraveler.id)
//     };
//     const allTripData = {
//       ...formData,
//       ...destinationIDUserID
//     };
//     // mainHome.classList.toggle('hidden');
//     // userForm.classList.toggle('hidden');
//     return postData(allTripData);
//   },

  // addNewTrip() {
  //   apiData(userID)
  //   .then(data => {
  //     const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
  //     const currentTraveler = new Traveler(data.currentTraveler);
  //     const formData = domUpdates.retrieveNewTripData();
  //     const destinationIDUserID = {
  //       "id": (tripRepo.allTrips.length) + 1,
  //       "userID": Number(currentTraveler.id)
  //     };
  //     const allTripData = {
  //       ...formData,
  //       ...destinationIDUserID
  //     };
  //   return postData(tripRepo, allTripData);
  //   });
  //   mainHome.classList.toggle('hidden');
  //   userForm.classList.toggle('hidden');
  // },

//   calculateNewTripCost() {
//     apiData()
//       .then(data => {
//         const userInput = domUpdates.retrieveNewTripData();
//         const trip = new Trip(userInput, data.allDestinations);
//         const tripID = parseInt(userInput.destinationID)
//         const destination = trip.identifyDestination(tripID);
//         const total = trip.calculateCost(destination);
//         formTotal.innerHTML = total;
//         estimatedCost.classList.remove('hidden');
//       })
//   },

//   displayFormErrors() {
//     if (formDate.value === "") {
//       dateError.classList.remove('hidden');
//       return true;
//     } else if (formDuration.value === "") {
//       durationError.classList.remove('hidden');
//       return true;
//     } else if (numTravelers.value === "") {
//       numberOfTravelersError.classList.remove('hidden');
//       return true;
//     } else if (formDestination.value === "") {
//       destinationError.classList.remove('hidden');
//     } else {
//       domUpdates.calculateNewTripCost()
//     }


//     const currentTraveler = domUpdates.getCurrentTraveler()
//     return apiData(currentTraveler)
//   },

//   clearLogInError(event) {
//     if (event.keyCode === 8) {
//       logInError.classList.add('hidden');
//       dateError.classList.add('hidden');
//       durationError.classList.add('hidden');

//     }
//   },

//   reloadTraveler(userID) {
//     apiData()
//     .then(data => {
//       const newTraveler = new Traveler(data.allTravelers);
//       const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
//       const total = document.querySelector('#totalSpent');
//       const sum = tripRepo.calculateYearlyExpenditure(userID, currentDate);
//       total.innerHTML = sum;
//       const traveler = newTraveler.findCurrentTraveler(userID);
//       userName.innerHTML = traveler.name.split(' ')[0]; 
//     })
//   },

//   clearForm() {
//     formDate.value = "";
//     formDuration.value = "";
//     numTravelers.value = "";
//     formDestination.value = "";
//     estimatedCost.classList.add('hidden');
//     dateError.classList.add('hidden');
//     durationError.classList.add('hidden');
//     numberOfTravelersError.classList.add('hidden');
//     destinationError.classList.add('hidden');
//   }
}

export default domUpdates;





// const domUpdates = {
//   // validateUserLogIn() {
//   //   const travelerID = domUpdates.getCurrentTraveler();
//   //   if (password.value === 'travel2020' && (!isNaN(travelerID))) {
//   //     logInPage.classList.toggle('hidden');
//   //     mainHome.classList.toggle('hidden');
//   //   } else if (handle.value === "" || password === "" || password !== 'travel2020') {
//   //     logInError.classList.remove('hidden');
//   //   };
//   // },

//   // getCurrentTraveler() {
//   //   const userInput = handle.value.split(/([0-9]+)/);
//   //   const travelerID = parseInt(userInput[1]);
//   //   console.log(travelerID)
//   //   return travelerID;
//   // },

//   greetUser(traveler) {
//     userName.innerHTML = traveler.name.split(' ')[0]; 
//   },

//   totalSpent(tripInfo, traveler, date) {
//     const sum = tripInfo.calculateYearlyExpenditure(traveler, date);
//     annualTotal.innerHTML = sum;
// },


//   displayAllTrips(tripInfo, userID, date) {
//     const pastTrips = tripInfo.findUserPastTrips(userID, date);
//     const currentTrip = tripInfo.findUserCurrentTrip(userID, date);
//     const upcomingTrips = tripInfo.findUserUpcomingTrips(userID, date);
//     const pendingTrips = tripInfo.findUserPendingTrips(userID, date);
//     pastTrips.map(trip => {
//       pastSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     currentTrip.map(trip => {
//       currentTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     upcomingTrips.map(trip => {
//       upcomingTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });

//     pendingTrips.map(trip => {
//       pendingTripSection.innerHTML += `
//         <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
//       `
//     });
//     homeButton.classList.remove('hidden');
//     addTripButton.classList.remove('hidden');      
//   },

//   displayPage() {
//     mainHome.classList.toggle('hidden');
//     userForm.classList.toggle('hidden');
//     domUpdates.clearForm();
//   },

//   retrieveNewTripData() {
//     const formData = {
//       "destinationID": Number(formDestination.value),
//       "travelers": numTravelers.value,
//       "date": formDate.value,
//       "duration": formDuration.value,
//       "status": "pending",
//       "suggestedActivities": []
//     }
//     return formData;   
//   },

//   addNewTrip(tripInfo, currentTraveler) {
//     console.log(tripInfo)
//     console.log(currentTraveler)
//     const formData = domUpdates.retrieveNewTripData();
//     const destinationIDUserID = {
//       "id": (tripInfo.allTrips.length) + 1,
//       "userID": Number(currentTraveler.id)
//     };
//     const allTripData = {
//       ...formData,
//       ...destinationIDUserID
//     };
//     // mainHome.classList.toggle('hidden');
//     // userForm.classList.toggle('hidden');
//     return postData(allTripData);
//   },

//   // addNewTrip() {
//   //   apiData(userID)
//   //   .then(data => {
//   //     const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
//   //     const currentTraveler = new Traveler(data.currentTraveler);
//   //     const formData = domUpdates.retrieveNewTripData();
//   //     const destinationIDUserID = {
//   //       "id": (tripRepo.allTrips.length) + 1,
//   //       "userID": Number(currentTraveler.id)
//   //     };
//   //     const allTripData = {
//   //       ...formData,
//   //       ...destinationIDUserID
//   //     };
//   //   return postData(tripRepo, allTripData);
//   //   });
//   //   mainHome.classList.toggle('hidden');
//   //   userForm.classList.toggle('hidden');
//   // },

//   calculateNewTripCost() {
//     apiData()
//       .then(data => {
//         const userInput = domUpdates.retrieveNewTripData();
//         const trip = new Trip(userInput, data.allDestinations);
//         const tripID = parseInt(userInput.destinationID)
//         const destination = trip.identifyDestination(tripID);
//         const total = trip.calculateCost(destination);
//         formTotal.innerHTML = total;
//         estimatedCost.classList.remove('hidden');
//       })
//   },

//   displayFormErrors() {
//     if (formDate.value === "") {
//       dateError.classList.remove('hidden');
//       return true;
//     } else if (formDuration.value === "") {
//       durationError.classList.remove('hidden');
//       return true;
//     } else if (numTravelers.value === "") {
//       numberOfTravelersError.classList.remove('hidden');
//       return true;
//     } else if (formDestination.value === "") {
//       destinationError.classList.remove('hidden');
//     } else {
//       domUpdates.calculateNewTripCost()
//     }


//     const currentTraveler = domUpdates.getCurrentTraveler()
//     return apiData(currentTraveler)
//   },

//   clearLogInError(event) {
//     if (event.keyCode === 8) {
//       logInError.classList.add('hidden');
//       dateError.classList.add('hidden');
//       durationError.classList.add('hidden');

//     }
//   },

//   reloadTraveler(userID) {
//     apiData()
//     .then(data => {
//       const newTraveler = new Traveler(data.allTravelers);
//       const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
//       const total = document.querySelector('#totalSpent');
//       const sum = tripRepo.calculateYearlyExpenditure(userID, currentDate);
//       total.innerHTML = sum;
//       const traveler = newTraveler.findCurrentTraveler(userID);
//       userName.innerHTML = traveler.name.split(' ')[0]; 
//     })
//   },

//   clearForm() {
//     formDate.value = "";
//     formDuration.value = "";
//     numTravelers.value = "";
//     formDestination.value = "";
//     estimatedCost.classList.add('hidden');
//     dateError.classList.add('hidden');
//     durationError.classList.add('hidden');
//     numberOfTravelersError.classList.add('hidden');
//     destinationError.classList.add('hidden');
//   }
// }

// export default domUpdates;

