import React from 'react';
import {Collapse, Typography, Button} from 'antd';
import Project from '../../models/Project';
import {useObserver} from 'mobx-react';
import useMainStore from '../../hooks/useMainStore';
import {PlayCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';

interface Props {
	project: Project;
	editingProjectId: number;
	setEditingProjectId: (id: number) => void;
}

const ProjectsListItem = ({
	project,
	editingProjectId,
	setEditingProjectId
}: Props) => {
	const mainStore = useMainStore();
	return useObserver(() => (
		<Collapse.Panel
			key={project.id}
			showArrow={false}
			header={
				<Typography.Text
					editable={
						project.id === editingProjectId && {
							onChange: (string) => project.setName(string)
						}
					}
				>
					{project.name}
				</Typography.Text>
			}
			extra={
				<PlayCircleOutlined
					onClick={(event) => {
						event.stopPropagation();
						mainStore.switchProject(project);
					}}
				/>
			}
		>
			<LoopTemplateEditor loopTemplate={project.loopTemplate} />
			<Button
				danger
				icon={<DeleteOutlined />}
				shape="round"
				onClick={() => {
					setEditingProjectId(null);
					mainStore.deleteProject(project.id);
				}}
			>
				Delete project
			</Button>
		</Collapse.Panel>
	));
};

export default ProjectsListItem;
