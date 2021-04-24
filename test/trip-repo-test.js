import { expect } from 'chai';
import {fakeTrips} from '../src/data/fakeData';
import Trip from '../src/trip';
import TripRepo from '../src/trip-repo.js';

describe('Trip Repo', () => {
  let tripRepo;
  let date;

  beforeEach(() => {
    date = "2020/5/04";
    tripRepo = new TripRepo(fakeTrips);
  })

  it('should be an instance of Trip', () => {
    expect(tripRepo).to.be.an.instanceOf(TripRepo);
  });

  it('should have an array of all the trips', () => {
    expect(tripRepo.allTrips).to.be.equal([
      {
        "id": 1,
        "userID": 1,
        "destinationID": 1,
        "travelers": 2,
        "date": "2020/01/19",
        "duration": 3,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 1,
        "destinationID": 2,
        "travelers": 5,
        "date": "2020/5/04",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 3,
        "userID": 1,
        "destinationID": 3,
        "travelers": 4,
        "date": "2020/10/22",
        "duration": 2,
        "status": "pending",
        "suggestedActivities": []
      }
    ]);
  });

  it.skip('should find all past trips based off a user\'s ID', () => {
    expect(user1.findUserPastTrips(1, date)).to.equal([
      {"date": "2020/01/19", "name": "Lima, Peru"}
    ]);
  });

  it.skip('should filter present trips', () => {
    expect(user1.findUserCurrentTrip(1, date)).to.equal({"date": "2020/5/04", "name": "Stockholm, Sweden"});
  });

  it.skip('should filter upcoming trips', () => {
    expect(user1.findUserUpcomingTrips(1, date)).to.equal([
      {"date": "2020/10/22", "name": "Sydney, Austrailia"}
    ]);
  });

  it.skip('should filter pending trips', () => {
    expect(user1.findUserPendingTrips(1)).to.equal([
      {"date": "2020/10/22", "name": "Sydney, Austrailia"}
    ]);
  });

  it.skip('should calculate the total amount spent on trips for the current year', () => {
    expect(user1.calculateUserAnnualSpent(1)).to.equal("relaxer");
  });
});