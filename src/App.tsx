import React, {useEffect, useState} from 'react';
import './App.css';
import keyable from './keyable';
import Weather from "./components/Weather";

function App() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [data, setData] = useState<keyable>([]);

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
        });
    }
    fetchData();
  }, [latitude, longitude])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={ data } />
      ): (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default App;
