import React, {ReactElement, useContext, useState} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import AddProjectButton from './AddProjectButton';
import {Collapse, Col, Typography, Row} from 'antd';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';
import {PlayCircleOutlined} from '@ant-design/icons';

export default function ProjectsList(): ReactElement {
	const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
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
				activeKey={
					editingProjectId === null ? null : editingProjectId.toString()
				}
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
					</Collapse.Panel>
				))}
			</Collapse>
		</>
	));
}
