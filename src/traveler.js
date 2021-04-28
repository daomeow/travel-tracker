// class Traveler {
//   constructor(travelersData) {
//     this.allTravelers = travelersData.travelers;
//   }

//   findCurrentTraveler(travelerID) {
//     console.log(this.allTravelers)
//     return this.allTravelers.find(user => user.id === travelerID);
//   }
// }

// export default Traveler;


class Traveler {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }
}

export default Traveler;