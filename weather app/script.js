const apiKey = "ec18d5b0f8c382b96d589d7fc3acdc1e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather [0].main == "Clouds"){
  weatherIcon.src ="cloud.png";
}
 else if (data.weather[0].main == "Clear") {
  weatherIcon.src ="weather clear.jpg";
}
else if (data.weather[0].main == "Drizzle") {
  weatherIcon.src ="drizzle.png";
}
else if (data.weather[0].main == "Rain") {
  weatherIcon.src ="rain.png";
}
else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "mist.png";
}
}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});