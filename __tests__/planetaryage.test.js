import PlanetaryAge from "../src/js/planetaryage.js";

describe("PlanetaryAge", () => {
    let mercury
    let venus
    let moon
    let mars
    let jupiter
    let saturn
    let uranus
    let neptune
    let pluto
    beforeEach(() => {
        mercury = new PlanetaryAge(6, 27, 1998);
        venus = new PlanetaryAge(6, 27, 1998, "venus");
        moon = new PlanetaryAge(6, 27, 1998, "moon");
        mars = new PlanetaryAge(6, 27, 1998, "mars");
        jupiter = new PlanetaryAge(6, 27, 1998, "jupiter");
        saturn = new PlanetaryAge(6, 27, 1998, "saturn");
        uranus = new PlanetaryAge(6, 27, 1998, "uranus");
        neptune = new PlanetaryAge(6, 27, 1998, "neptune");
        pluto = new PlanetaryAge(6, 27, 1998, "pluto");
    });
    
    test("Should create an object that accepts and stores a day, month and year of birth from a user", () => {
        expect(mercury.dob).toEqual([6, 27, 1998]);
    });

    test("Should create a key that stores the users present age in earth days & years based off 'dob'", () => {
        expect(mercury.earthAgeDays()).toEqual(9268);
        expect(mercury.earthAgeYears()).toEqual(25);
    });

    test("Should add a key to the object with an age in mercurial years", () => {
        expect(mercury.solarSystemAge()).toEqual(105.32);
    });

    test("Should add keys to the object container all other planetary ages in years", () => {
        expect(venus.solarSystemAge()).toEqual(41.19);
        expect(moon.solarSystemAge()).toEqual(26.15);
        expect(mars.solarSystemAge()).toEqual(13.49);
        expect(jupiter.solarSystemAge()).toEqual(2.14);
        expect(saturn.solarSystemAge()).toEqual(0.86);
        expect(uranus.solarSystemAge()).toEqual(0.30);
        expect(neptune.solarSystemAge()).toEqual(0.15);
        expect(pluto.solarSystemAge()).toEqual(0.10);
    });
});
