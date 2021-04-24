import TravelerRepo from './traveler-repo.js';
import Traveler from './traveler.js';
import TripRepo from './trip-repo.js';
import {apiData} from './data/api-data.js';

const domUpdates = {
  greetUser(traveler) {
    const userName = document.querySelector('#userName');
    userName.innerHTML = traveler.name.split(' ')[0] + ' ' + traveler.name.split(' ')[1][0]; 
  }
}

export default domUpdates;