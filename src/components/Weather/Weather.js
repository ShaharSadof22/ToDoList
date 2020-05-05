import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [weather, setWeather] = useState({
    temp_min: "",
    temp_max: "",
    description: "",
  });
  const [isUploaded, setIsUploaded] = useState(true);

  //Import the weather data using API
  if (isUploaded) {
    setIsUploaded(false);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Yafo&appid=46bacd4218d40f0729b3e0ffa1d82a55"
      )
      .then((response) => {
        const new_temp_min = Math.round(response.data.main.temp_min - 273);
        const new_temp_max = Math.round(response.data.main.temp_max - 273);
        const newDescription = response.data.weather[0].main;

        console.log(newDescription);

        setWeather({
          temp_min: new_temp_min,
          temp_max: new_temp_max,
          description: newDescription,
        });
      });
  }
  //Import the images
  switch (weather.description) {
    case "Clear":
      var weatherImage = require("./weather-images/Clear.PNG");
      break;
    case "Clouds":
      var weatherImage = require("./weather-images/Cloud.PNG");
      break;
    case "Rain":
      var weatherImage = require("./weather-images/Rain.PNG");
      break;
    case "Snow":
      var weatherImage = require("./weather-images/Snow.PNG");
      break;
  }

  const temperature = [weather.temp_min, " ", "-", " ", weather.temp_max];
  return (
    <div className={props.mode ? "weather-dark" : "weather-light"}>
      {props.mode ? (
        " "
      ) : (
        <img
          src={weatherImage}
          alt="Not sure about it.."
          width="50"
          height="50"
        />
      )}

      <h1>{weather.description}</h1>
      <h1>{temperature}</h1>
    </div>
  );
}

export default Weather;
