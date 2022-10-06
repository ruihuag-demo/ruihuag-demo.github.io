import WorldMapPage from './demo1'
import WorldMapPage2 from './demo2'

export default [
  {
    key: 'test_world_map',
    id: 'test_world_map',
    path: '/worldMap',
    title: 'test.menu.map',
    icon: 'VideoCameraOutlined',
    children: [
      {
        key: 'test_world_map_2',
        id: 'test_world_map_2',
        path: '/worldMap/demo2',
        title: 'test.menu.map',
        module: WorldMapPage2
      },
      {
        key: 'test_world_map_1',
        id: 'test_world_map_1',
        path: '/worldMap/demo1',
        title: 'test.menu.map',
        module: WorldMapPage
      }
    ]
  },

]
