import React, {ReactElement} from 'react';
import LoopTemplate from '../../models/templates/LoopTemplate';
import {useObserver} from 'mobx-react';
import TimerTemplateEditor from './TimerTemplateEditor';

interface Props {
	loopTemplate: LoopTemplate;
}

export default function LoopTemplateEditor({
	loopTemplate
}: Props): ReactElement {
	return useObserver(() => (
		<div>
			<button type="button" onClick={(_) => loopTemplate.addTimer()}>
				Add
			</button>
			<ul>
				{loopTemplate.timerTemplates.map((timerTemplate) => (
					<TimerTemplateEditor
						key={timerTemplate.id}
						timerTemplate={timerTemplate}
					/>
				))}
			</ul>
		</div>
	));
}
