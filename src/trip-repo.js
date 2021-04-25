import Trip from "./trip.js";

class TripRepo {
  constructor(tripData, destinationData) {
    this.allTrips = tripData.trips;
    this.destinationData = destinationData.destinations;
  }

  compareDates(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return date1 > date2;
  }

  matchDestinationNames(tripArray) {
    const linkDestination = tripArray.map(trip => {
      const findDestination = this.destinationData.find(dest => dest.id === trip.destinationID);
      const addDestinationKey = {"destinations": findDestination}
      const newTrip = new Trip(trip, addDestinationKey);
      return newTrip;
    });
    return linkDestination;
  }

  createOnlyDateDestination(tripArray, userID) {
    const currentUserTrips = tripArray.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const onlyDateDestination = destinationArray.map(trip => ({'date':trip.date, 'destination':trip.destination.destination}));
    return onlyDateDestination;
  }

  findUserPastTrips(userID, date) {
    const pastTrips = this.allTrips.filter(trip => this.compareDates(date, trip.date));
    return this.createOnlyDateDestination(pastTrips, userID);
  }

  findUserCurrentTrip(userID, date) {
    const currentUserTrips = this.allTrips.filter(trip => trip.date === date);
    return this.createOnlyDateDestination(currentUserTrips, userID);
  }

  findUserUpcomingTrips(userID, date) {
    const futureTrips = this.allTrips.filter(trip => this.compareDates(trip.date, date));
    return this.createOnlyDateDestination(futureTrips, userID);
  }

  findUserPendingTrips(userID, date) {
    const futureTrips = this.allTrips.filter(trip => this.compareDates(trip.date, date));
    const pendingTrips = futureTrips.filter(trip => trip.status === 'pending');
    return this.createOnlyDateDestination(pendingTrips, userID);
  }

  calculateTripCost(trip) {
    const totalLodging = trip.duration * trip.destination.estimatedLodgingCostPerDay; 
    const totalFlightCost = trip.destination.estimatedFlightCostPerPerson * trip.travelers;
    const total = totalLodging + totalFlightCost;
    return total;
  }

  calculateYearlyExpenditure(userID, date) {
    const year = date.split('/')[0];

    const pastTrips = this.allTrips.filter(trip => this.compareDates(date, trip.date) && 
      this.compareDates(trip.date, year));
    const currentUserTrips = pastTrips.filter(trip => trip.userID === userID);
    const destinationArray = this.matchDestinationNames(currentUserTrips);
    const sum = destinationArray.reduce((total, trip) => total += this.calculateTripCost(trip), 0);
    return sum;
  }
}

export default TripRepo;
