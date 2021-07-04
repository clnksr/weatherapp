let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
  zurich: {
    temp: 14,
    humidity: 54,
  },
};

// function displayTemperature(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   return `${celsius}°C (${fahrenheit}°F)`;
// }

// let city = prompt("Enter a city");
// city = city.toLowerCase();
// city = city.trim();
// if (weather[city] !== undefined) {
//   let displayedCity = city[0].toUpperCase() + city.substring(1);
//   alert(
//     `It is currently ${displayTemperature(
//       weather[city].temp
//     )} in ${displayedCity} with a humidity of ${weather[city].humidity} %.`
//   );
// } else {
//   alert(
//     "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
//   );
// }
function addZero(minutes) {
  if (minutes < 10) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateTime() {
  let now = new Date();
  now.getDay();
  let currentTime = document.querySelector("#time");
  currentTime.innerHTML = `${days[now.getDay()]} ${addZero(
    now.getHours()
  )}:${addZero(now.getMinutes())}`;
}

updateTime();
setInterval(updateTime, 1000);

document
  .querySelector("#search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-input");
    let cityName = cityInput.value;
    setCityName(cityName);
    getWeatherData(cityName);
  });

//search openweather for the temperature for cityInput with city name
//access current temperature
//replace h2 for the returned number

function getWeatherData(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=c36288893993e649b6e920683c3b0226`;
  axios.get(url).then(setTemperature);
}

function setTemperature(response) {
  let cityTemp = response.data.list[0].main.temp;
  document.querySelector("#temp").innerHTML = Math.round(cityTemp);
  for (
    let daysInAdvance = 0;
    daysInAdvance < 5;
    daysInAdvance = daysInAdvance + 1
  ) {
    document.querySelector(
      `#forecast-tile-${daysInAdvance} .forecast-temp`
    ).innerHTML = response.data.list[8 * daysInAdvance + 7].main.temp;
  }
}

function setCityName(cityName) {
  document.querySelector("#cityName").innerHTML = cityName;
}

function setBackgroundColor(colorpotato, asasasasasa, sfsdfsdfsdgfsdfg) {
  document.body.style.backgroundColor = colorpotato;
}
//the default is now:
let defaultCity = "Zürich";
getWeatherData(defaultCity);
setCityName(defaultCity);
