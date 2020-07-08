import {createContext} from 'react';
import MainStore from '../stores/MainStore';
import Timer from '../models/Timer';

const timer = new Timer(100);

export const mainStore = new MainStore(timer);

const mainStoreContext = createContext<MainStore>(mainStore);

export default mainStoreContext;
