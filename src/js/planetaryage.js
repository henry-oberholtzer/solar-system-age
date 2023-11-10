export default class PlanetaryAge {
    constructor(month, day, year) {
        this.dob = [month, day, year];
    }

    earthAge() {
        const birthday = new Date(this.dob[2], this.dob[0] - 1, this.dob[1]);
        const nowMS = Date.now();
        const birthdayMS = birthday[Symbol.toPrimitive]("number");
        const days = Math.round((nowMS - birthdayMS) / (1000 * 60 * 60 * 24));
        this.earthAgeDays = days;
        this.earthAgeYears = Math.round(days / 364.25);
    }

    solarSystemAge() {
        if (Object.hasOwn(this, 'earthAgeDays') === false) {
            this.earthAge();
        }
        this.mercurialAgeYears = Math.round((this.earthAgeDays / 88))
        this.venusianAgeYears = Math.round((this.earthAgeDays / 225))
        this.martianAgeYears = Math.round((this.earthAgeDays / 687))
        this.jovianAgeYears = Math.round((this.earthAgeDays / 4332.59) * 100) / 100
        this.saturnianAgeYears = Math.round((this.earthAgeDays / 10756) * 100) / 100
        this.uranianAgeYears = Math.round((this.earthAgeDays / 30687) * 100) / 100
        this.neptunianAgeYears = Math.round((this.earthAgeDays / 60190) * 100) / 100
        this.plutonianAgeYears = Math.round((this.earthAgeDays / 90650) * 100) / 100
        this.lunarAgeYears = Math.round((this.earthAgeDays / 354.36));
    }
}
