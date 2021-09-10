import React from "react";
import keyable from "../keyable";
import WeatherCard from "./WeatherCard";
import WeatherReport from "./weatherReport/WeatherReport";
interface WeatherProps {
  weatherData: keyable
}
const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <>
      <WeatherCard weatherData={ weatherData } />
      <WeatherReport weatherData={ weatherData } />
    </>
  )
}
export default Weather;
