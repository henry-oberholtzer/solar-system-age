import PlanetaryAge from "../src/js/planetaryage.js";
import timekeeper from 'timekeeper';

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
    beforeAll(() => {
        timekeeper.freeze(new Date('2023-11-11'));
        mercury = new PlanetaryAge(6, 27, 1998);
        venus = new PlanetaryAge(6, 27, 1998, "venus", 100, 1);
        moon = new PlanetaryAge(6, 27, 1998, "moon", 100, 1);
        mars = new PlanetaryAge(6, 27, 1998, "mars", 100, 1);
        jupiter = new PlanetaryAge(6, 27, 1998, "jupiter", 100, 1);
        saturn = new PlanetaryAge(6, 27, 1998, "saturn", 100, 1);
        uranus = new PlanetaryAge(6, 27, 1998, "uranus", 100, 1);
        neptune = new PlanetaryAge(6, 27, 1998, "neptune", 100, 1);
        pluto = new PlanetaryAge(6, 27, 1998, "pluto", 100, 1);
    });

    afterAll(() => {
        timekeeper.reset();
    });
    
    test("Should create an object that accepts and stores a day, month and year of birth from a user", () => {
        const dateObject = new Date(1998, 5, 27);
        expect(mercury.dob).toEqual(dateObject);
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

    test("Should determine how many years on their chosen planet will have to pass until their chosen earth birthday", () => {
        expect(mercury.yearsUntil()).toEqual(311.29);
        expect(venus.yearsUntil()).toEqual(121.75);
        expect(moon.yearsUntil()).toEqual(77.30);
        expect(mars.yearsUntil()).toEqual(39.87);
        expect(jupiter.yearsUntil()).toEqual(6.32);
        expect(saturn.yearsUntil()).toEqual(2.55);
        expect(uranus.yearsUntil()).toEqual(0.89);
        expect(neptune.yearsUntil()).toEqual(0.46);
        expect(pluto.yearsUntil()).toEqual(0.30);
    });

    test("Should determine determine how many years on their chosen planet have passed since their chosen earth birthday", () => {
        expect(mercury.yearsSince()).toEqual(99.61);
        expect(venus.yearsSince()).toEqual(38.96);
        expect(moon.yearsSince()).toEqual(24.74);
        expect(mars.yearsSince()).toEqual(12.76);
        expect(jupiter.yearsSince()).toEqual(2.02);
        expect(saturn.yearsSince()).toEqual(0.81);
        expect(uranus.yearsSince()).toEqual(0.29);
        expect(neptune.yearsSince()).toEqual(0.15);
        expect(pluto.yearsSince()).toEqual(0.1);
    });
});
