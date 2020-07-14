import React, {ReactElement} from 'react';
import TimerTemplate from '../../models/templates/TimerTemplate';
import {useObserver} from 'mobx-react';
import {Radio, Slider, Col, Row} from 'antd';

interface Props {
	timerTemplate: TimerTemplate;
}

export default function TimerTemplateEditor({
	timerTemplate
}: Props): ReactElement {
	return useObserver(() => (
		<Row style={{width: '100%'}}>
			<Col span={10}>
				<Radio.Group
					size="small"
					value={timerTemplate.type}
					onChange={(event) => timerTemplate.updateType(event.target.value)}
				>
					<Radio.Button value="work">Work</Radio.Button>
					<Radio.Button value="rest">Rest</Radio.Button>
				</Radio.Group>
			</Col>
			<Col span={14}>
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
					defaultValue={20}
					onChange={(value) => timerTemplate.updateDuration(value)}
				/>
			</Col>
		</Row>
	));
}
