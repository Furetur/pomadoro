import React from 'react';
import Project from '../../models/Project';
import ProjectListItemActions from '../ProjectsList/ProjectListItemActions';
import './ProjectCompactCard.css';

interface Props {
	project: Project;
	onOpenFullCard: () => void;
}

const ProjectCompactCard = ({project, onOpenFullCard}: Props) => {
	return (
		<div className="project-compact-card">
			<div className="project-compact-card-name" onClick={onOpenFullCard}>
				<span>{project.name}</span>
			</div>
			<ProjectListItemActions project={project} />
		</div>
	);
};

export default ProjectCompactCard;
