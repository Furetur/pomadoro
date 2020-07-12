import React, {ReactElement, useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

import './MainTimerActions.css';
import {Button, Space, Row, Col, Popconfirm} from 'antd';
import {
	PlayCircleOutlined,
	StopOutlined,
	StepForwardOutlined,
	PauseCircleTwoTone
} from '@ant-design/icons';

const LoopActions = () => {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="loop-actions">
			<Button onClick={() => mainStore.switchToPreviousTimer()}>Prev</Button>
			<Button onClick={() => mainStore.switchToNextTimer()}>Next</Button>
		</div>
	));
};

const CurrentTimerActions = (): ReactElement => {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		// <Row>
		// 	<Col span={8}>
		// 		<Button
		// 			icon={<StopOutlined />}
		// 			shape="circle-outline"
		// 			onClick={() => mainStore.resetTimer()}
		// 		/>
		// 	</Col>
		// 	<Col span={8}>
		// 		<Button
		// 			type="primary"
		// 			icon={<PlayCircleOutlined />}
		// 			shape="circle-outline"
		// 			size="large"
		// 			onClick={() => mainStore.startTimer()}
		// 		/>
		// 	</Col>
		// 	<Col span={8}>
		// 		<Button
		// 			icon={<StepForwardOutlined />}
		// 			shape="circle-outline"
		// 			onClick={() => mainStore.switchToNextTimer()}
		// 		/>
		// 	</Col>
		// </Row>
		<Space align="center" size="large" direction="horizontal">
			<Popconfirm
				title="Are you sure you want to stop the timer"
				okText="Yes"
				cancelText="No"
				onConfirm={() => mainStore.resetTimer()}
			>
				<Button icon={<StopOutlined />} shape="circle-outline" />
			</Popconfirm>

			{mainStore.isTicking ? (
				<Button
					type="primary"
					icon={<PauseCircleTwoTone />}
					shape="circle-outline"
					size="large"
					onClick={() => mainStore.stopTimer()}
				/>
			) : (
				<Button
					type="primary"
					icon={<PlayCircleOutlined />}
					shape="circle-outline"
					size="large"
					onClick={() => mainStore.startTimer()}
				/>
			)}
			<Popconfirm
				title="Are you sure you want to stop the timer and continue to the next one"
				okText="Yes"
				cancelText="No"
				onConfirm={() => mainStore.switchToNextTimer()}
			>
				<Button
					icon={<StepForwardOutlined />}
					shape="circle-outline"
				/>
			</Popconfirm>
		</Space>
	));
};

export default function MainTimerActions(): ReactElement {
	return useObserver(() => <CurrentTimerActions />);
}
