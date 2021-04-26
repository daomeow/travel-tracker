const apiData = () => {
  let userID = (Math.floor(Math.random() * 49) + 1);
  let bookedTrip;

  const displayErrorMessage = (err) => {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' : err.message;
    errorField.innerText = message;
  }

  const allTravelers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err));
    
  const currentTraveler = fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
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
        const apiInfo = {};
        apiInfo.allTravelers = data[0];
        apiInfo.currentTraveler = data[1];
        apiInfo.allTrips = data[2];
        apiInfo.allDestinations = data[3];
        return apiInfo;
    })
  .catch(err => displayErrorMessage(err));
};

const addTripData = fetch('http://localhost:3001/api/v1/trips-form', {
  method: 'POST',
  body: JSON.stringify(`{
    id: ${bookedTrip.id}, 
    userID: ${userID},
    destinationID: ${bookedTrip.destinationID},
    travelers: ${bookedTrip.travelers}, 
    date: ${bookedTrip.date}, 
    duration: ${bookedTrip.duration}, 
    status: ${bookedTrip.status}, 
    suggestedActivities: ${bookedTrip.suggestedActivities}
  }`)    
})



export {
  apiData,
  addTripData
};
