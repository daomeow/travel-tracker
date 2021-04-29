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

  identifyDestination(destinationData, tripID) {
    console.log(this.destination)
    return destinationData.find(location => location.id === tripID);
  }

  calculateCost(location, duration, travelers) {
    const totalLodging = duration * location.estimatedLodgingCostPerDay; 
    const totalFlightCost = location.estimatedFlightCostPerPerson * travelers;
    const total = (totalLodging + totalFlightCost) * 1.1;
    return total.toFixed(2);
  }
}

export default Trip;