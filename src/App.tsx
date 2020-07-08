import React, {ReactElement} from 'react';
import mainStoreContext, {mainStore} from './context/MainStoreContext';
import MainTimer from './components/MainTimer/MainTimer';

const App = (): ReactElement => {
	return (
		<mainStoreContext.Provider value={mainStore}>
			<MainTimer />
		</mainStoreContext.Provider>
	);
};

export default App;
