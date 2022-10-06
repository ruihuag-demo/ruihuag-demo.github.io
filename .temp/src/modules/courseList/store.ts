import { observable, computed, action, makeObservable, runInAction, configure } from 'mobx';
import Common from '@/assets/common'

class CourseListStore extends Common.TableStore {
	constructor() {
		super();
		makeObservable(this);
		// this.queryService = queryService;
		// this.paramsAnalysis = paramsAnalysis;
	}
}

export default new CourseListStore()