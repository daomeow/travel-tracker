class Traveler {
  constructor(travelersData) {
    this.allTravelers = travelersData.travelers;
  }

  findCurrentTraveler(travelerID) {
    return this.allTravelers.find(user => user.id === travelerID);
  }
}

export default Traveler;