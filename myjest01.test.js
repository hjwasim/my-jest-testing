const add = require("./sum");

//Expect - Modifiers - Matchers

test('adds 1 + 2 to equal 3', () => {
    //expect(value)
    //The expect function is used every time you want to test a value.
    //comes along with a "matcher" [toBe,...] function to assert something about a value.
    expect(add(1, 2)).toBe(3);
});

// 3 modifiers -> .not., .resolves., .reject.

test('adds 1 + 2 is not equal 5', () => {
    //.not.
    expect(add(1, 2)).not.toBe(5);
});

test('resolves to lemon', () => {
    // make sure to add a return statement
    return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

const can = {
    name: 'pamplemousse',
    ounces: 12,
};

describe('the can', () => {
    test('has 12 ounces', () => {
        expect(can.ounces).toBe(12);
    });

    test('has a sophisticated name', () => {
        expect(can.name).toBe('pamplemousse');
    });
});
