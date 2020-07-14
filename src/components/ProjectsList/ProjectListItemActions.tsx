import React, {ReactElement, useContext} from 'react';
import Project from '../../models/Project';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';
import {Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';

interface Props {
	project: Project;
}

export default function ProjectListItemActions({project}: Props): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() =>
		mainStore.isTicking ? (
			<PlayCircleOutlined
				onClick={(event) => {
					event.stopPropagation();
					mainStore.switchProject(project);
				}}
			/>
		) : (
			<PlayCircleOutlined
				onClick={(event) => {
					event.stopPropagation();
					mainStore.startProjectLoop(project);
				}}
			/>
		)
	);
}
