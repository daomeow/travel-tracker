export const apiData = () => {
  const displayErrorMessage = (err) => {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' : err.message;
    errorField.innerText = message;
  }

  const travelers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const allTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const allDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 


  return Promise.all([allDestinations, allTrips, travelers])
    .then(data => {
        let apiInfo = {};
        apiInfo.allDestinations = data[0];
        apiInfo.allTrips = data[1];
        apiInfo.travelers = data[2];
        
        return apiInfo;
    })
    .catch(err => displayErrorMessage(err));

}