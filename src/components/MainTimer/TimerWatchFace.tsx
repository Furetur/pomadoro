import React, {ReactElement} from 'react';
import {useObserver} from 'mobx-react';
import Timer from '../../models/Timer';
import formatSeconds from '../../utils/formatSeconds';
import {Typography} from 'antd';
import styled from 'styled-components';

interface Props {
	timer: Timer;
}

const BigText = styled.span`
	font-size: 3em;
`;

export default function TimerWatchFace({timer}: Props): ReactElement {
	return useObserver(() => (
		<Typography.Text>
			<BigText>{formatSeconds(timer.secondsRemaining)}</BigText>
		</Typography.Text>
	));
}
