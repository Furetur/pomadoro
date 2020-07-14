import React, {ReactElement} from 'react';
import LoopTemplate from '../../models/templates/LoopTemplate';
import {useObserver} from 'mobx-react';
import TimerTemplateEditor from './TimerTemplateEditor';
import {List, Button} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

interface Props {
	loopTemplate: LoopTemplate;
}

export default function LoopTemplateEditor({
	loopTemplate
}: Props): ReactElement {
	return useObserver(() => (
		<div>
			<Button
				shape="round"
				icon={<PlusCircleOutlined />}
				style={{marginBottom: '10px'}}
				onClick={(_) => loopTemplate.addTimer()}
			>
				Add a timer
			</Button>
			<List
				dataSource={loopTemplate.timerTemplates.slice()}
				renderItem={(timerTemplate) => (
					<List.Item>
						<TimerTemplateEditor
							timerTemplate={timerTemplate}
							loopTemplate={loopTemplate}
						/>
					</List.Item>
				)}
			/>
		</div>
	));
}
