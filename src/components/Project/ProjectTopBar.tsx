import React, {ReactElement, useContext} from 'react';
import {useObserver} from 'mobx-react';
import mainStoreContext from '../../context/MainStoreContext';
import {Badge} from 'antd';

export default function ProjectTopBar(): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<Badge
			color="geekblue"
			text={mainStore.currentProject?.name || 'No project selected'}
		/>
	));
}
