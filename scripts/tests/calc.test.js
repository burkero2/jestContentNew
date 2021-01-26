const {addition, minus} = require("../calc");


describe("Calculator", () => {
    describe("Addition function", () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20,22)).toBe(42);
        });
        test('should return 42 for 20 + 22', () => {
            expect(addition(20,22)).toBe(42);
        });
    })

    describe("Minus function", () => {
        test('should return 22 for 42 - 20', () => {
            expect(minus(42,20)).toBe(22);
        });
    })
});




