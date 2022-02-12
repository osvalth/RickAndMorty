import { createStore } from 'vuex'
import { rickandmortyapi } from '../constants/constants'
export default createStore({
  state: {
    characters:[],
    characterFilters:[]
  },
  mutations: {
    setCharacters(state,payload){
      state.characters = payload;
    },
    setCharacterFilters(state,payload){
      state.characterFilters = payload;
    },
  },
  actions: {
    async getCharacters({commit}){
      try {
        const Response = await fetch(rickandmortyapi.characters,{
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        });
        const data = await Response.json();
        commit('setCharacters', data.results)
        commit('setCharacterFilters', data.results)
      }catch (e) {
        console.error(e);
      }
    }
  },
  modules: {
  }
})
