import { configureStore } from '@reduxjs/toolkit'
// import {incremented,decremented} from '@/redux/reducers/CountReducer'
import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer });

export default store;
