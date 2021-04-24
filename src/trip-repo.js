import Trip from "./trip.js";

class TripRepo {
  constructor(tripData, destinationData) {
    this.allTrips = tripData;
    this.destinationData = destinationData;;
  }

  compareDates(d1, d2) {
    const date1 = new Date(d1)
    const date2 = new Date(d2);

    return date1 > date2 ? true : false;
  }

  findUserPastTrips(userID, date) {
    const goodDates = [];
    const dateDestinationArray = [];
    
    this.compareDates(this.allTrips.forEach(element => {
      if (this.compareDates(date, element.date)) {
        goodDates.push(element)
      }
    }));
    const currentUserTrips = goodDates.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    destinationArray.forEach(element => {
      dateDestinationArray.push({ 'date' : element.date, 'destination' : element.destination.destination })
    });
    return dateDestinationArray;
  }

  matchDestinationNames(tripArray) {
    const checkArray = [];
    tripArray.forEach(element => {
      const newDestination = this.destinationData.filter(dest => dest.id === element.id);
      const newTrip = new Trip(element, newDestination[0]);
      checkArray.push(newTrip);
    });
    return checkArray;
  }

  // findUserCurrentTrip(userID, date) {
  // }

  // findUserUpcomingTrips(userID, date) {
  // }

  // findUserPendingTrips(userID) {
  // }
}

export default TripRepo;
