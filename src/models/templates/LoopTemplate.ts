import TimerTemplate, {defaultTimerTemplate} from './TimerTemplate';

export default interface LoopTemplate {
	timerTemplates: TimerTemplate[];
}

export const defaultLoopTemplate: LoopTemplate = {
	timerTemplates: [defaultTimerTemplate, {duration: 20}]
};
