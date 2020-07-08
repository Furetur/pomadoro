import React, {ReactElement} from 'react';
import {useObserver} from 'mobx-react';
import Timer from '../../models/Timer';

interface Props {
	timer: Timer;
}

export default function TimerWatchFace({timer}: Props): ReactElement {
	return useObserver(() => (
		<div>
			<div>Completed seconds: {timer.completedSeconds}</div>
			<div>Duration: {timer.duration}</div>
		</div>
	));
}
