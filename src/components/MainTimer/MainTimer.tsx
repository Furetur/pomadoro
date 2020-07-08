import React, {ReactElement, useContext} from 'react';
import TimerWatchFace from './TimerWatchFace';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import MainTimerActions from './MainTimerActions';

export default function MainTimer(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div>
			<TimerWatchFace timer={mainStore.currentTimer} />
			<MainTimerActions />
		</div>
	));
}
