import React, {ReactElement, useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

import './MainTimerActions.css';

const LoopActions = () => {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="loop-actions">
			<button type="button" onClick={() => mainStore.switchToPreviousTimer()}>
				Prev
			</button>
			<button type="button" onClick={() => mainStore.switchToNextTimer()}>
				Next
			</button>
		</div>
	));
};

const CurrentTimerActions = (): ReactElement => {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="current-timer-actions">
			{mainStore.isTicking ? (
				<button type="button" onClick={() => mainStore.stopTimer()}>
					Stop
				</button>
			) : (
				<>
					<button type="button" onClick={() => mainStore.startTimer()}>
						Start
					</button>
					<button type="button" onClick={() => mainStore.resetTimer()}>
						Reset
					</button>
				</>
			)}
		</div>
	));
};

export default function MainTimerActions(): ReactElement {
	return useObserver(() => (
		<div className="timer-actions">
			<CurrentTimerActions />
			<LoopActions />
		</div>
	));
}
