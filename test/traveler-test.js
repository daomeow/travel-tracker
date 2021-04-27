import { expect } from 'chai';
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

  it('should be able to identify the traveler based of their ID', () => {
    expect(newTraveler.findCurrentTraveler(1)).to.deep.equal(user1)
  });

  it.skip('should have a user id', () => {
    expect(newTraveler.id).to.equal(1);
  });

  it.skip('should have a user name', () => {
    expect(user1.name).to.equal("Ham Leadbeater");
  });

  it.skip('should have a traveler type', () => {
    expect(user1.travelerType).to.equal("relaxer");
  });

  // beforeEach(() => {
  //   user1 = new Traveler(fakeUsers.travelers[0]);
  // })

  // it('should be an instance of Traveler', () => {
  //   expect(user1).to.be.an.instanceOf(Traveler);
  // });

  // it('should have a user id', () => {
  //   expect(user1.id).to.equal(1);
  // });

  // it('should have a user name', () => {
  //   expect(user1.name).to.equal("Ham Leadbeater");
  // });

  // it('should have a traveler type', () => {
  //   expect(user1.travelerType).to.equal("relaxer");
  // });


});
