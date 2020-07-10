import React, {ReactElement} from 'react';
import mainStoreContext, {mainStore} from './context/MainStoreContext';
import ProjectsList from './components/ProjectsList/ProjectsList';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AddProjectField from './components/ProjectsList/AddProjectField';
import AddProjectButton from './components/ProjectsList/AddProjectButton';

const App = (): ReactElement => {
	return (
		<mainStoreContext.Provider value={mainStore}>
			<Header />
			<Main />
			<ProjectsList />
		</mainStoreContext.Provider>
	);
};

export default App;
