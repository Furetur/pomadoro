import React, {ReactElement, useContext} from 'react';
import TimerWatchFace from './TimerWatchFace';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import MainTimerActions from './MainTimerActions';
import {Row, Col, Typography} from 'antd';
import ProjectTopBar from '../Project/ProjectTopBar';
import formatSeconds from '../../utils/formatSeconds';
import styled from 'styled-components';

const ApproximatelyCenterVertically = styled.div`
	margin-top: 30vh;
`;

export default function MainTimer(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<>
			<Row justify="center">
				<Col>
					<ProjectTopBar />
				</Col>
			</Row>
			<Row justify="center">
				<Col>
					<TimerWatchFace timer={mainStore.currentTimer} />
				</Col>
			</Row>
			<Row justify="center">
				<MainTimerActions />
			</Row>
		</>
	));
}
