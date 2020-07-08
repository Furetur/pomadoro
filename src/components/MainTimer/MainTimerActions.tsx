import React, {ReactElement, useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

export default function MainTimerActions(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div>
			<button type="button" onClick={() => mainStore.startTimer()}>
				Start
			</button>
			<button type="button" onClick={() => mainStore.stopTimer()}>
				Stop
			</button>
			<button type="button" onClick={() => mainStore.resetTimer()}>
				Reset
			</button>
			<button type="button" onClick={() => mainStore.switchToNextTimer()}>
				Next
			</button>
			<button type="button" onClick={() => mainStore.switchToPreviousTimer()}>
				Prev
			</button>
		</div>
	));
}
