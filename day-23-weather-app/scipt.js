async function getWeather() {
    let city = document.getElementById("city").value;

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temp").innerText =
        "Temperature: " + data.main.temp + " °C";

    document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";

    document.getElementById("wind").innerText =
        "Wind Speed: " + data.wind.speed + " m/s";

    let iconCode = data.weather[0].icon;

    document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
