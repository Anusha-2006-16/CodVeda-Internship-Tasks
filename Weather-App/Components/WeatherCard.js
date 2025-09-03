import React from 'react'
import './Search.css'
const WeatherCard = (props) => {
  return (
    <div>
      <div className='container'>
          <img src={props.imgUrl} />

          <div className='temp text-center'>
              <h1>{props.temperature} ℃</h1>
              <h3>{props.description}</h3>
          </div>

          <div className='conditions'>
                <div className='humidity'>
                  <span><i class="fa-solid fa-droplet"></i></span>
                  <div>
                    <h4>{props.humidity} % </h4>
                    <h5>Humidity</h5>
                  </div>
                </div>

                <div className='winds'>
                  <span><i class="fa-solid fa-wind"></i></span>
                  <div>
                    <h4>{props.speed}Km.H</h4>
                    <h5>Wind Speed</h5>
                  </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default WeatherCard
