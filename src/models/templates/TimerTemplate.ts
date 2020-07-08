import {observable, action} from 'mobx';

export type TimerType = 'work' | 'rest';
export default class TimerTemplate {
	@observable type: TimerType;
	@observable duration: number;
	id: number;

	constructor(id: number, type: TimerType, duration: number) {
		this.type = type;
		this.duration = duration;
	}

	@action
	updateType(type: TimerType) {
		this.type = type;
	}

	@action
	updateDuration(duration: number) {
		this.duration = duration;
	}

	clone(newId: number = this.id) {
		return new TimerTemplate(newId, this.type, this.duration);
	}
}

export const defaultWorkTimerTemplate = new TimerTemplate(0, 'work', 10);
export const defaultRestTimerTemplate = new TimerTemplate(1, 'rest', 5);
