import React, { Component, PureComponent } from 'react'
import * as eCharts from 'echarts'
import './index.less'

class EchartPage extends PureComponent {
  eChartsRef: any = React.createRef()

  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current)

    let option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }

    myChart.setOption(option)
  }

  render(): React.ReactChild {
    return (
      <>
        <div
          ref={this.eChartsRef}
          style={{
            width: 600,
            height: 400,
            margin: 100
          }}
        />
      </>
    )
  }
}

export default EchartPage
