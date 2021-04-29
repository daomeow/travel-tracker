import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import Trip from './trip.js'; 
import { apiCalls } from './api-data'

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
const homeButton = document.querySelector('.home');
const addTripButton = document.querySelector('.document');

let allTravelersData, allTripsData,allDestinationsData, tripRepo, currentTravelerData, formData, currentTrip ;


const domUpdates = {
  
  assignData: (data) => {
    allTravelersData = data[0];
    allTripsData = data[1];
    allDestinationsData = data[2];
    currentTravelerData = data[3];
    tripRepo = new TripRepo(allTripsData, allDestinationsData)
    currentTrip = new Trip(allTripsData, allDestinationsData)
    domUpdates.totalSpent()
    domUpdates.displayAllTrips(currentTravelerData.id, currentDate)
    domUpdates.greetUser(currentTravelerData)
    
  },

  totalSpent: () => {
    const sum = tripRepo.calculateYearlyExpenditure(currentTravelerData.id, currentDate);
    annualTotal.innerHTML = sum;
},

  displayPage: () => {
    mainHome.classList.toggle('hidden');
    userForm.classList.toggle('hidden');
    domUpdates.clearForm();
  },

  greetUser(traveler) {
    userName.innerHTML = traveler.name.split(' ')[0]; 
  },

  displayAllTrips(userID, date) {
        const pastTrips = tripRepo.findUserPastTrips(userID, date);
        const currentTrip = tripRepo.findUserCurrentTrip(userID, date);
        const upcomingTrips = tripRepo.findUserUpcomingTrips(userID, date);
        const pendingTrips = tripRepo.findUserPendingTrips(userID, date);
        pastSection.innerHTML = '';
        currentTripSection.innerHTML = ``;
        upcomingTripSection.innerHTML = ``;
        pendingTripSection.innerHTML = ``;
        pastTrips.map(trip => {
          pastSection.innerHTML += `
            <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
          `
        });
    
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
    
        pendingTrips.map(trip => {
          pendingTripSection.innerHTML += `
            <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
          `
        });
        homeButton.classList.remove('hidden');
        addTripButton.classList.remove('hidden');      
  },
    
  displayPage() {
    mainHome.classList.toggle('hidden');
    userForm.classList.toggle('hidden');
  },

  retrieveNewTripData() {
    formData = {
      "id": new Date().valueOf(),
      "userID": currentTravelerData.id,
      "destinationID": Number(formDestination.value),
      "travelers": Number(numTravelers.value),
      "date": formDate.value,
      "duration": formDuration.value,
      "status": "pending",
      "suggestedActivities": []
    }
    return formData;   
  },
   
  addNewTrip: () => {
    const inputData = domUpdates.retrieveNewTripData();
    mainHome.classList.toggle('hidden');
    userForm.classList.toggle('hidden');
    apiCalls.postData(tripRepo, inputData, currentTravelerData.id, currentDate);
    allTripsData.push(inputData);
    tripRepo.findUserPendingTrips()

  },



  calculateNewTripCost() {
    const userInput = domUpdates.retrieveNewTripData();
    const tripID = userInput.destinationID
    const destination = currentTrip.identifyDestination(allDestinationsData,tripID);
    const total = currentTrip.calculateCost(destination, userInput.duration, userInput.travelers);
    formTotal.innerHTML = total;
    estimatedCost.classList.remove('hidden');
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

}

export default domUpdates;




