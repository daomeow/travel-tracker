class Traveler {
  constructor(travelersData) {
    this.allTravelers = travelersData.travelers;
    // this.currentTravelerData = this.findCurrentTraveler();
    // console.log(this.currentTravelerData)
    // this.id = this.currentTravelerData.id;
    // this.name = this.findCurrentTraveler().name;
    // this.travelerType = this.findCurrentTraveler().travelerType;
  }

  findCurrentTraveler(travelerID) {
    return this.allTravelers.find(user => user.id === travelerID);
  }
}

export default Traveler;