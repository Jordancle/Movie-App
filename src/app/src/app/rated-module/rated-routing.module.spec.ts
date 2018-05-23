import { RatedRoutingModule } from './rated-routing.module';

describe('RatedRoutingModule', () => {
  let ratedRoutingModule: RatedRoutingModule;

  beforeEach(() => {
    ratedRoutingModule = new RatedRoutingModule();
  });

  it('should create an instance', () => {
    expect(ratedRoutingModule).toBeTruthy();
  });
});
