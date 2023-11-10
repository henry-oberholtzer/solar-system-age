import PlanetaryAge from "../src/js/planetaryage.js";

describe("PlanetaryAge", () => {
    test("Should create an object that accepts and stores a day, month and year of birth from a user", () => {
        const planetary = PlanetaryAge(6, 27, 1998);
        expect(planetary.dob).toEqual([6, 27, 1998]);
    });
});
