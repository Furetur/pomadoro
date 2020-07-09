import React, {ReactElement, useContext} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import ProjectListItem from './ProjectListItem';

export default function ProjectsList(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<ul>
			{mainStore.projects.map((project) => (
				<ProjectListItem key={project.id} project={project} />
			))}
		</ul>
	));
}
