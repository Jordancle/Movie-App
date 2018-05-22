import { HomeModuleModule } from './home-module.module';

describe('HomeModuleModule', () => {
  let homeModuleModule: HomeModuleModule;

  beforeEach(() => {
    homeModuleModule = new HomeModuleModule();
  });

  it('should create an instance', () => {
    expect(homeModuleModule).toBeTruthy();
  });
});