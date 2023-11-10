export default class PlanetaryAge {
    constructor(month, day, year, planet = "mercury") {
        this.dob = [month, day, year];
        this.earthAgeDays = () => {
            const birthday = new Date(
                this.dob[2],
                this.dob[0] - 1,
                this.dob[1]
            );
            const nowMS = Date.now();
            const birthdayMS = birthday[Symbol.toPrimitive]("number");
            return Math.round((nowMS - birthdayMS) / (1000 * 60 * 60 * 24));
        };
        this.earthAgeYears = () => Math.round(this.earthAgeDays() / 364.25);
        this.solarSystemAge = () => {
            const planets = {
                mercury: 88,
                venus: 225,
                moon: 354.36,
                mars: 687,
                jupiter: 4332.59,
                saturn: 10756,
                uranus: 30687,
                neptune: 60190,
                pluto: 90650,
            };
            return (
                Math.round((this.earthAgeDays() / planets[planet]) * 100) / 100
            );
        };
    }
}
