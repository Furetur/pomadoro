import React, {ReactElement} from 'react';
import {useObserver} from 'mobx-react';
import Timer from '../../models/Timer';
import './TimerWatchFace.css';
import formatSeconds from '../../utils/formatSeconds';
import ProjectTopBar from '../Project/ProjectTopBar';

interface Props {
	timer: Timer;
}

export default function TimerWatchFace({timer}: Props): ReactElement {
	return useObserver(() => (
		<div className="timer-watch-face">
			<div className="timer-watch-face-content">
				<ProjectTopBar />
				<div className="main-timer-type">{timer.type}</div>
				<div className="main-timer-digits">
					{formatSeconds(timer.secondsRemaining)}
				</div>
			</div>
		</div>
	));
}
