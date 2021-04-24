import Trip from "./trip";

class Traveler {
  constructor(userData, tripData, destinationData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }
}

export default Traveler;