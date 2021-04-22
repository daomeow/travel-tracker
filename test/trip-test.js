import chai from 'chai';
const expect = chai.expect;
// import { expect, use } from 'chai';
import {fakeTrips, fakeDestinations} from '../src/data/fakeData';

describe('Trip', () => {
  const trip1;
  
  beforeEach(() => {
    trip1 = new Trip(fakeTrips[0], fakeDestinations);
  })

  it.skip('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

  it.skip('should have a unique id', () => {
    expect(trip1.id).to.be.equal(1);
  });

  it.skip('should have an associated traveler\'s ID', () => {
    expect(trip1.userID).to.be.equal(1);
  });

  it.skip('should have an associated destination\'s ID', () => {
    expect(trip1.destinationID).to.be.equal(1);
  });

  it.skip('should have the number of travelers on this trip', () => {
    expect(trip1.travelers).to.be.equal(2);
  });

  it.skip('should have a start date', () => {
    expect(trip1.date).to.be.equal('2019/09/16');
  });

  it.skip('should have a duration length of this trip', () => {
    expect(trip1.duration).to.be.equal(8);
  });

  it.skip('should have a status of approval', () => {
    expect(trip1.status).to.be.equal('approved');
  });

  it.skip('should have suggested activities to do', () => {
    expect(trip1.suggestedActivities).to.be.equal([]);
  });
});
