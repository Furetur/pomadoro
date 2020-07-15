import {useContext} from 'react';
import mainStoreContext from '../context/MainStoreContext';
import MainStore from '../stores/MainStore';

const useMainStore = (): MainStore => {
	return useContext(mainStoreContext);
};

export default useMainStore;
