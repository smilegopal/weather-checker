import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){
    const intial_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    function feelsLikeText(temp) {
  if (temp < 10) return "🥶 Freezing cold";
  if (temp < 20) return "🧥 Chilly";
  if (temp < 30) return "🙂 Pleasant";
  if (temp < 40) return "🥵 Hot";
  return "🔥 Scorching heat";
}

        return(
            <div className='InfoBox'>
            <div className='classContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:(info.temp>15?<SunnyIcon/>:<SevereColdIcon/>)}
        </Typography>
              
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
         <p>Temperature = {info.temp}°C</p>
           <p>humidity={info.humidity}</p>
           <p>minTemp={info.tempmin}</p>
           <p>maxtemp={info.tempmax}</p>
        <p>Feels Like: {info.feelslike}°C → {feelsLikeText(info.feelslike)}</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
        </div>
    )
}