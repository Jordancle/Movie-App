import { SearchModuleModule } from './search-module.module';

describe('SearchModuleModule', () => {
  let searchModuleModule: SearchModuleModule;

  beforeEach(() => {
    searchModuleModule = new SearchModuleModule();
  });

  it('should create an instance', () => {
    expect(searchModuleModule).toBeTruthy();
  });
});
