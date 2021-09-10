import moment from "moment";
import React from "react";
import WeatherComponentProps from "./weatherComponentProps";


const WeatherCard: React.FC<WeatherComponentProps> = ({weatherData}) => {
  const description:string = weatherData.weather[0].description;
  const temp_max:number = Math.round(weatherData.main.temp_max);
  const temp_min:number = Math.round(weatherData.main.temp_min);

  return (
    <div className="container">
      <div className="content">
        <p className="header">{ weatherData.name }</p>
        <p className="time secondary">{ moment().format('dddd') }, { moment().format('LL') }</p>
        <p className="temp">{ Math.round(weatherData.main.temp) }&deg;</p>
        <p className="description">{ description }</p>
      </div>
      <div className="iconContainer">
        <img src={`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0].icon}@2x.png`} alt={ description } className="icon"/>
        {
          temp_max === temp_min ? <p id="min_max">--/{temp_max}</p> : <p id="min_max">{temp_min}/{temp_max}</p>
        }
      </div>
    </div>
  )
}

export default WeatherCard;
