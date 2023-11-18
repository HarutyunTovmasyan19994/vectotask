import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducer";

const persistConfig = {
    key: 'user',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer,composeWithDevTools() )
export let Storage = persistStore(store)
