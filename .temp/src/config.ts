import AppStore from './modules/app/store'
import TestStore from './modules/demo/store'
import LoginStore from './modules/login/store'
import CourseListStore from './modules/courseList/store'

// import echartRouter from './modules/echart/router'
import PreviewComRouter from './modules/previewCom/router'
// import filterRouter from './modules/filterTest/router'
import mobxRouter from './modules/mobx/router'
// import worldRouter from './modules/worldMap/router'
import demoRouter from './modules/demo/router'
import courseListRouter from './modules/courseList/router'

export const AllStore: any = {
  AppStore: new AppStore(),
  LoginStore: new LoginStore(),
  TestStore,
  CourseListStore,
}

export const AllModule: { [key: string]: any } = {
  // echart: echartRouter,
  previewCom: PreviewComRouter,
  // filterTest: filterRouter,
  mobx: mobxRouter,
  // worldMap: worldRouter,
  demo: demoRouter,
  courseList: courseListRouter
}
