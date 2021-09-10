import React from "react";
import WeatherComponentProps from "../weatherComponentProps";
import SunriseSunsetGraph from "./SunriseSunsetGraph";
import { Icon } from "semantic-ui-react";

const WeatherReportHeader: React.FC<WeatherComponentProps> = ({ weatherData }) => (
  <>
    <p className="detailCardHeader">Weather today in { weatherData.name }</p>
    <main>
      <div className="feels_like">
        <p>{ Math.round(weatherData.main.feels_like) }&deg;</p>
        <p className="secondary">Feels Like</p>
      </div>
      <div className="sun">
        <SunriseSunsetGraph />
        <div className="sunData">
          <div className="sunrise sunDataItem">
            <Icon name="angle up" />
            <p>{ new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN') }</p>
          </div>
          <div className="sunset sunDataItem">
            <Icon name="angle down" />
            <p>{ new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN') }</p>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default WeatherReportHeader;
