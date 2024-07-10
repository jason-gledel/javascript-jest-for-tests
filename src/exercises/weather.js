
import { fetchData } from './ex4.js';

function displayData() {
  const weatherDiv = document.getElementById('weather');

  fetchData()
    .then(data => {
      if (data) {
        const city = data.name;
        const country = data.sys.country;
        const temperature = data.main.temp;
        const conditions = data.weather[0].description;
        const humidity = data.main.humidity;

        weatherDiv.innerHTML = `
          <h2>Ville: ${city}, ${country}</h2>
          <p>Temperature: ${temperature} °C</p>
          <p>Conditions: ${conditions}</p>
          <p>Humidité: ${humidity}%</p>
        `;
      } else {
        weatherDiv.innerHTML = '<p>Failed to fetch weather data</p>';
      }
    })
    .catch(error => {
      console.error('Error displaying data:', error);
      weatherDiv.innerHTML = '<p>Error fetching weather data</p>';
    });
}


document.addEventListener('DOMContentLoaded', displayData);
