import TimerTemplate, {
	defaultWorkTimerTemplate,
	defaultRestTimerTemplate
} from './TimerTemplate';
import {observable, action} from 'mobx';
import getIdGenerator from '../../utils/getIdGenerator';

export default class LoopTemplate {
	@observable timerTemplates: TimerTemplate[];

	_getNextId: () => number;

	constructor(timerTemplates: TimerTemplate[]) {
		this.timerTemplates = timerTemplates.map((timerTemplate) =>
			timerTemplate.clone()
		);
		const lastId = Math.max(
			...this.timerTemplates.map((timerTemplate) => timerTemplate.id)
		);
		this._getNextId = getIdGenerator(lastId + 1);
	}

	@action
	addTimer() {
		const nextId = this._getNextId();
		this.timerTemplates.push(defaultWorkTimerTemplate.clone(nextId));
	}

	@action
	deleteTimer(id: number) {
		this.timerTemplates = this.timerTemplates.filter(
			(timerTemplate) => timerTemplate.id !== id
		);
	}

	clone(): LoopTemplate {
		return new LoopTemplate(this.timerTemplates);
	}
}

export const defaultLoopTemplate = new LoopTemplate([
	defaultWorkTimerTemplate.clone(),
	defaultRestTimerTemplate.clone()
]);
