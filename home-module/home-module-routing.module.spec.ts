import { HomeModuleRoutingModule } from './home-module-routing.module';

describe('HomeModuleRoutingModule', () => {
  let homeModuleRoutingModule: HomeModuleRoutingModule;

  beforeEach(() => {
    homeModuleRoutingModule = new HomeModuleRoutingModule();
  });

  it('should create an instance', () => {
    expect(homeModuleRoutingModule).toBeTruthy();
  });
});
