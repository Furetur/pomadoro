import {observable, action} from 'mobx';
import LoopTemplate from './templates/LoopTemplate';

export default class Project {
	@observable name: string;
	@observable totalCompletedSeconds = 0;
	@observable loopTemplate: LoopTemplate;
	id: number;

	constructor(id: number, name: string, template: LoopTemplate) {
		this.id = id;
		this.name = name;
		this.loopTemplate = template.clone();
	}

	@action
	setName(newName: string) {
		this.name = newName;
	}
}
