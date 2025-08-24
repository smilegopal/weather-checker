import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // Base URL
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // API Key from .env
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();

      if (jsonresponse.cod !== 200) {
        throw new Error(jsonresponse.message);
      }

      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempmin: jsonresponse.main.temp_min,
        tempmax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log(city);
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
      setCity(""); // clear input after success
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
