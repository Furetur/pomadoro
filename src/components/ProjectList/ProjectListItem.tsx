import React, {ReactElement} from 'react';
import Project from '../../models/Project';
import {useObserver} from 'mobx-react';
import ProjectListItemActions from './ProjectListItemActions';

interface Props {
	project: Project;
}

export default function ProjectListItem({project}: Props): ReactElement {
	return useObserver(() => (
		<div>
			Project name: {project.name}
			Total completed seconds: {project.totalCompletedSeconds}
			<ProjectListItemActions project={project} />
		</div>
	));
}
