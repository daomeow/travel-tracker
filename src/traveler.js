import Trip from "./trip";

class Traveler {
  constructor(userData, tripData, destinationData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
    // this.userTrips = 
    
  }

  //method for all trips of just that user
  findPastTrips(date) {
  
  }

  findCurrentTrip() {

  }

  findUpcomingTrips() {

  }
}

// Methods: filter trip ( past, present, upcoming and pending) >> Total amt spent on trips this year + 10% agent fee 

export default Traveler;