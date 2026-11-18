


// Selectors
const country = document.querySelector("#country");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

const apiKey = "1b52a3a5cfedea1462b08df4a8baa257";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Somalia&appid=${apiKey}&units=metric`;


async function getWeather() {

    try {

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }
        const data = await response.json();

        const weatherInfo = {
            name: data.name,
            temp: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind: data.wind.speed
        };

        country.textContent = weatherInfo.name;
        temperature.textContent = `${weatherInfo.temp}°C`;
        description.textContent = weatherInfo.description;
        humidity.textContent = weatherInfo.humidity;
        wind.textContent = weatherInfo.wind;

    } catch (error) {

        description.textContent = error.message;

    }
}

getWeather();
