export default class PlanetaryAge {
    constructor(
        month,
        day,
        year,
        planet = "mercury",
        birthdayFuture = 100,
        birthdayPast = 1
    ) {
        this.dob = new Date(year, month - 1, day);
        this.planetChoice = planet;
        this.birthdayFuture = birthdayFuture;
        this.birthdayPast = birthdayPast;
        this.earthAgeDays = () => {
            const nowMS = Date.now();
            const birthdayMS = this.dob[Symbol.toPrimitive]("number");
            return Math.round((nowMS - birthdayMS) / (1000 * 60 * 60 * 24));
        };
        this.earthAgeYears = () => Math.round(this.earthAgeDays() / 365.25);
        this.planets = {
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
        this.solarSystemAge = () =>
            Math.round(
                (this.earthAgeDays() / this.planets[this.planetChoice]) * 100
            ) / 100;
        this.yearsUntil = () =>
            Math.round(
                (((birthdayFuture - this.earthAgeYears()) * 365.25) /
                    this.planets[this.planetChoice]) *
                    100
            ) / 100;
        this.yearsSince = () =>
            Math.round(
                (((this.earthAgeYears() - birthdayPast) * 365.25) /
                    this.planets[this.planetChoice]) *
                    100
            ) / 100;
    }
}
