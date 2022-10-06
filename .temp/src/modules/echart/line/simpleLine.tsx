import React, { Component } from 'react'
import * as eCharts from 'echarts'

class Index extends Component {
  eChartsRef: any = React.createRef()
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current)

    let option = {
      title: {
        text: 'Simple Line'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260]
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
