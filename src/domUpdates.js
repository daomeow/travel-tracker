import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import {apiData, postData} from './api-data.js';

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
const formTotal = document.getElementById('totalCost');


const domUpdates = {
  greetUser(traveler) {
    const userName = document.getElementById('userName');
    userName.innerHTML = traveler.name.split(' ')[0]; 
  },

  totalSpent(traveler, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const total = document.querySelector('#totalSpent');
      const sum = tripRepo.calculateYearlyExpenditure(traveler, date);
      total.innerHTML = sum;
    });
  },

  displayAllTrips(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const pastTrips = tripRepo.findUserPastTrips(userID, date);
      const currentTrip = tripRepo.findUserCurrentTrip(userID, date);
      const upcomingTrips = tripRepo.findUserUpcomingTrips(userID, date);
      const pendingTrips = tripRepo.findUserPendingTrips(userID, date);

      pastTrips.map(trip => {
        pastSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      });

      // ADD MSG: YOU ARE CURRENTLY NOT ON A TRIP TODAY (DATE)
      currentTrip.map(trip => {
        currentTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      });

      upcomingTrips.map(trip => {
        upcomingTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      });

      // ADD MSG: YOU ARE CURRENTLY HAVE NO UPCOMING PENDING TRIPS
      pendingTrips.map(trip => {
        pendingTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      });      
    }); 
  },
  displayPage() {
    mainHome.classList.toggle('hidden');
    userForm.classList.toggle('hidden');
  },

  calculateNewTripCost() {
    apiData()
      .then(data => {
        const userInput = domUpdates.retrieveNewTripData();
        const trip = new Trip(userInput, data.allDestinations);
        const tripID = parseInt(userInput.destinationID)
        const destination = trip.identifyDestination(tripID);
        const total = trip.calculateCost(destination);
        formTotal.innerHTML = total;
    })
  },

  retrieveNewTripData() {
    const formData = {
      "destinationID": formDestination.value,
      "travelers": numTravelers.value,
      "date": formDate.value,
      "duration": formDuration.value,
      "status": "pending",
      "suggestedActivities": []
    }
    return formData;   
  },

  addNewTrip(newTrip) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const currentTraveler = new Traveler(data.currentTraveler);
      const destinationIDUserID = {
        "id": (tripRepo.allTrips.length) + 1,
        "userID": currentTraveler.id
      }
    return postData(newTrip, destinationIDUserID);
    });
  },

  // retrieveNewTripData() {
  //   const formData = {
  //     "destinationID": formDestination.value,
  //     "travelers": numTravelers.value,
  //     "date": formDate.value,
  //     "duration": formDuration.value,
  //     "status": "pending",
  //     "suggestedActivities": []
  //   }
  //   return domUpdates.addNewTrip(formData);   
  // },

  // addNewTrip(newTrip) {
  //   apiData()
  //   .then(data => {
  //     const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
  //     const currentTraveler = new Traveler(data.currentTraveler);
  //     const destinationIDUserID = {
  //       "id": (tripRepo.allTrips.length) + 1,
  //       "userID": currentTraveler.id
  //     }
  //   return postData(newTrip, destinationIDUserID);
  //   });
  // },



  // const newTripData = Object.assign(userInput, {"id": currentTraveler.id})
}

export default domUpdates;



