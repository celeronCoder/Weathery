import React from "react";
import { Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface WeatherReportDetailProps {
  detailClassName: string;
  iconName: SemanticICONS;
  detailName: string;
  detailData: string | number;
  detailDataUnit: string;
}

const WeatherReportDetail:React.FC<WeatherReportDetailProps> = ({ detailClassName, iconName, detailName, detailData, detailDataUnit }) => {
  return (
    <div className={`${ detailClassName } detail`}>
      <div className="detailHeader">
        <Icon name={ iconName } />
        <p>{ detailName }</p>
      </div>
      <div className="detailData">{ detailData } { detailDataUnit }</div>
    </div>
  )
}

export default WeatherReportDetail;
