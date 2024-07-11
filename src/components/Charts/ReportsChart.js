import React, { Component } from "react";
import Chart from "react-apexcharts";

class ReportsChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          
          grid: {
            row: {
              
            },
          },
          xaxis: {
            categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          },
          yaxis:{
            categories:["0k","10k","20k","30k","40k","50k"]
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
  export default ReportsChart