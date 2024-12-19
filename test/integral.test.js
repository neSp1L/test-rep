const assert = require("assert");
const integrate = require("../index");

describe("integrate", () => {
    it("should calculate the integral of x^2 from 0 to 1", () => {
        const fn = (x) => x ** 2;
        const result = integrate(fn, 0, 1, 1000);
        assert(Math.abs(result - 1 / 3) < 0.001);
    });

    it("should calculate the integral of sin(x) from 0 to π", () => {
        const fn = Math.sin;
        const result = integrate(fn, 0, Math.PI, 1000);
        assert(Math.abs(result - 2) < 0.001);
    });

    it("should throw an error if a >= b", () => {
        assert.throws(() => integrate((x) => x, 1, 0), /Нижний предел должен быть меньше верхнего/);
    });

    it("should throw an error if n <= 0", () => {
        assert.throws(() => integrate((x) => x, 0, 1, 0), /Число разбиений должно быть положительным/);
    });
});
