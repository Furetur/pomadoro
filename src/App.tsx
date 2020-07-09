import React, {ReactElement} from 'react';
import mainStoreContext, {mainStore} from './context/MainStoreContext';
import ProjectsList from './components/ProjectsList/ProjectsList';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AddProjectField from './components/ProjectsList/AddProjectField';

const App = (): ReactElement => {
	return (
		<mainStoreContext.Provider value={mainStore}>
			<Header />
			<Main />
			<section className="project-list-section">
				<AddProjectField />
				<ProjectsList />
			</section>
		</mainStoreContext.Provider>
	);
};

export default App;
