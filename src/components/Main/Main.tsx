import React, {ReactElement} from 'react';
import ProjectTopBar from '../Project/ProjectTopBar';
import MainTimer from '../MainTimer/MainTimer';
import './Main.css';

const Main = (): ReactElement => {
	return (
		<main>
			<MainTimer />
		</main>
	);
};

export default Main;
