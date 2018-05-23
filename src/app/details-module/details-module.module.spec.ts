import { DetailsModuleModule } from './details-module.module';

describe('DetailsModuleModule', () => {
  let detailsModuleModule: DetailsModuleModule;

  beforeEach(() => {
    detailsModuleModule = new DetailsModuleModule();
  });

  it('should create an instance', () => {
    expect(detailsModuleModule).toBeTruthy();
  });
});
