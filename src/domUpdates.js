import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import {apiData} from './data/api-data.js';

const currentTripSection = document.querySelector('#currentTrip');
const pastSection = document.querySelector('#pastTrips');
const pendingTripSection = document.querySelector('#pendingTrips');
const upcomingTripSection = document.querySelector('#upcomingTrips');

const navButtons = document.querySelectorAll('#nav');
const mainHome = document.querySelector('.main-home');
const userForm = document.querySelector('.user-form');

const domUpdates = {
  greetUser(traveler) {
    const userName = document.querySelector('#userName');
    userName.innerHTML = traveler.name.split(' ')[0]; 
  },

  totalSpent(traveler, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const total = document.querySelector('#totalSpent');
      let sum = tripRepo.calculateYearlyExpenditure(traveler, date);
      total.innerHTML = sum;
    })
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
}

export default domUpdates;



