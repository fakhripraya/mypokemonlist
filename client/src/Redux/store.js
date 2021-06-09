import { combineReducers, createStore } from 'redux'
import MyPokemonReducer from './MyPokemon/reducers'

const rootReducer = combineReducers({
    MyPokemonReducer,
})

const store = createStore(rootReducer);

export default store;