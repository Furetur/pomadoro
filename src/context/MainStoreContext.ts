import {createContext} from 'react';
import MainStore from '../stores/MainStore';
import Loop from '../models/Loop';
import {defaultLoopTemplate} from '../models/templates/LoopTemplate';

export const mainStore = new MainStore(Loop.fromTemplate(defaultLoopTemplate));

const mainStoreContext = createContext<MainStore>(mainStore);

export default mainStoreContext;
