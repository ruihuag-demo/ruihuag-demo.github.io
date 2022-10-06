import React, { Component } from 'react'
import * as eCharts from 'echarts'
import worldGeo from './geo/custom.geo.json'

class Index extends Component {
  eChartsRef: any = React.createRef()
  handleMapClick = (params: any): void => {
    console.log({ params })
  }
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current)

    eCharts.registerMap('world', worldGeo as any)
    let option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params: any) {
          if (params.data) {
            return params.data.longName + ' : ' + params.data.value
          }
          return ''
        }
      },
      visualMap: {
        left: 'right',
        min: 0,
        max: 20000,
        inRange: {
          color: [
            '#579848',
            '#E0CD34',
            '#D33F2C'
            // '#a50026'
          ]
        },
        // text: [intl.formatMessage({ id: "global.high" }), intl.formatMessage({ id: "global.low" })],
        calculable: true
      },
      geo: {
        type: 'map',
        map: 'world', //'jiangxi'
        roam: true,
        nameProperty: 'iso_a2',
        zoom: 1, //地图的比例
        emphasis: {
          label: {
            show: false
          }
        }
      },

      series: [
        {
          name: 'World Map',
          type: 'map',
          roam: true,
          map: 'world',
          nameProperty: 'iso_a2',
          geoIndex: 0
          // data: [],
        }
      ]
    }

    myChart.setOption(option)
    myChart.on('click', this.handleMapClick)
  }

  render(): React.ReactChild {
    return (
      <>
        <div
          ref={this.eChartsRef}
          style={{
            width: 1200,
            height: 800,
            margin: 10
          }}
        />
      </>
    )
  }
}

export default Index
