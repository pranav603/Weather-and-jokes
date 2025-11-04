# WeatherApp 🌤️

A modern, single-page weather application. Enter any city to get live updates, hourly forecasts, and a 3-day outlook — all with dynamic styling and seamless UI.

## Features
- Search for any city and fetch its weather.
- View current temperature, description, humidity, wind speed, and “feels like” temperature.
- View next 24 hours forecast via a horizontally scrollable card list.
- View next 3 days forecast via simple summary cards.
- Background gradient changes dynamically based on weather (sunny, rainy, cloudy, stormy).
- Glassmorphism UI: semi-transparent cards, blur effects, smooth animations.
- Lightweight: built with vanilla HTML5, CSS3, and JavaScript (no frameworks).

## Tech Stack
- HTML5 — Structure and markup.
- CSS3 — Styling, glassmorphism, responsive layout.
- JavaScript — Fetch API used for weather data & UI logic.
- OpenWeatherMap API — Weather data source.

## Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/pranav603/WeatherApp.git
2. Navigate into the project directory:
   cd WeatherApp
3. Open index.html in your browser.

(Optional but recommended) Replace the placeholder API key in script.js:

const API_KEY = '<YOUR_OPENWEATHER_API_KEY>';


You can obtain a free key at https://openweathermap.org/api
.

## Usage

Enter the name of a city (e.g., “London”, “Bengaluru”, “Mumbai”) in the search input.

Click the “Search” button or press Enter.

The app will fetch and display:

Current weather for that city.

Hourly forecast (next ~8 time slots).

3-day forecast summary.

The background will transition based on the weather condition (e.g., blue for clear skies, grey for clouds, dark for storms).

## Future Improvements

Add full 5-day forecast with min/max temperatures and icons.

Include toggle between Celsius / Fahrenheit.

Add dark mode or custom themes.

Implement geolocation fallback (detect user’s current location).

Support mobile offline caching and service worker.

## Author

Maintained by Pranav Raj — feel free to open issues, suggest features or use this project as a learning reference.

## License

MIT License — you’re welcome to modify and distribute as needed.
