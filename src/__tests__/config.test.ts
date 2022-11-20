import {
  getConfig,
  configure,
  resetToDefaults,
  configureInternal,
} from '../config';

beforeEach(() => {
  resetToDefaults();
});

test('getConfig() returns existing configuration', () => {
  expect(getConfig().useBreakingChanges).toEqual(false);
  expect(getConfig().asyncUtilTimeout).toEqual(1000);
  expect(getConfig().defaultIncludeHiddenElements).toEqual(true);
});

test('configure() overrides existing config values', () => {
  configure({ asyncUtilTimeout: 5000 });
  configure({ defaultDebugOptions: { message: 'debug message' } });
  expect(getConfig()).toEqual({
    asyncUtilTimeout: 5000,
    defaultDebugOptions: { message: 'debug message' },
    defaultIncludeHiddenElements: true,
    useBreakingChanges: false,
    useLegacyQueries: false,
  });
});

test('resetToDefaults() resets config to defaults', () => {
  configure({
    asyncUtilTimeout: 5000,
    defaultIncludeHiddenElements: false,
    useLegacyQueries: true,
  });
  expect(getConfig().asyncUtilTimeout).toEqual(5000);
  expect(getConfig().defaultIncludeHiddenElements).toEqual(false);
  expect(getConfig().useLegacyQueries).toBe(true);

  resetToDefaults();
  expect(getConfig().asyncUtilTimeout).toEqual(1000);
  expect(getConfig().defaultIncludeHiddenElements).toEqual(true);
  expect(getConfig().useLegacyQueries).toBe(false);
});

test('resetToDefaults() resets internal config to defaults', () => {
  configureInternal({
    useBreakingChanges: true,
  });
  expect(getConfig().useBreakingChanges).toEqual(true);

  resetToDefaults();
  expect(getConfig().useBreakingChanges).toEqual(false);
});

test('configure handles alias option defaultHidden', () => {
  expect(getConfig().defaultIncludeHiddenElements).toEqual(true);

  configure({ defaultHidden: false });
  expect(getConfig().defaultIncludeHiddenElements).toEqual(false);
});
