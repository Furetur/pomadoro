import React, {ReactElement} from 'react';
import TimerTemplate, {TimerType} from '../../models/templates/TimerTemplate';
import {useObserver} from 'mobx-react';
import Select from 'react-select';
import {Radio, Slider} from 'antd';

interface Props {
	timerTemplate: TimerTemplate;
}

const options = [
	{value: 'work', label: 'Work'},
	{value: 'rest', label: 'Rest'}
];

export default function TimerTemplateEditor({
	timerTemplate
}: Props): ReactElement {
	return useObserver(() => (
		<div>
			<Radio.Group
				value={timerTemplate.type}
				onChange={(event) => timerTemplate.updateType(event.target.value)}
			>
				<Radio.Button value="work">Work</Radio.Button>
				<Radio.Button value="rest">Rest</Radio.Button>
			</Radio.Group>
			{/* <Select
				value={options.find((option) => option.value === timerTemplate.type)}
				options={options}
				onChange={(option: {value: string}) =>
					timerTemplate.updateType(option.value as TimerType)
				}
			/> */}
			<Slider
				tooltipVisible
				min={1}
				max={100}
				defaultValue={20}
				onChange={(value) => timerTemplate.updateDuration(value)}
			/>
			{/* <input
				type="number"
				name="duration"
				value={timerTemplate.duration}
				onChange={(event) =>
					timerTemplate.updateDuration(Number.parseInt(event.target.value, 10))
				}
			/> */}
		</div>
	));
}
