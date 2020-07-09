import React, {ReactElement, useState, useContext} from 'react';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';

export default function AddProjectField(): ReactElement {
	const [name, setName] = useState('');
	const mainStore = useContext(mainStoreContext);

	const onSubmit = () => {
		mainStore.addProject(name);
	};

	return useObserver(() => (
		<div>
			<input
				type="text"
				placeholder="project name"
				onChange={(event) => setName(event.currentTarget.value)}
			/>
			<button type="button" onClick={onSubmit}>
				Submit
			</button>
		</div>
	));
}
