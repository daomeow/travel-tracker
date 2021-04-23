class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destinationData = destinationData;
  }

  identifyDestination() {
    return this.destinationData.find(trip => trip.id === this.id);
  }

  calculateCost() {
    const destination = this.identifyDestination();
    const total = (destination.estimatedLodgingCostPerDay + 
    destination.estimatedFlightCostPerPerson) * this.travelers;
    return total;
  }
}

export default Trip;