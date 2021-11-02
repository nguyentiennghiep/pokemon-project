import callApi from '../api/pokemonV2';
import { FETCH_POKEMONS ,LOAD_MORE} from '../constants';

const limit = 20;

export const fetchPokemons = () =>{
    let pokemons = []
    for(let i = 1 ;i<=limit;i++){
        let pokemon = callApi(`pokemon/${i}`)
        pokemons.push(pokemon);
    }
    return async (dispatch, getState) => {
        let response = await Promise.all(pokemons);
        dispatch({ type: FETCH_POKEMONS,payload:response})
    }
}

export const loadMorePokemons = (curr) =>{
    let pokemons = []
    for(let i = curr+1 ;i<curr+limit+1;i++){
        let pokemon = callApi(`pokemon/${i}`)
        pokemons.push(pokemon);
    }
    return async (dispatch, getState) => {
        let response = await Promise.all(pokemons);
        dispatch({ type: LOAD_MORE,payload:response})
    }
}