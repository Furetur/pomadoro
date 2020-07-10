import React, {ReactElement, useContext} from 'react';
import Project from '../../models/Project';
import {useObserver} from 'mobx-react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCompactCard from '../ProjectCard/ProjectCompactCard';

interface Props {
	project: Project;
	fullCard: boolean;
	onEdit: () => void;
}

export default function ProjectListItem({
	project,
	onEdit,
	fullCard
}: Props): ReactElement {
	return useObserver(() => (
		<li className="project-list-item">
			{fullCard ? (
				<ProjectCard project={project} />
			) : (
				<ProjectCompactCard project={project} onOpenFullCard={onEdit} />
			)}
		</li>
	));
}
