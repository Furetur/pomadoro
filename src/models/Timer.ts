import {observable, action, computed} from 'mobx';
import TimerTemplate from './templates/TimerTemplate';

export default class Timer {
	@observable type: string;
	@observable duration: number;
	@observable completedSeconds = 0;

	constructor(type: string, duration: number) {
		this.type = type;
		this.duration = duration;
	}

	static fromTemplate(template: TimerTemplate): Timer {
		return new Timer(template.type, template.duration);
	}

	@computed
	get isCompleted() {
		return this.completedSeconds === this.duration;
	}

	@action
	increment() {
		if (this.completedSeconds < this.duration) {
			this.completedSeconds += 1;
		} else {
			throw new Error('Tried to incremented a finished timer');
		}
	}

	@action
	reset() {
		this.completedSeconds = 0;
	}
}
