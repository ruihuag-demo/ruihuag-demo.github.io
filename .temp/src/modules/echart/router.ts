import EchartPage from './index'
import SimpleLine from './line/simpleLine'
import SmoothLine from './line/smoothLine'
import USAMap from './map/usaMap'
import worldMap from './map/worldMap'
import BasisRadar from './radar/basisRadar'
import MulipleRadar from './radar/mulipleRadar'
import ProgressBar from './bar/progress'
import TradeFlyLine from './graph/tradeFlyLineGraph'

export default [
  {
    key: 'echart',
    id: 'echart',
    path: '/echart',
    title: 'menu.name._echart',
    icon: 'VideoCameraOutlined',
    module: EchartPage,
    children: [
      {
        key: 'echart_line',
        id: 'echart_line',
        path: '/echart/line',
        title: 'menu.name._echart.line',
        module: EchartPage,
        children: [
          {
            key: 'echart_line_simple',
            id: 'echart_line_simple',
            path: '/echart/line/simpleLine',
            title: 'menu.name._echart.line.simple',
            module: SimpleLine
          },
          {
            key: 'echart_line_smooth',
            id: 'echart_line_smooth',
            path: '/echart/line/smoothLine',
            title: 'menu.name._echart.line.smooth',
            module: SmoothLine
          }
        ]
      },
      {
        key: 'echart_map',
        id: 'echart_map',
        path: '/echart/map',
        title: 'menu.name._echart.map',
        children: [
          {
            key: 'echart_map_simple',
            id: 'echart_map_simple',
            path: '/echart/map/simpleMap',
            title: 'menu.name._echart.map.usa',
            module: USAMap
          },
          {
            key: 'echart_map_world',
            id: 'echart_map_world',
            path: '/echart/map/world',
            title: 'menu.name._echart.map.world',
            module: worldMap
          }
        ]
      },
      {
        key: 'echart_radar',
        id: 'echart_radar',
        path: '/echart/radar',
        title: 'menu.name._echart.radar',
        children: [
          {
            key: 'echart_radar_basis',
            id: 'echart_radar_basis',
            path: '/echart/radar/basis',
            title: 'menu.name._echart.radar.basis',
            module: BasisRadar
          },
          {
            key: 'echart_radar_muliple',
            id: 'echart_radar_muliple',
            path: '/echart/radar/muliple',
            title: 'menu.name._echart.radar.multiple',
            module: MulipleRadar
          }
        ]
      },
      {
        key: 'echart_bar',
        id: 'echart_bar',
        path: '/echart/bar',
        title: 'menu.name._echart.bar',
        children: [
          {
            key: 'echart_bar_progress',
            id: 'echart_bar_progress',
            path: '/echart/bar/progress',
            title: 'menu.name._echart.bar.progress',
            module: ProgressBar
          },
        ]
      },
      {
        key: 'echart_graph',
        id: 'echart_graph',
        path: '/echart/graph',
        title: 'menu.name._echart.graph',
        children: [
          {
            key: 'echart_graph_tradeFlyLine',
            id: 'echart_graph_tradeFlyLine',
            path: '/echart/graph/tradeFlyLine',
            title: 'menu.name._echart.graph.tradeFlyLine',
            module: TradeFlyLine
          },
        ]
      }
    ]
  }
]
