let apiKey = "6abba6e892082f6e99ff3292ea97c423";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

function displayTemperature(response) {
  console.log(response);
  let city = document.querySelector("#city");
  let description = document.querySelector(".description");
  let temperature = document.querySelector("#temperature");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].main;
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = response.data.wind.speed;
}
console.log(apiURL);
axios.get(apiURL).then(displayTemperature);
