"use strict";

// getWeatherData function fetches weaather data from api
// it passes city as a parameter
const getWeatherData = async (city) => {
  let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dca31de5a9msh469b938fc5674aep17c35fjsn8c231497c8e1",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

// sshowData functionupdates application UI with response got from API
const showData = (weatherData) => {
  document.getElementById("tz").innerText = weatherData.location.tz_id;
  document.getElementById("temp-fer").innerText = weatherData.current.temp_f;
  document.getElementById("temp-cel").innerText = weatherData.current.temp_c;
  document.getElementById("city-name").innerText = weatherData.location.name;

  document.getElementById("weather-type").innerText =
    weatherData.current.condition.text;
};
// searchCity function calls both getWeatherData and showData functions
const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const data = await getWeatherData(city);
  showData(data);

  document.getElementById("city-input").value = "";
};

// searchCity function is call directly in html file on the search button
