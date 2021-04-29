import './css/base.scss';
import domUpdates from './domUpdates.js';                  
import './images/turing-logo.png'
import './images/login-page.png'
import './images/faces.jpg'
import { apiCalls } from './api-data'

const homeButton = document.getElementById('homeButton');
const formButton = document.getElementById('formButton');
const costButton = document.getElementById('costButton');
const bookTripButton = document.getElementById('postButton');
const logInButton = document.getElementById('logInButton');
const handle = document.querySelector('.handle');
const password = document.querySelector('.password');
const logInPage = document.getElementById('logInPage');
const mainHome = document.querySelector('.main-home');
const logInError = document.querySelector('.login-error');

formButton.addEventListener('click', domUpdates.displayPage);
homeButton.addEventListener('click', domUpdates.displayPage);
bookTripButton.addEventListener('click', domUpdates.addNewTrip);
costButton.addEventListener('click', domUpdates.displayFormErrors);
logInButton.addEventListener('click', validateUserLogIn);

function validateUserLogIn() {
  const travelerID = getCurrentTraveler();
  let curUser = handle.value;
  let uname = curUser.split('traveler')[0] === ''
  let passwd = password.value;
  if (curUser && passwd) {
    if (travelerID > 0 && travelerID < 51 
      && passwd === 'travel2020' && uname) {
        logInPage.classList.toggle('hidden');
        mainHome.classList.toggle('hidden');
        generateFetchData(travelerID); 
      } else {
        logInError.classList.remove('hidden');
      }
  }
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
