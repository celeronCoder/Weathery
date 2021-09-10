import React from "react";
import WeatherComponentProps from "../../weatherComponentProps";
import WeatherReportDetail from "./WeatherReportDetail";

const WeatherReportDetails:React.FC<WeatherComponentProps> = ({ weatherData }) => {
  return (
    <div className="details">
      <WeatherReportDetail
        detailClassName="high_low"
        iconName="exclamation"
        detailName="High/Low"
        detailData={ `--/${Math.round(weatherData.main.temp_max)}` }
        detailDataUnit="&deg;"
      />
      <WeatherReportDetail
        detailClassName="wind"
        iconName="sort content descending"
        detailName="Wind"
        detailData={ Math.round(weatherData.wind.speed * 3.6) }
        detailDataUnit="km/h"
      />
      <WeatherReportDetail
        detailClassName="humidity"
        iconName="tint"
        detailName="Humidity"
        detailData={ weatherData.main.humidity }
        detailDataUnit="%"
      />
      <WeatherReportDetail
        detailClassName="pressure"
        iconName="compress"
        detailName="Pressure"
        detailData={ weatherData.main.pressure }
        detailDataUnit="hPa"
      />
      <WeatherReportDetail
        detailClassName="visibility"
        iconName="eye"
        detailName="Visibility"
        detailData={ weatherData.visibility / 1000 }
        detailDataUnit="km"
      />
    </div>
  )
}

export default WeatherReportDetails;
