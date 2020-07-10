import React, {ReactElement, useContext, useState} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectListItem from './ProjectListItem';

export default function ProjectsList(): ReactElement {
	const [editingProjectId, setEditingProjectId] = useState(null);
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<ul>
			{mainStore.projects.map((project) => (
				<ProjectListItem
					key={project.id}
					project={project}
					fullCard={project.id === editingProjectId}
					onEdit={() => setEditingProjectId(project.id)}
				/>
			))}
		</ul>
	));
}
