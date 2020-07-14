import {observable, action, computed} from 'mobx';
import TimerTemplate from './templates/TimerTemplate';

export default class Timer {
	@observable template: TimerTemplate;
	@observable completedSeconds = 0;

	constructor(template: TimerTemplate) {
		this.template = template;
	}

	@computed
	get type(): string {
		return this.template.type;
	}

	@computed
	get duration(): number {
		return this.template.duration;
	}

	@computed
	get isCompleted() {
		return this.completedSeconds === this.duration;
	}

	@computed
	get secondsRemaining() {
		return this.duration - this.completedSeconds;
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
