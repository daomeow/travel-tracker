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
    const linkDestination = tripArray.map(trip => {
      const findDestination = this.destinationData.find(dest => dest.id === trip.destinationID);
      const newTrip = new Trip(trip, findDestination);
      return newTrip;
    });
    return linkDestination;
  }

  findUserCurrentTrip(userID, date) {
    const currentUserTrips = this.allTrips.filter(trip => {
      return trip.date === date && trip.userID === userID;
    });
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const newObject = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return newObject;
  }

  findUserUpcomingTrips(userID, date) {
    const futureTrips = [];
    
    this.compareDates(this.allTrips.forEach(element => {
      if (this.compareDates(element.date, date)) {
        futureTrips.push(element);
      }
    }));
    const currentUserTrips = futureTrips.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const newObject = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return newObject;
  }

  findUserPendingTrips(userID, date) {
    const pendingTrips = [];
    
    this.compareDates(this.allTrips.forEach(element => {
      if (this.compareDates(element.date, date)) {
        pendingTrips.push(element);
      }
    }));
    const currentUserTrips = pendingTrips.filter(trip => trip.userID === userID &&
      trip.status === 'pending');
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const newObject = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return newObject;
  }

  calculateYearlyExpenditure(userID, date) {
    const year = date.split('/')[0]
    const pastDates = [];
    let totalCost = 0;

    this.compareDates(this.allTrips.forEach(element => {
      if (this.compareDates(element.date, year) && (this.compareDates(date, element.date))) {
        pastDates.push(element);
      }
    }));
    const currentUserTrips = pastDates.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);    
    destinationArray.forEach(trip => totalCost += trip.calculateCost());
    return totalCost;
  }
}

export default TripRepo;
