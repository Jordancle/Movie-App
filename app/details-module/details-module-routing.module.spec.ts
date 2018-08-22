import { DetailsModuleRoutingModule } from './details-module-routing.module';

describe('DetailsModuleRoutingModule', () => {
  let detailsModuleRoutingModule: DetailsModuleRoutingModule;

  beforeEach(() => {
    detailsModuleRoutingModule = new DetailsModuleRoutingModule();
  });

  it('should create an instance', () => {
    expect(detailsModuleRoutingModule).toBeTruthy();
  });
});
