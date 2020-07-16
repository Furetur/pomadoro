import React, {ReactElement, useState} from 'react';
import {useObserver} from 'mobx-react';
import ProjectsListHeader from './ProjectsListHeader';
import ProjectsListContent from './ProjectsListContent';

export default function ProjectsList(): ReactElement {
	const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
	return useObserver(() => (
		<>
			<ProjectsListHeader setEditingProjectId={setEditingProjectId} />
			<ProjectsListContent
				setEditingProjectId={setEditingProjectId}
				editingProjectId={editingProjectId}
			/>
		</>
	));
}
