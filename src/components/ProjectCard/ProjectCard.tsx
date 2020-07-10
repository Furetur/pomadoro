import React from 'react';
import InlineEditableField from '../InlineEditableField/InlineEditableField';
import Project from '../../models/Project';
import {useObserver} from 'mobx-react';
import LoopTemplateEditor from '../LoopTemplateEditor/LoopTemplateEditor';
import ProjectListItemActions from '../ProjectsList/ProjectListItemActions';

interface Props {
	project: Project;
}

const ProjectCard = ({project}: Props) => {
	return useObserver(() => (
		<div>
			<InlineEditableField
				value={project.name}
				onValueUpdate={(newValue) => project.setName(newValue)}
			/>
			<ProjectListItemActions project={project} />
			<LoopTemplateEditor loopTemplate={project.loopTemplate} />
		</div>
	));
};

export default ProjectCard;
