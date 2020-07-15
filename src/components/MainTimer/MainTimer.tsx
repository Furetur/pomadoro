import React, {ReactElement} from 'react';
import TimerWatchFace from './TimerWatchFace';
import {useObserver} from 'mobx-react';
import MainTimerActions from './MainTimerActions';
import {Row, Col} from 'antd';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import TimerType from './TimerType';
import useMainStore from '../../hooks/useMainStore';

export default function MainTimer(): ReactElement {
	const mainStore = useMainStore();
	return useObserver(() => (
		<>
			<Row justify="center" style={{marginBottom: '50px'}}>
				<Col>
					<ProjectSelector />
				</Col>
			</Row>
			<Row justify="center">
				<Col>
					<TimerType timer={mainStore.currentTimer} />
				</Col>
			</Row>
			<Row justify="center">
				<Col>
					<TimerWatchFace timer={mainStore.currentTimer} />
				</Col>
			</Row>
			<Row justify="center">
				<Col>
					<MainTimerActions />
				</Col>
			</Row>
		</>
	));
}
