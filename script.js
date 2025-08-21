 async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "3e073808299f2a5a5f20ad6194eb56d2"; 

      if (!city) {
        alert("Please enter a city name");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City is not found");

        const data = await response.json();

        document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temp").textContent = `${data.main.temp}°C`;
        document.getElementById("desc").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `🌬️ Wind Speed: ${data.wind.speed} m/s`;

        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("weatherResult").classList.remove("hidden");
      } catch (error) {
        alert(error.message);
      }
}