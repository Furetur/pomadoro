import TimerTemplate, {
	defaultWorkTimerTemplate,
	defaultRestTimerTemplate
} from './TimerTemplate';
import {observable, action} from 'mobx';
import getIdGenerator from '../../utils/getIdGenerator';

export default class LoopTemplate {
	@observable timerTemplates: TimerTemplate[] = [
		defaultWorkTimerTemplate.clone(),
		defaultRestTimerTemplate.clone()
	];

	_getNextId: () => number;

	constructor() {
		this._getNextId = getIdGenerator(2);
	}

	@action
	addTimer() {
		const nextId = this._getNextId();
		this.timerTemplates.push(defaultWorkTimerTemplate.clone(nextId));
	}
}

export const defaultLoopTemplate = new LoopTemplate();
