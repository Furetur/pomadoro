import React, {useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';
import Project from '../../models/Project';
import {Button} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';

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
		<Button
			type="primary"
			shape="round"
			icon={<PlusCircleTwoTone />}
			onClick={onClick}
		>
			Add a project
		</Button>
		// <div>
		// 	<button type="button" onClick={onClick}>
		// 		+
		// 	</button>
		// </div>
	));
};

export default AddProjectButton;
