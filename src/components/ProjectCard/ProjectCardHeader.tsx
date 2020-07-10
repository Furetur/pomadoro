import React from 'react';
import InlineEditableField from '../InlineEditableField/InlineEditableField';
import Project from '../../models/Project';
import './ProjectCardHeader.css';
import ProjectListItemActions from '../ProjectsList/ProjectListItemActions';
import {useObserver} from 'mobx-react';

interface Props {
	project: Project;
}

const ProjectCardHeader = ({project}: Props) => {
	return useObserver(() => (
		<div className="project-card-header">
			<div className="project-card-header-name">
				<InlineEditableField
					value={project.name}
					onValueUpdate={(newValue) => project.setName(newValue)}
				/>
			</div>
			<div className="project-card-header-buttons">
				<ProjectListItemActions project={project} />
			</div>
		</div>
	));
};

export default ProjectCardHeader;
