import './css/styles.css';
import PlanetaryAge from './js/planetaryage';

const printResults = (planetaryAgeObject) => {

}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    const pastAge = parseInt(document.getElementById("past-birthday").value);
    const futureAge = parseInt(document.getElementById("future-birthday").value);
    const planet = document.getElementById("planet").value;
    const planetaryAge = new PlanetaryAge(month, day, year, planet, futureAge, pastAge);
    printResults(planetaryAge);
});