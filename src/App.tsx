import React, {ReactElement} from 'react';
import mainStoreContext, {mainStore} from './context/MainStoreContext';
import ProjectsList from './components/ProjectsList/ProjectsList';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AddProjectField from './components/ProjectsList/AddProjectField';
import AddProjectButton from './components/ProjectsList/AddProjectButton';
import 'antd/dist/antd.css';
import {Layout, Typography, Row, Col} from 'antd';
import MainTimer from './components/MainTimer/MainTimer';

const App = (): ReactElement => {
	return (
		<mainStoreContext.Provider value={mainStore}>
			<Layout>
				<Layout.Header>
					<Typography style={{color: 'white'}}>Pomadoro</Typography>
				</Layout.Header>
				<Layout.Content>
					<Row justify="center" align="middle" style={{height: '60vh'}}>
						<Col>
							<MainTimer />
						</Col>
					</Row>
					<ProjectsList />
				</Layout.Content>
			</Layout>
		</mainStoreContext.Provider>
	);
};

export default App;
