import React, {ReactElement, useContext} from 'react';
import Project from '../../models/Project';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

interface Props {
	project: Project;
}

export default function ProjectListItemActions({project}: Props): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="project-list-item-buttons">
			{mainStore.isTicking ? (
				<button type="button" onClick={() => mainStore.switchProject(project)}>
					Switch
				</button>
			) : (
				<button
					type="button"
					onClick={() => mainStore.startProjectLoop(project)}
				>
					Track
				</button>
			)}
		</div>
	));
}
