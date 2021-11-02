import {FETCH_POKEMONS, LOAD_MORE} from '../constants/';
let initState = {
    current: 0,
    pokemons: []
};

export const pokemonsReducer = (state, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            let pokemons = action.payload.map((response) => {
                return response.data;
            })
            return {
                current: pokemons.length,
                pokemons: pokemons
            };
        case LOAD_MORE:
            let loadMorePokemons = action.payload.map((response) => {
                return response.data;
            })
            return {
                current: [...state.pokemons,...loadMorePokemons].length,
                pokemons: [...state.pokemons,...loadMorePokemons]
            };
        default:
            return initState;
    }
}