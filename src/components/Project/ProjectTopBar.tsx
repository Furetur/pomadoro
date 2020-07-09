import React, {ReactElement, useContext} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';

export default function ProjectTopBar(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="project-top-bar">
			<span className="project-badge" />
			<span className="project-name">
				{mainStore.currentProject?.name || 'No project selected'}
			</span>
		</div>
	));
}
