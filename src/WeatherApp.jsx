import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [Weatherinfo,setWeatherinfo]=useState({
         City:"delhi",
        feelslike: 35.1,
       humidity: 79,
        temp: 29.21,
      tempmax: 29.21,
     tempmin: 29.21,
      weather: "light rain"

    })
    let updateInfo=(newinfo)=>{
        setWeatherinfo(newinfo);

    }
    function getCurrentDateTime() {//curenet time get
  const now = new Date();
  return now.toLocaleString(); 
}



    return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        transition: "background 0.5s ease",
        background: Weatherinfo.humidity > 80
          ? "#a3cfff" // Rainy
          : Weatherinfo.temp > 30
          ? "#ffedb3" // Hot
          : Weatherinfo.temp < 15
          ? "#d6f0f6" // Cold
          : "#f0f0f0" // Default
      }}
    >
      <h2 style={{ backgroundColor: "black", color: "white" }}>
        CHECK YOUR CITY WEATHER
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={Weatherinfo} />
    </div>
  );
}
