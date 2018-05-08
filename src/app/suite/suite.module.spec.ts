import { SuiteModule } from './suite.module';

describe('SuiteModule', () => {
  let suiteModule: SuiteModule;

  beforeEach(() => {
    suiteModule = new SuiteModule();
  });

  it('should create an instance', () => {
    expect(suiteModule).toBeTruthy();
  });
});
