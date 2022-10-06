import React, { Component } from 'react'
import * as eCharts from 'echarts'

class Index extends Component {
  eChartsRef: any = React.createRef()
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current)

    let option = {
      title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
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

export default Index
