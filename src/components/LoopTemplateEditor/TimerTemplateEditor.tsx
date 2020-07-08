import React, {ReactElement} from 'react';
import TimerTemplate, {TimerType} from '../../models/templates/TimerTemplate';
import {useObserver} from 'mobx-react';
import Select from 'react-select';

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
			<Select
				value={options.find((option) => option.value === timerTemplate.type)}
				options={options}
                onChange={(option: {value: string}) =>
					timerTemplate.updateType(option.value as TimerType)
				}
			/>

			<input
				type="number"
				name="duration"
				value={timerTemplate.duration}
				onChange={(event) =>
					timerTemplate.updateDuration(Number.parseInt(event.target.value, 10))
				}
			/>
		</div>
	));
}
