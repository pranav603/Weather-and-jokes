 let currentQuestion = 0;
    const questions = document.querySelectorAll('.question');

    function showQuestion(index) {
      questions.forEach((q, i) => {
        q.classList.toggle('active', i === index);
      });
    }

    function navigateQuestion(direction) {
      currentQuestion += direction;
      if (currentQuestion < 0) currentQuestion = 0;
      if (currentQuestion >= questions.length) currentQuestion = questions.length - 1;
      showQuestion(currentQuestion);
    }

    function checkAnswer(button, selected) {
      const questionDiv = button.closest('.question');
      const correct = questionDiv.getAttribute('data-answer');
      const resultP = questionDiv.querySelector('.result');

      if (selected === correct) {
        resultP.textContent = "✅ Correct!";
        resultP.style.color = "green";
      } else {
        resultP.textContent = "❌ Incorrect. Try again.";
        resultP.style.color = "red";
      }
    }

    async function fetchJoke() {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      document.getElementById("api-result").textContent = `${data.setup} — ${data.punchline}`;
      
    }

    function showWeatherBox() {
      document.getElementById('weather-box').style.display = 'block';
    }

    async function fetchWeather() {
      const city = document.getElementById('city-input').value.trim();
      if (!city) {
        alert('Please enter a city name.');
        return;
      }

      const geocodeRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
      const geocodeData = await geocodeRes.json();

      if (!geocodeData.results || geocodeData.results.length === 0) {
        document.getElementById("api-result").textContent = `❌ Could not find location for "${city}".`;
        return;
      }

      const { latitude, longitude, name, country } = geocodeData.results[0];

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherRes.json();

      const weather = weatherData.current_weather;
      document.getElementById("api-result").textContent =
        `🌤️ Weather in ${name}, ${country}: ${weather.temperature}°C, Wind: ${weather.windspeed} km/h`;
    }

    // Initial display
    showQuestion(currentQuestion);