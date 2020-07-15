import React from 'react';
import Timer from '../../models/Timer';
import {Typography} from 'antd';
import {useObserver} from 'mobx-react';

interface Props {
	timer: Timer;
}

const TimerType = ({timer}: Props) => {
	return useObserver(() => (
		<Typography.Text style={{textTransform: 'uppercase'}}>
			{timer.type}
		</Typography.Text>
	));
};

export default TimerType;
