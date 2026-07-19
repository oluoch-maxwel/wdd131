// Footer
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${year}`;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Static weather values
const temperature = 8; // °C
const windSpeed = 12;  // km/h

// Display values
document.getElementById("temperature").textContent = `${temperature} °C`;
document.getElementById("windspeed").textContent = `${windSpeed} km/h`;


function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windChill").textContent = windChill;