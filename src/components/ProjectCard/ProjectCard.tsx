import React from 'react';
import InlineEditableField from '../InlineEditableField/InlineEditableField';
import Project from '../../models/Project';
import {useObserver} from 'mobx-react';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';
import ProjectListItemActions from '../ProjectsList/ProjectListItemActions';
import ProjectCardHeader from './ProjectCardHeader';

interface Props {
	project: Project;
}

const ProjectCard = ({project}: Props) => {
	return useObserver(() => (
		<div>
			<ProjectCardHeader project={project} />
			<LoopTemplateEditor loopTemplate={project.loopTemplate} />
		</div>
	));
};

export default ProjectCard;
