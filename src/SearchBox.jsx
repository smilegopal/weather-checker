import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
     let [city,setCity]=useState("");
     let [error,seterror]=useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="59638552093d4e8ab0e5e175a88be166";
    let getWeatherInfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonresponse=await response.json();
     let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempmin:jsonresponse.main.temp_min,
        tempmax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelslike:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description,
     };
     console.log(result);
     return result;

        }catch(err){
           throw err;
        }
    }
    let handleChange=(evt)=>{
  setCity(evt.target.value);
}
let handleSubmit= async(evt)=>{
    try{
        evt.preventDefault();
    console.log(city)
    setCity("");
let newinfo= await getWeatherInfo();
updateInfo(newinfo);

    }catch(err){
        seterror(true)
    }
}

 return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
                 <TextField id="city"
                  label="City Name" 
                  variant="outlined" required value={city}
                  onChange={handleChange}
                  />
                 <br /><br />
                  <Button variant="contained" type='submit' >Search</Button>
                  {error && <p style={{color:"red"}}>No such palce exist</p>}
            </form>
            </div>
      
            
    )
}