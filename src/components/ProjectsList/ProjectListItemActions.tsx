import React, {ReactElement, useContext} from 'react';
import Project from '../../models/Project';
import mainStoreContext from '../../context/MainStoreContext';
import {useObserver} from 'mobx-react';
import {Button} from 'antd';
import {PlayCircleTwoTone, PlayCircleOutlined} from '@ant-design/icons';

interface Props {
	project: Project;
}

export default function ProjectListItemActions({project}: Props): ReactElement {
	const mainStore = useContext(mainStoreContext);
	return useObserver(() => (
		<div className="project-list-item-buttons">
			{mainStore.isTicking ? (
				<Button
					shape="circle"
					icon={<PlayCircleOutlined />}
					onClick={() => mainStore.switchProject(project)}
				 />
			) : (
				<Button
					shape="circle"
					icon={<PlayCircleOutlined />}
					onClick={() => mainStore.startProjectLoop(project)}
				 />
			)}
		</div>
	));
}
