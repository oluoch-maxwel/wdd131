
const year = new Date().getFullYear();

const currentyear = document.querySelector("#currentyear");

currentyear.textContent = `© ${year}`;

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;



const kmh = document.getElementById("km-h");
const temp = document.getElementById("temp");



// Static weather values
const temperature = 8; // °C
const windSpeed = 12;  // km/h

// Display the static values
document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

// Function to calculate wind chill (Metric Formula)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

// Check if calculation is valid
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// Display the result
document.getElementById("windChill").textContent = windChill;