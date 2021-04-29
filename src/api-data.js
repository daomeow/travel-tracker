import domUpdates from "./domUpdates";
const path = 'http://localhost:3001/api/v1/';



export const apiCalls = {

  displayErrorMessage(err) {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 
      'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' 
      : err.message;
    errorField.innerText = message;
  },

  checkForError(response) {
    if (!response.ok) {
        throw new Error('Something went wrong, please try again.');
    } else {
        return response.json();
    }
  },

  fetchAllData(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => {
        return data[endpath];
      })
      .catch(err => apiCalls.displayErrorMessage(err));
  },

  currentTraveler(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => data)
      .catch(err => apiCalls.displayErrorMessage(err));
  },

  postData(tripRepo, newTrip, id, date) {
    fetch('http://localhost:3001/api/v1/trips', {
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
    .then(data => {
      tripRepo.allTrips.push(data)
      domUpdates.displayAllTrips(id, date)
    })

    .catch(err => apiCalls.displayErrorMessage(err));
  }
}


