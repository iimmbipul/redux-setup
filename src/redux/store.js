import {createStore,combineReducers} from "redux";
import audio from './reducers/store1';
import video from './reducers/store2';

const rootReducer = combineReducers({
    audio:audio,
    video:video
})

export default createStore(rootReducer);