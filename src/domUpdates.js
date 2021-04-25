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
      let test = tripRepo.calculateYearlyExpenditure(traveler, date)
      total.innerHTML = test
    })
  },

  addPastTrips(userID, date) {
    apiData()
    .then(data => {
      const tripRepo = new TripRepo(data.allTrips, data.allDestinations);
      const pastSection = document.querySelector('#pastTrips');
      pastSection.innerHTML = '';

      let pastTrips = tripRepo.findUserPastTrips(userID, date);
      console.log(pastTrips)

      pastTrips.forEach(trip => {
        pastSection.innerHTML += `
        <p class="destination">${trip.destination}<br><sub class="date">${trip.date}</sub></p>
        `
      })
    }) 
  }

}

export default domUpdates;