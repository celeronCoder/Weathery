import React from "react";

const SunriseSunsetGraph:React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <img style={{ height: '100px' }}  src={`${process.env.REACT_APP_ICON_URL}/01d@4x.png`} alt="graph_day"/>
      <img style={{ height: '100px' }}  src={`${process.env.REACT_APP_ICON_URL}/01n@4x.png`} alt="graph_night"/>
    </div>
  )
}

export default SunriseSunsetGraph;
