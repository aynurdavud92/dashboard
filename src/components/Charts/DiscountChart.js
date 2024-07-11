import React, { Component } from "react";
import Chart from "react-apexcharts";

class DiscountChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Cost',
        data: [5, 7, 9, 10, 11, 14, 17, 17,17,16,15,13,11,16,18,20]
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
export default DiscountChart