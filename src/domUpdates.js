import TravelerRepo from './traveler-repo.js';
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
const formErrors = document.querySelectorAll('.form-message');
const dateError = document.querySelector('.date-message');
const durationError = document.querySelector('.duration-message');
const numberOfTravelersError = document.querySelector('.num-travelers-message');
const destinationError = document.querySelector('.destination-message');
const userName = document.getElementById('userName');

const domUpdates = {
  greetUser(traveler) {
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
        estimatedCost.classList.toggle('hidden');
      })
  },

  retrieveNewTripData() {
    const formData = {
      "destinationID": Number(formDestination.value),
      "travelers": numTravelers.value,
      "date": formDate.value,
      "duration": formDuration.value,
      "status": "pending",
      "suggestedActivities": []
    }
    return formData;   
  },

  addNewTrip() {
    apiData()
    .then(data => {
      console.log(data)
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const currentTraveler = new Traveler(data.currentTraveler);
      const formData = domUpdates.retrieveNewTripData();
      const destinationIDUserID = {
        "id": (tripRepo.allTrips.length) + 1,
        "userID": Number(currentTraveler.id)
      };
      const allTripData = {
        ...formData,
        ...destinationIDUserID
      };
      console.log(allTripData)
    return postData(tripRepo, allTripData);
    });
    mainHome.classList.toggle('hidden');
    userForm.classList.toggle('hidden');
  },

  validateUserLogIn() {
    const travelerID = domUpdates.getCurrentTraveler();
    if (password.value === 'travel2020' && (!isNaN(travelerID))) {
      logInPage.classList.toggle('hidden');
      mainHome.classList.toggle('hidden');
    } else if (handle.value === "" || password === "" || password !== 'travel2020') {
      logInError.classList.remove('hidden');
    }
  },

  getCurrentTraveler() {
    const userInput = handle.value.split(/([0-9]+)/);
    const travelerID = parseInt(userInput[1]);
    return travelerID;
  },

  clearLogInError(event) {
    if (event.keyCode === 8) {
      logInError.classList.add('hidden');
    }
  },

  displayFormErrors() {
    if (formDate.value === "") {
      dateError.classList.remove('hidden');
      return true;
    } else if (formDuration.value === "") {
      durationError.classList.remove('hidden');
      return true;
    } else if (numTravelers.value === "") {
      numberOfTravelersError.classList.remove('hidden');
      return true;
    } else if (formDestination.value === "") {
      destinationError.classList.remove('hidden');
    } else {
      domUpdates.calculateNewTripCost()
    }
  },

  reloadTraveler(userID) {
    apiData()
    .then(data => {
      const newTraveler = new Traveler(data.allTravelers);
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const total = document.querySelector('#totalSpent');
      const sum = tripRepo.calculateYearlyExpenditure(userID, currentDate);
      total.innerHTML = sum;

      const traveler = newTraveler.findCurrentTraveler(userID);
      // const traveler = travelerInfo.name;


      userName.innerHTML = traveler.name.split(' ')[0]; 
    })
  }

}

export default domUpdates;



