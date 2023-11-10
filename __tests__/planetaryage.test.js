import PlanetaryAge from "../src/js/planetaryage.js";

describe("PlanetaryAge", () => {
    let planetary
    
    beforeEach(() => {
        planetary = new PlanetaryAge(6, 27, 1998);
    });
    
    test("Should create an object that accepts and stores a day, month and year of birth from a user", () => {
        expect(planetary.dob).toEqual([6, 27, 1998]);
    });

    test("Should create a key that stores the users present age in earth days & years based off 'dob'", () => {
        planetary.earthAge()
        expect(planetary.earthAgeDays).toEqual(9267);
        expect(planetary.earthAgeYears).toEqual(25);
    });

    test("Should add a key to the object with an age in mercurial years", () => {
        planetary.solarSystemAge();
        expect(planetary.mercurialAgeYears).toEqual(105);
    });
});
