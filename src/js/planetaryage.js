export default class PlanetaryAge{
    constructor(month, day, year) {
        this.dob = [month, day, year];
    }

    earthDays() {
        const birthday = new Date(this.dob[2], (this.dob[0] - 1), this.dob[1]);
        console.log(birthday)
        const nowMS = Date.now()
        console.log(nowMS)
        const birthdayMS = birthday[Symbol.toPrimitive]('number');
        console.log(birthdayMS);
        const days = Math.round((nowMS - birthdayMS)/(1000 * 60 * 60 * 24));
        this.earthAgeDays = days;
        return days;
    }
}