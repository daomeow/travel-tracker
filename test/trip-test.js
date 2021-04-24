import { expect } from 'chai';
import {fakeTrips, fakeDestinations} from '../src/data/fakeData';
import Trip from '../src/trip.js';

describe('Trip', () => {
  let trip1;

  beforeEach(() => {
    trip1 = new Trip(fakeTrips[0], fakeDestinations[0]);
  })

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

  it('should have a unique id', () => {
    expect(trip1.tripID).to.be.equal(1);
  });

  it('should have an associated traveler\'s ID', () => {
    expect(trip1.userID).to.be.equal(1);
  });

  it('should have an associated destination\'s ID', () => {
    expect(trip1.destinationID).to.be.equal(1);
  });

  it('should have the number of travelers on this trip', () => {
    expect(trip1.travelers).to.be.equal(2);
  });

  it('should have a start date', () => {
    expect(trip1.date).to.be.equal("2020/01/19");
  });

  it('should have a duration length of this trip', () => {
    expect(trip1.duration).to.be.equal(3);
  });

  it('should have a status of approval', () => {
    expect(trip1.status).to.be.equal('approved');
  });

  it('should have suggested activities to do', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
  });

  it.skip('should identify the destionation', () => {
    expect(trip1.identifyDestination()).to.deep.equal(  {
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    });
  });

  it('should calculate the total cost of the trip', () => {
    expect(trip1.calculateCost()).to.be.equal(1010);
  });
});
