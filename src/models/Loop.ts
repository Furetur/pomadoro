import {observable, computed, action} from 'mobx';
import Timer from './Timer';
import LoopTemplate from './templates/LoopTemplate';

export default class Loop {
	@observable timers: Timer[];
	@observable currentTimerIndex = 0;

	constructor(timers: Timer[]) {
		this.timers = timers;
	}

	static fromTemplate(template: LoopTemplate): Loop {
		const timers = template.timerTemplates.map(
			(template) => new Timer(template)
		);
		return new Loop(timers);
	}

	@computed
	get currentTimer() {
		return this.timers[this.currentTimerIndex];
	}

	@computed
	get isFirstTimer() {
		return this.currentTimerIndex === 0;
	}

	@computed
	get isLastTimer() {
		return this.currentTimerIndex === this.timers.length - 1;
	}

	@action
	switchToNextTimer() {
		if (this.isLastTimer) {
			throw new Error('This is the last timer, can not switch to the next one');
		}

		this.currentTimerIndex += 1;
	}

	@action
	switchToPreviousTimer() {
		if (this.isFirstTimer) {
			throw new Error(
				'This is the first timer, can not switch to the previous one'
			);
		}

		this.currentTimerIndex -= 1;
	}
}
