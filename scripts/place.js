

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
     
document.getElementById("lastModified").textContent = "Last Modification: " + new Date(document.lastModified).toLocaleString();

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Windchill formula (°F): 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    return (
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // Round to 1 decimal place
}

// Static values for temperature and wind speed
const temperature = 30; // Example: 30°F
const windSpeed = 10; // Example: 10 mph

// Calculate windchill and display it in the "Weather" section
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChill").textContent = `Wind Chill: ${windChill}°F`;