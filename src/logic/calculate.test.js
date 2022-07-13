import calculate from '../components/__mocks__/calculate';

describe('fuck', () => {
  test('calculates properly', () => {
    expect(calculate('0', 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
