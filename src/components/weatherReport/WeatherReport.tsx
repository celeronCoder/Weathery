import React from "react";

import WeatherComponentProps from "../weatherComponentProps";
import WeatherReportDetails from "./weatherReportDetail/WeatherReportDetails";
import WeatherReportHeader from "./WeatherReportHeader";

const WeatherReport : React.FC<WeatherComponentProps> = ({ weatherData }) => {
  return (
    <div className="container detailCard">
      <WeatherReportHeader weatherData={weatherData} /> 
      <WeatherReportDetails weatherData={weatherData} />
    </div>
  )
}

export default WeatherReport;
