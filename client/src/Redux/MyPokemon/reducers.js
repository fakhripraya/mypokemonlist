import { MY_POKEMON } from './types'

const myPokemonState = {
    myPokemons: [],
}

const MyPokemonReducer = (state = myPokemonState, action) => {
    switch (action.type) {
        case MY_POKEMON: return {
            ...state,
            myPokemons: action.newArray
        }
        default: return state
    }
}

export default MyPokemonReducer;