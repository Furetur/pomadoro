import React, {ReactElement, useContext, useState} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectListItem from './ProjectListItem';
import AddProjectButton from './AddProjectButton';
import './ProjectsList.css';
import {List, Collapse, Col, Typography, Row, Space} from 'antd';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';
import ProjectListItemActions from './ProjectListItemActions';

export default function ProjectsList(): ReactElement {
	const [editingProjectId, setEditingProjectId] = useState(null);
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<>
			<Row justify="center">
				<Col>
					<Typography.Title level={2}>Projects</Typography.Title>
				</Col>
			</Row>
			<Row justify="center" style={{marginBottom: '30px'}}>
				<Col>
					<AddProjectButton
						onAddProject={(project) => setEditingProjectId(project.id)}
					/>
				</Col>
			</Row>
			<Collapse
				accordion
				activeKey={editingProjectId}
				onChange={(newEditingProjectId) =>
					setEditingProjectId(
						Number.parseInt(newEditingProjectId as string, 10)
					)
				}
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
						extra={<ProjectListItemActions project={project} />}
					>
						<LoopTemplateEditor loopTemplate={project.loopTemplate} />
					</Collapse.Panel>
				))}
			</Collapse>
		</>
	));
}
