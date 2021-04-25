import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import {apiData} from './data/api-data.js';

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

  addPastTrips(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const pastSection = document.querySelector('#pastTrips');
      let pastTrips = tripRepo.findUserPastTrips(userID, date);

      pastTrips.forEach(trip => {
        pastSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      })
    }) 
  },

  addCurrentTrip(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const currentTripSection = document.querySelector('#currentTrip');
      let currentTrip = tripRepo.findUserCurrentTrip(userID, date);
      // ADD MSG: YOU ARE CURRENTLY NOT ON A TRIP TODAY (DATE)
      currentTrip.forEach(trip => {
        currentTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      })
    }) 
  },

  addUpcomingTrips(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const upcomingTripSection = document.querySelector('#upcomingTrips');
      let upcomingTrips = tripRepo.findUserUpcomingTrips(userID, date);
      
      upcomingTrips.forEach(trip => {
        upcomingTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      })
    }) 
  },

  addPendingTrips(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const pendingTripSection = document.querySelector('#pendingTrips');
      let pendingTrips = tripRepo.findUserPendingTrips(userID, date);
      // ADD MSG: YOU ARE CURRENTLY HAVE NO UPCOMING PENDING TRIPS
      pendingTrips.forEach(trip => {
        pendingTripSection.innerHTML += `
          <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      })
    }) 
  },
}

export default domUpdates;



