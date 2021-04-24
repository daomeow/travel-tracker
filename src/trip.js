class Trip {
  constructor(tripData, destination) {
    this.tripID = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destination = destination;
  }

  // identifyDestination() {
  //   return this.destinationData.find(trip => trip.id === this.tripID);
  // }

  calculateCost() {
    // const destination = this.identifyDestination();
    const totalLodging = this.duration * this.destination.estimatedLodgingCostPerDay; 
    const totalFlightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const total = totalLodging + totalFlightCost;
    return total;
  }
}

export default Trip;