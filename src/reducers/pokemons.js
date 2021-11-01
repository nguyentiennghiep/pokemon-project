import {FETCH_POKEMONS} from '../constants/';
let initState = [];

export const pokemonsReducer = (state,action) =>{
    console.log(action.payload);
    switch(action.type){
        case FETCH_POKEMONS:
            return action.payload;
        default: 
            return initState;
    }
}