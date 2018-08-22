import { RatedModule } from './rated.module';

describe('RatedModule', () => {
  let ratedModule: RatedModule;

  beforeEach(() => {
    ratedModule = new RatedModule();
  });

  it('should create an instance', () => {
    expect(ratedModule).toBeTruthy();
  });
});
