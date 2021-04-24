import { expect } from 'chai';
import {fakeDestinations, fakeTrips} from '../src/data/fakeData';
import Trip from '../src/trip.js';
import TripRepo from '../src/trip-repo.js';

describe('Trip Repo', () => {
  let tripRepo;
  let date;

  beforeEach(() => {
    date = "2020/5/04";
    tripRepo = new TripRepo(fakeTrips, fakeDestinations);
  })

  it('should be an instance of Trip', () => {
    expect(tripRepo).to.be.an.instanceOf(TripRepo);
  });

  it('should have an array of all the trips', () => {
    expect(tripRepo.allTrips).to.deep.equal([
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
      },
      {
        "id": 4,
        "userID": 2,
        "destinationID": 3,
        "travelers": 4,
        "date": "2019/10/22",
        "duration": 2,
        "status": "pending",
        "suggestedActivities": []
      },
      {
        "id": 5,
        "userID": 2,
        "destinationID": 2,
        "travelers": 5,
        "date": "2020/5/04",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 6,
        "userID": 2,
        "destinationID": 3,
        "travelers": 4,
        "date": "2020/10/22",
        "duration": 2,
        "status": "pending",
        "suggestedActivities": []
      },
      {
        "id": 7,
        "userID": 1,
        "destinationID": 2,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 8,
        "userID": 1,
        "destinationID": 4,
        "travelers": 4,
        "date": "2020/01/24",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 9,
        "userID": 1,
        "destinationID": 5,
        "travelers": 4,
        "date": "2019/05/04",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      }
    ]);
  });

  it('should find all past trips based off a user\'s ID', () => {
    expect(tripRepo.findUserPastTrips(1, date)).to.deep.equal([
      {"date": "2020/01/19", "destination": "Lima, Peru"},
      {"date": "2020/01/24", "destination": "Tokyo, Japan"},
      {"date": "2019/05/04", "destination": "Jakarta, Indonesia"}
    ]);
  });

  it('should filter present trips', () => {
    expect(tripRepo.findUserCurrentTrip(1, date)).to.deep.equal([
      {"date": "2020/5/04", "destination": "Stockholm, Sweden"}
    ]);
  });

  it('should filter upcoming trips', () => {
    expect(tripRepo.findUserUpcomingTrips(1, date)).to.deep.equal([
      {"date": "2020/10/22", "destination": "Sydney, Austrailia"},
      {"date": "2020/05/22", "destination": "Stockholm, Sweden"}
    ]);
  });

  it.only('should filter pending trips', () => {
    expect(tripRepo.findUserPendingTrips(1, date)).to.deep.equal([
      {"date": "2020/10/22", "destination": "Sydney, Austrailia"}
    ]);
  });

  it('should calculate the total amount spent on trips for the current year', () => {
    expect(tripRepo.calculateYearlyExpenditure(1, date)).to.equal(5260);
  });
});