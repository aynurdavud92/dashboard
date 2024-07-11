import React, { Component } from "react";
import Chart from "react-apexcharts";

class FirstChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Cost',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'category',
          categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          
        },
        yaxis:{
          show:false
        },
        tooltip: {
          x: {
            format: 'category'
          },
        },
      },
    
    
    };
  }



  render() {
    return (
      <div>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="area" height={250} width={500} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default FirstChart