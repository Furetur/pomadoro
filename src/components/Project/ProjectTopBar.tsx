import React, {ReactElement, useContext} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';

export default function ProjectTopBar(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div>Project: {mainStore.currentProject?.name || 'None'}</div>
	));
}
