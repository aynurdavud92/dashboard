import React, { Component } from "react";
import Chart from "react-apexcharts";

class SessionsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Cost',
        data: [43, 30, 20, 23, 27, 30, 17]
      }],
      options: {
        chart: {
          height: 150,
          type: 'area'
        },
      
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
         show:false,
        labels:{
            show:false

        }
        },
        
        yaxis:{
          show:false
        },
        tooltip: {
          show:false        },
      },
    
    
    };
  }



  render() {
    return (
      <div>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="area" height={150} width={150} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default SessionsChart