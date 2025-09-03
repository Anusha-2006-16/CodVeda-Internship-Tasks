import React, { useState } from 'react'
import './Search.css'
import WeatherCard from './WeatherCard'
const Search = () => {
  const [city,setCity]=useState("");
  const[humidity,setHumidity]=useState("");
  const[temp,setTemp]=useState("");
  const[speed,setSpeed]=useState("");
  const[desc,setDesc]=useState("");
  const[img,setImg]=useState("https://static.vecteezy.com/system/resources/previews/015/272/629/original/wind-with-leaves-windy-weather-weather-forecast-for-the-autumn-season-meteorology-forecasting-wind-speed-and-strength-line-art-illustration-in-doodle-style-isolated-vector.jpg");

    const API_KEY="60ea19d92010efe3edb9123f16a82293";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const handleChange=(e)=>{
      setCity(e.target.value);
       
    }
    const handleSearch=async ()=>{

      const response= await fetch(url);
        const data= await (response.json());
        if (data.cod !== 200) {
  alert("City not found!");
  return;
}

        console.log(data);
        setHumidity(data.main.humidity);
        setTemp(Math.floor(data.main.temp));
        setSpeed(data.wind.speed);
        setDesc(data.weather[0].main);

const weatherImages = {
  Clouds: "https://static.vecteezy.com/system/resources/previews/025/934/847/large_2x/collection-of-cartoon-clouds-cloud-sticker-clipart-generated-by-ai-photo.jpg",
  Clear: "https://tse2.mm.bing.net/th/id/OIP.wfPhQPoB8g8zDjeQpESFhAHaFq?rs=1&pid=ImgDetMain&o=7&rm=3",
  Rain: "https://th.bing.com/th/id/R.5bb425227c880df0278b6c7d3faa526a?rik=a%2fDhTWhKcp3VNQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjix%2fo85%2fjixo85x4T.png&ehk=dhDOBk6kx%2fEbXDtNNSSYeVNJtPiKLaaQAtZdLqfATSo%3d&risl=&pid=ImgRaw&r=0l",
  Snow: "https://cdn-icons-png.flaticon.com/512/2315/2315309.png",
  Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
  Thunderstorm: "https://cdn-icons-png.flaticon.com/512/1146/1146860.png",
};


const condition = data.weather[0].main;

setImg(weatherImages[condition] || "https://static.vecteezy.com/system/resources/previews/015/272/629/original/wind-with-leaves-windy-weather-weather-forecast-for-the-autumn-season-meteorology-forecasting-wind-speed-and-strength-line-art-illustration-in-doodle-style-isolated-vector.jpg")


    }

  return (
    <div>
        <h1 className='text-center my-3'>Weather App</h1>
      <div className='container '>
         <input type='text' className='my-3 text-center' placeholder='Enter a city' value={city} onChange={handleChange}   />
         <button className='btn bg-light mx-2' onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
       
       <WeatherCard title={city} imgUrl={img}
       humidity={humidity} temperature={temp} speed={speed}  description={desc}/>
         </div>
    </div>
  )
}

export default Search
