import { createStore } from 'redux';
import storage from 'redux-persist/es/storage';
import MyPokemonReducer from './MyPokemon/reducers';
import { persistStore, persistCombineReducers } from 'redux-persist';

const config = {
    key: "primary",
    storage
}

const rootReducer = {
    MyPokemonReducer,
}

let persistedReducer = persistCombineReducers(config, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {
        store,
        persistor
    }
}