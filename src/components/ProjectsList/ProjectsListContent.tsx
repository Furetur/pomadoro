import React from 'react';
import {useObserver} from 'mobx-react';
import {Collapse, Typography, Button} from 'antd';
import useMainStore from '../../hooks/useMainStore';
import ProjectsListItem from './ProjectsListItem';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';
import { DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';

interface Props {
	editingProjectId: number;
	setEditingProjectId: (id: number) => void;
}

const ProjectsListContent = ({
	setEditingProjectId,
	editingProjectId
}: Props) => {
	const mainStore = useMainStore();
	return useObserver(() => (
		<Collapse
			accordion
			activeKey={editingProjectId === null ? null : editingProjectId.toString()}
			onChange={(newEditingProjectId) => {
				if (typeof newEditingProjectId === 'string') {
					const projectId = Number.parseInt(newEditingProjectId, 10);
					setEditingProjectId(projectId);
				} else {
					setEditingProjectId(null);
				}
			}}
		>
			{mainStore.projects.map((project) => (
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
			))}
		</Collapse>
	));
};

export default ProjectsListContent;
