import React, {useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

const AddProjectButton = () => {
	const mainStore = useContext(mainStoreContext);

	return useObserver(() => (
		<div>
			<button type="button" onClick={() => mainStore.addProject()}>
				Add a project
			</button>
		</div>
	));
};

export default AddProjectButton;
