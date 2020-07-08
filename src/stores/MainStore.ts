import {observable, action, computed} from 'mobx';
import Timer from '../models/Timer';

export default class MainStore {
	@observable currentTimer: Timer;

	@observable _intervalId: number | null = null;

	constructor(timer: Timer) {
		this.currentTimer = timer;
	}

	@computed
	get isTicking() {
		return this._intervalId !== null;
	}

	@action
	startTimer() {
		if (this._intervalId !== null) {
			throw new Error('Timer has already started');
		}

		this._intervalId = window.setInterval(() => {
			this.currentTimer.increment();
		}, 1000);
	}

	@action
	stopTimer() {
		if (this._intervalId === null) {
			throw new Error('Timer has already been stopped');
		}

		window.clearInterval(this._intervalId);
		this._intervalId = null;
	}

	@action
	resetTimer() {
		this.currentTimer.reset();
	}
}
