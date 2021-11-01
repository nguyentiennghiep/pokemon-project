// import axios from "axios";
const axios = require('axios')
const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
    headers: {}
});

instance.get("pokemon/1/").then((data)=>{
    console.log(data);
})

export default instance;