import { expect } from 'chai';
import {fakeUsers, fakeTrips, fakeDestinations} from '../src/data/fakeData';
import Traveler from '../src/traveler.js';

describe('Traveler', () => {
  let user1;
  let date;

  beforeEach(() => {
    date = "2020/5/04";
    user1 = new Traveler(fakeUsers[0], fakeTrips, fakeDestinations);
  })

  it('should be an instance of Traveler', () => {
    expect(user1).to.be.an.instanceOf(Traveler);
  });

  it('should have a user id', () => {
    expect(user1.id).to.equal(1);
  });

  it('should have a user name', () => {
    expect(user1.name).to.equal("Ham Leadbeater");
  });

  it('should have a traveler type', () => {
    expect(user1.travelerType).to.equal("relaxer");
  });

  it.skip('should filter past trips', () => {
    expect(user1.findPastTrips(date)).to.equal([
      {"date": "2020/01/19", "name": "Lima, Peru"}
    ]);
  });

  it.skip('should filter present trips', () => {
    expect(user1.findCurrentTrip()).to.equal({"date": "2020/5/04", "name": "Stockholm, Sweden"});
  });

  it.skip('should filter upcoming trips', () => {
    expect(user1.findUpcomingTrips()).to.equal([
      {"date": "2020/10/22", "name": "Sydney, Austrailia"}
    ]);
  });

  it.skip('should filter pending trips', () => {
    expect(user1.findPendingTrips()).to.equal([
      {"date": "2020/10/22", "name": "Sydney, Austrailia"}
    ]);
  });

  it.skip('should calculate the total amount spent on trips for the current year', () => {
    expect(user1.calculateAnnualSpent()).to.equal("relaxer");
  });

});
