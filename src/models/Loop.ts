import {observable, computed, action} from 'mobx';
import Timer from './Timer';
import LoopTemplate from './templates/LoopTemplate';

export default class Loop {
	@observable loopTemplate: LoopTemplate;
	@observable currentTimer: Timer;
	@observable currentTimerIndex = 0;

	constructor(loopTemplate: LoopTemplate) {
		if (loopTemplate.timerTemplates.length === 0) {
			throw new Error('Received loop template with no timer templates');
		}

		this.loopTemplate = loopTemplate;
		this.currentTimer = new Timer(this.loopTemplate.timerTemplates[0]);
	}

	@computed
	get timersNumber() {
		return this.loopTemplate.timerTemplates.length;
	}

	@computed
	get isFirstTimer() {
		return this.currentTimerIndex === 0;
	}

	@computed
	get isLastTimer() {
		return this.currentTimerIndex === this.timersNumber - 1;
	}

	@action
	switchTimer(newTimerIndex: number) {
		const timerTemplate = this.loopTemplate.timerTemplates[newTimerIndex];
		if (timerTemplate === undefined || timerTemplate === null) {
			throw new Error(
				`Timer template with index ${newTimerIndex} does not exist`
			);
		}

		this.currentTimerIndex = newTimerIndex;
		this.currentTimer = new Timer(timerTemplate);
	}

	@action
	switchToNextTimer() {
		// TODO: when user removes certain timers and then switches to the next timer, the outcome is not obvious
		const nextTimerIndex = (this.currentTimerIndex + 1) % this.timersNumber;
		this.switchTimer(nextTimerIndex);
	}
}
