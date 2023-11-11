import "./css/styles.css";
import PlanetaryAge from "./js/planetaryage";

const printResults = (planetaryAgeObject) => {
    document.getElementById("musings").innerHTML = "";
    const date = planetaryAgeObject.dob;
    const month = date.toLocaleString("default", { month: "long" });
    const weekday = date.toLocaleString("default", { weekday: "long" });
    const year = date.toLocaleString("default", { year: "numeric" });
    const chosenPlanet =
        planetaryAgeObject.planetChoice.charAt(0).toUpperCase() +
        planetaryAgeObject.planetChoice.slice(1);
    const birthdayFuture = planetaryAgeObject.birthdayFuture;
    const birthdayPast = planetaryAgeObject.birthdayPast;
    const ageEarthDays = planetaryAgeObject.earthAgeDays();
    const ageEarthYears = planetaryAgeObject.earthAgeYears();
    const solarAge = planetaryAgeObject.solarSystemAge();
    const yearsUntil = planetaryAgeObject.yearsUntil();
    const yearsSince = planetaryAgeObject.yearsSince();
    const musings = document.getElementById("musings");
    const paragraph = document.createElement("p");
    const introString = `You were born in the earth-year ${year}, during the month of ${month}, on a ${weekday}. `;
    const secondString = `Since then, you haved spent ${ageEarthDays} days on earth, or in only a slightly less impressive number, ${ageEarthYears} years. `;
    const thirdString = `However, on your chosen planet of ${chosenPlanet}...`;
    const fourthString = (solarAge, ageEarthDays) => {
        if (solarAge < 1) {
            return `you have so far only lived ${solarAge * 100}% of a year. `;
        } else if (solarAge === 1) {
            return `you have managed to accomplish a single revolution of the sun in your ${ageEarthDays} days on earth. `;
        } else {
            return `you have lived a healthy ${solarAge} years. `;
        }
    };
    const fifthString = (chosenPlanet, yearsUntil, birthdayFuture) => {
        if (yearsUntil < 1) {
            return `On ${chosenPlanet} it will only be ${yearsUntil} of a year until you turn ${birthdayFuture}. `;
        } else
            return `On ${chosenPlanet} it will be ${yearsUntil} years until you turn ${birthdayFuture}. `;
    };
    const sixthString = (chosenPlanet, yearsSince, birthdayPast) => {
        if (yearsSince < 1) {
            return `Finally, rejoice, youth is with you, it has only been ${yearsSince} of a year on ${chosenPlanet} since you were ${birthdayPast}.`;
        } else
            return `In the time since you were the tender age of ${birthdayPast}, it has been ${yearsSince} long years on ${chosenPlanet}.`;
    };
    paragraph.append(
        introString,
        secondString,
        thirdString,
        fourthString(solarAge, ageEarthDays),
        fifthString(chosenPlanet, yearsUntil, birthdayFuture),
        sixthString(chosenPlanet, yearsSince, birthdayPast)
    );
    musings.append(paragraph);
};

const printError = () => {
    document.getElementById("musings").innerHTML = "";
    const musings = document.getElementById("musings");
    const paragraph = document.createElement("p");
    const upsetString = "Alright, though you could outsmart me? Well, I prepared for this. Please re-enter your 'future' and 'past' ages.";
    paragraph.append(upsetString);
    musings.append(paragraph);
};

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const year = parseInt(document.getElementById("year").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const day = parseInt(document.getElementById("day").value, 10);
    const pastAge = () => {
        return document.getElementById("past-birthday").value
            ? parseInt(document.getElementById("past-birthday").value)
            : 3;
    };
    const futureAge = () => {
        return document.getElementById("future-birthday").value
            ? parseInt(document.getElementById("future-birthday").value)
            : 103;
    };
    const planet = document.getElementById("planet").value;
    const planetaryAge = new PlanetaryAge(
        month,
        day,
        year,
        planet,
        futureAge(),
        pastAge()
    );
    if (futureAge() < pastAge()) {
        return printError();
    } else {
        printResults(planetaryAge);
    }
    
});
