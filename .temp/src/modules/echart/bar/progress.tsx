import React, { Component } from 'react'
import * as eCharts from 'echarts'

class Index extends Component {
  eChartsRef: any = React.createRef()
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current)

    let option = {
      backgroundColor: '#031d33',
      grid: {
        top: 0,
        bottom: 0,
        left: '10%',
        right: '10%'
      },
      xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0]
      },
      yAxis: [
        {
          type: 'category',
          data: [''],
          axisLine: { show: false },
          axisTick: [
            {
              show: false
            }
          ]
        }
      ],
      series: [
        {
          name: '金额',
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new eCharts.graphic.LinearGradient(1, 0, 0, 1, [
                {
                  offset: 1,
                  color: 'rgba(48, 236, 166, 1)'
                },
                {
                  offset: 0,
                  color: 'rgba(48, 236, 166, 0.5)'
                }
              ])
            }
          },
          barWidth: 20,
          data: [15]
        },
        {
          name: '背景',
          type: 'bar',
          barWidth: 20,
          barGap: '-100%',
          data: [20],
          itemStyle: {
            normal: {
              color: 'rgba(28, 128, 213, 0.19)',

              barBorderRadius: 30
            }
          }
        }
      ]
    }

    myChart.setOption(option)
  }

  render(): React.ReactChild {
    return (
      <div
        ref={this.eChartsRef}
        style={{
          width: 600,
          height: 400,
          margin: 100
        }}
      />
    )
  }
}

export default Index
