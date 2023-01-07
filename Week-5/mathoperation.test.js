let mathOperations = require("./mathoperation")
test("Sum of two no.", () => {
    expect(mathOperations.sum(3, 3)).toBe(6)
});
test("Diff of two no.", () => {
    expect(mathOperations.diff(3, 3)).toBe(0)
});
test("Product of two no.", () => {
    expect(mathOperations.product(3, 3)).toBe(9)
});