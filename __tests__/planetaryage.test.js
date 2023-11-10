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
        const EarthAge = new PlanetaryAge(6, 27, 1998);
        EarthAge.earthAge();
        EarthAge.solarSystemAge();
        expect(planetary.mercurialAgeYears).toEqual(105);
        expect(EarthAge.mercurialAgeYears).toEqual(105);
    });

    test("Should add keys to the object container all other planetary ages in years", () => {
        planetary.solarSystemAge();
        const EarthAge = new PlanetaryAge(6, 27, 1998);
        EarthAge.earthAge();
        EarthAge.solarSystemAge();
        expect(planetary.venusianAgeYears).toEqual(41);
        expect(planetary.martianAgeYears).toEqual(13);
        expect(planetary.jovianAgeYears).toEqual(2.14);
        expect(planetary.saturnianAgeYears).toEqual(0.86);
        expect(planetary.uranianAgeYears).toEqual(0.30);
        expect(planetary.neptunianAgeYears).toEqual(0.15);
        expect(planetary.plutonianAgeYears).toEqual(0.10);
        expect(planetary.lunarAgeYears).toEqual(26);
        expect(EarthAge.venusianAgeYears).toEqual(41);
        expect(EarthAge.martianAgeYears).toEqual(13);
        expect(EarthAge.jovianAgeYears).toEqual(2.14);
        expect(EarthAge.saturnianAgeYears).toEqual(0.86);
        expect(EarthAge.uranianAgeYears).toEqual(0.30);
        expect(EarthAge.neptunianAgeYears).toEqual(0.15);
        expect(EarthAge.plutonianAgeYears).toEqual(0.10);
        expect(EarthAge.lunarAgeYears).toEqual(26);
    })
});
