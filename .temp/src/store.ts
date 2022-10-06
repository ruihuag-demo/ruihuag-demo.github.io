import AppStore from "./modules/app/store"
import TestStore from "./modules/demo/store"
import LoginStore from './modules/login/store'
import CourseListStore from './modules/courseList/store'

export default {
	AppStore: new AppStore(),
	LoginStore: new LoginStore(),
	TestStore,
	CourseListStore,
}
