import Trip from "./trip.js";

class TripRepo {
  constructor(tripData, destinationData) {
    this.allTrips = tripData;
    this.destinationData = destinationData;
  }

  compareDates(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return date1 > date2 ? true : false;
  }

  findUserPastTrips(userID, date) {
    const pastDates = [];
    
    this.compareDates(this.allTrips.forEach(element => {
      if (this.compareDates(date, element.date)) {
        pastDates.push(element);
      }
    }));

    // const check = this.compareDates(this.allTrips.filter(element => {
    //   if (this.compareDates(date, element.date)) {
    //     console.log(element)
    //     return element;
    //   } 
    // }));

    const currentUserTrips = pastDates.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const newObject = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return newObject;
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

  findUserCurrentTrip(userID, date) {
    const currentUserTrips = this.allTrips.filter(trip => {
      return trip.date === date && trip.userID === userID;
    });
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const newObject = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return newObject;
  }

  // findUserUpcomingTrips(userID, date) {
  // }

  // findUserPendingTrips(userID) {
  // }
}

export default TripRepo;
