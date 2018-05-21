import { SearchModuleRoutingModule } from './search-module-routing.module';

describe('SearchModuleRoutingModule', () => {
  let searchModuleRoutingModule: SearchModuleRoutingModule;

  beforeEach(() => {
    searchModuleRoutingModule = new SearchModuleRoutingModule();
  });

  it('should create an instance', () => {
    expect(searchModuleRoutingModule).toBeTruthy();
  });
});
