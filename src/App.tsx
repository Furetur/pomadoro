import React, {ReactElement} from 'react';
import mainStoreContext, {mainStore} from './context/MainStoreContext';
import MainTimer from './components/MainTimer/MainTimer';
import ProjectList from './components/ProjectList/ProjectList';
import AddProjectField from './components/ProjectList/AddProjectField';
import ProjectTopBar from './components/Project/ProjectTopBar';

const App = (): ReactElement => {
	return (
		<mainStoreContext.Provider value={mainStore}>
			<ProjectTopBar />
			<MainTimer />
			<AddProjectField />
			<ProjectList />
		</mainStoreContext.Provider>
	);
};

export default App;
