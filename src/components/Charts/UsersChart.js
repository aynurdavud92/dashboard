import React, { Component } from "react";
import Chart from "react-apexcharts";
class UsersChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                show:false
              },
            }
          },
          dataLabels: {
            enabled: false,
           
          },
          
          xaxis: {
            show:false,
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            show:false
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={100} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

export default UsersChart