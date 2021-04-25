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
    this.destination = destination.destinations;
  }

   identifyDestination() {
    return this.destination.find(trip => trip.id === this.tripID);
  }

  calculateCost() {
    const pairedDestination = this.identifyDestination();
    const totalLodging = this.duration * pairedDestination.estimatedLodgingCostPerDay; 
    const totalFlightCost = pairedDestination.estimatedFlightCostPerPerson * this.travelers;
    const total = totalLodging + totalFlightCost;
    return total;
  }
}

export default Trip;