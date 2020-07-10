import React, {ReactElement, useContext, useState} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectListItem from './ProjectListItem';
import AddProjectButton from './AddProjectButton';
import './ProjectsList.css';
import RightAllignedHorizontalList from '../RightAllignedHorizontalList/RightAllignedHorizontalList';
import FancyList from '../FancyList/FancyList';

export default function ProjectsList(): ReactElement {
	const [editingProjectId, setEditingProjectId] = useState(null);
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<section className="project-list-section">
			<RightAllignedHorizontalList>
				<li>
					<AddProjectButton
						onAddProject={(project) => setEditingProjectId(project.id)}
					/>
				</li>
			</RightAllignedHorizontalList>
			<FancyList>
				{mainStore.projects.map((project) => (
					<ProjectListItem
						key={project.id}
						project={project}
						fullCard={project.id === editingProjectId}
						onEdit={() => setEditingProjectId(project.id)}
					/>
				))}
			</FancyList>
		</section>
	));
}
