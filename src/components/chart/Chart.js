  import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const chart = (props) => {



    const dataPointValues = props.dataPoints.map(dataPoint=> dataPoint.value);
console.log(dataPointValues);
const totalMaximum = Math.max(...dataPointValues);
    console.log("maxxx")
 console.log(totalMaximum);
    return (
        <div className="chart" >
 
           { props.dataPoints.map((dataPoint) =>(
            <ChartBar 
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
             label={dataPoint.label}
             
             />))}
        </div>
    );
};

export default chart
