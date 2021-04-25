import { expect } from 'chai';
import {fakeUsers} from '../src/data/fakeData';
import TravelerRepo from '../src/traveler-repo.js';

describe('Traveler Repo', () => {
  let travelerRepo;

  beforeEach(() => {
    travelerRepo = new TravelerRepo(fakeUsers.travelers);
  });

  it('should be an instance of TravelerRepo', () => {
    expect(travelerRepo).to.be.an.instanceOf(TravelerRepo);
  });
  
  it('should have an array of travelers', () => {
    expect(travelerRepo.travelers).to.deep.equal([
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      },
      {
        "id": 2,
        "name": "Rachael Vaughten",
        "travelerType": "thrill-seeker"
      },
      {
        "id": 3,
        "name": "Sibby Dawidowitsch",
        "travelerType": "shopper"
      }
    ]);
  });
});
