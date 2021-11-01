import callApi from '../api/pokemonV2';
import { FETCH_POKEMONS } from '../constants';

export const fetchPokemons = () =>{
    return async (dispatch, getState) => {
        let response = await callApi('pokemon/1');
        dispatch({ type: "FETCH_POKEMONS",payload:response.data})
    }
}