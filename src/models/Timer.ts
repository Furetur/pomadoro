import {observable, action, computed} from 'mobx';
import TimerTemplate from './templates/TimerTemplate';

export default class Timer {
	@observable duration: number;
	@observable completedSeconds = 0;

	constructor(duration: number) {
		this.duration = duration;
	}

	static fromTemplate(template: TimerTemplate): Timer {
		const {duration} = template;
		return new Timer(duration);
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
