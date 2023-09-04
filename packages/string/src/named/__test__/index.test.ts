import {
  humpToDashNamed,
  dashToBigHumpNamed,
  dashToSmallHumpNamed,
  bigHumpToSmallHumpNamed,
  smallHumpToBigHumpNamed,
  getNamedTypeByString,
  transformNamedToDashNamed,
  transformNamedToBigHumpNamed,
  transformNamedToSmallHumpNamed,
  NAMED_TYPE
} from '..';

describe('Name transformation utilities', () => {
  test('humpToDashNamed', () => {
    expect(humpToDashNamed('testName')).toBe('test-name');
  });

  test('dashToBigHumpNamed', () => {
    expect(dashToBigHumpNamed('test-name')).toBe('TestName');
  });

  test('dashToSmallHumpNamed', () => {
    expect(dashToSmallHumpNamed('test-name')).toBe('testName');
  });

  test('bigHumpToSmallHumpNamed', () => {
    expect(bigHumpToSmallHumpNamed('TestName')).toBe('testName');
  });

  test('smallHumpToBigHumpNamed', () => {
    expect(smallHumpToBigHumpNamed('testName')).toBe('TestName');
  });

  test('getNamedTypeByString', () => {
    expect(getNamedTypeByString('test-name')).toBe(NAMED_TYPE['dash-named']);
    expect(getNamedTypeByString('TestName')).toBe(NAMED_TYPE.BigHumpNamed);
    expect(getNamedTypeByString('testName')).toBe(NAMED_TYPE.smallHumpNamed);
    expect(getNamedTypeByString('')).toBeUndefined();
  });

  test('transformNamedToDashNamed', () => {
    expect(transformNamedToDashNamed('TestName')).toBe('test-name');
  });

  test('transformNamedToBigHumpNamed', () => {
    expect(transformNamedToBigHumpNamed('test-name')).toBe('TestName');
  });

  test('transformNamedToSmallHumpNamed', () => {
    expect(transformNamedToSmallHumpNamed('TestName')).toBe('testName');
  });
});
