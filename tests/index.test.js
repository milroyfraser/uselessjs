import { mrp } from './../src/index'

test('it calculates maximum retail price', () => {
    expect(mrp(1, 2, 3, 4)).toBe(10);
});
