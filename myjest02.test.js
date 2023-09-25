test('0.2 + 0.1 is not 0.3 but its 0.3000000000', () => {
    //donot use .toBe() with floating numbers
    expect(0.2 + 0.1).toBeCloseTo(0.3);
});

describe('basic test', () => {
    test('toHaveLength()', () => {
        expect([1, 2, 3]).toHaveLength(3);
        expect('abc').toHaveLength(3);
        expect('').not.toHaveLength(5);
    });
});