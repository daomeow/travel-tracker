// import './index.js';  
// import domUpdates from './domUpdates.js'; 

import domUpdates from "./domUpdates";

const travelerID = (Math.floor(Math.random() * 49) + 1);

const displayErrorMessage = (err) => {
  const errorField = document.querySelector('.js-error');
  const message = err.message === 'Failed to fetch' ?
    'Something went wrong. Please check your internet connection' : err.message;
  errorField.innerText = message;
}

const checkForError = response => {
  if (!response.ok) {
      throw new Error('Something went wrong, please try again.');
  } else {
      return response.json();
  }
}

const apiData = () => {
  // console.log(userID)

  const currentTraveler = fetch(`http://localhost:3001/api/v1/travelers/${travelerID}`)
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const allTravelers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err));

  const allTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const allDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err));
    
  return Promise.all([allTravelers, currentTraveler, allTrips, allDestinations])
    .then(data => {
      console.log(data)
        const apiInfo = {};
        apiInfo.allTravelers = data[0];
        apiInfo.currentTraveler = data[1];
        apiInfo.allTrips = data[2];
        apiInfo.allDestinations = data[3];
        return apiInfo;
    })
  .catch(err => displayErrorMessage(err));
};

const postData = (tripRepo, newTrip) => {
  const newTripData = fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify({
      id: newTrip.id, 
      userID: newTrip.userID,
      destinationID: newTrip.destinationID,
      travelers: newTrip.travelers, 
      date: newTrip.date, 
      duration: newTrip.duration, 
      status: newTrip.status, 
      suggestedActivities: newTrip.suggestedActivities
    }),
    headers: {
      "Content-Type": "application/json"
    }    
  })
    .then(response => response.json())
    .then(data => domUpdates.reloadTraveler(travelerID))
    .catch(err => displayErrorMessage(err));
    tripRepo.allTrips.push(newTripData);
};


export {
  apiData,
  postData
};
