import React, {ReactElement} from 'react';
import TimerTemplate from '../../models/templates/TimerTemplate';
import {useObserver} from 'mobx-react';
import {Radio, Slider, Col, Row, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import LoopTemplate from '../../models/templates/LoopTemplate';

interface Props {
	loopTemplate: LoopTemplate;
	timerTemplate: TimerTemplate;
}

export default function TimerTemplateEditor({
	timerTemplate,
	loopTemplate
}: Props): ReactElement {
	return useObserver(() => (
		<Row style={{width: '100%'}} align="middle">
			<Col span={8}>
				<Radio.Group
					size="small"
					value={timerTemplate.type}
					onChange={(event) => timerTemplate.updateType(event.target.value)}
				>
					<Radio.Button value="work">Work</Radio.Button>
					<Radio.Button value="rest">Rest</Radio.Button>
				</Radio.Group>
			</Col>
			<Col span={12}>
				<Slider
					tooltipVisible={false}
					marks={{
						0: '0',
						10: '10',
						20: '20',
						30: '30',
						40: '40',
						50: '50',
						60: '60'
					}}
					step={5}
					min={0}
					max={60}
					value={timerTemplate.duration}
					onChange={(value) => timerTemplate.updateDuration(value)}
				/>
			</Col>
			<Col span={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
				<Button
					danger
					icon={<DeleteOutlined />}
					shape="circle"
					onClick={() => {
						loopTemplate.deleteTimer(timerTemplate.id);
					}}
				/>
			</Col>
		</Row>
	));
}
