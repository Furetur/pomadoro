import React, {useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';
import Project from '../../models/Project';

interface Props {
	onAddProject: (project: Project) => void;
}

const AddProjectButton = ({onAddProject}: Props) => {
	const mainStore = useContext(mainStoreContext);

	const onClick = () => {
		const project = mainStore.addProject();
		onAddProject(project);
	};

	return useObserver(() => (
		<div>
			<button type="button" onClick={onClick}>
				+
			</button>
		</div>
	));
};

export default AddProjectButton;
