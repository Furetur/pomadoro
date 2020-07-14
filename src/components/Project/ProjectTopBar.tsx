import React, {ReactElement, useContext} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import {Badge, Select} from 'antd';

export default function ProjectTopBar(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<Select
			bordered={false}
			value={
				mainStore.currentProject === null ? -1 : mainStore.currentProject.id
			}
			style={{width: '150px'}}
			onChange={(newProjectId) => {
				if (newProjectId === -1) {
					mainStore.unassignProject();
				} else {
					const project = mainStore.projects.find(
						(project) => project.id === newProjectId
					);
					if (project !== undefined) {
						mainStore.switchProject(project);
					}
				}
			}}
		>
			<Select.Option value={-1}>No project</Select.Option>
			{mainStore.projects.map((project) => (
				<Select.Option key={project.id} value={project.id}>
					<Badge color="geekblue" text={project.name} />
				</Select.Option>
			))}
		</Select>
	));
}
