import {observable, action, computed} from 'mobx';

export default class Timer {
	@observable duration: number;
	@observable completedSeconds = 0;

	constructor(duration: number) {
		this.duration = duration;
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
