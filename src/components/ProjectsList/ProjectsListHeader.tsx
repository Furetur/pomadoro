import React from 'react';
import {Row, Col, Typography} from 'antd';
import AddProjectButton from './AddProjectButton';

interface Props {
	setEditingProjectId: (id: number) => void;
}

const ProjectsListHeader = ({setEditingProjectId}: Props) => {
	return (
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
		</>
	);
};

export default ProjectsListHeader;
