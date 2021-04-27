import {expect} from 'chai';
import {fakeUsers} from '../src/data/fakeData';
import Traveler from '../src/traveler.js';

describe('Traveler', () => {
  let user1, newTraveler;


  beforeEach(() => {
    user1 = fakeUsers.travelers[0]
    newTraveler = new Traveler(fakeUsers);
  })

  it('should be an instance of Traveler', () => {
    expect(newTraveler).to.be.an.instanceOf(Traveler);
  });
  
  it('should contain all the travelers', () => {
    expect(newTraveler.allTravelers).to.deep.equal(fakeUsers.travelers);
  });

  it('should be able to identify the traveler based of their ID', () => {
    expect(newTraveler.findCurrentTraveler(1)).to.deep.equal(user1)
  });
});
