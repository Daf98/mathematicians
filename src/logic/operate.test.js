import operate from './operate';

describe('fuck', () => {
  test('1+1 = 2', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('1-1=0', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });
  test('1x3=3', () => {
    expect(operate(1, 3, 'x')).toBe('3');
  });
  test('25/5=5', () => {
    expect(operate(25, 5, '÷')).toBe('5');
  });
  test('25%5=0', () => {
    expect(operate(25, 5, '%')).toBe('0');
  });
  test('25/0 does not exist', () => {
    expect(operate(25, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('25%0 does not exist', () => {
    expect(operate(25, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
