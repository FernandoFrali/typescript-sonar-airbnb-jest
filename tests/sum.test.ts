it('simple test with a sum function', () => {
  const sum = (a: number, b: number) => a + b;
  expect(sum(1, 1)).toEqual(2);
 })