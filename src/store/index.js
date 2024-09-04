import { createStore } from 'vuex'




export default createStore({
  state: {
    items: []
  },
  getters: {
  },
  mutations: {
    setItems(state, payload){
      state.items = payload;
  }
},

actions: {
  async getApiData({ commit }) {
    try {
      let response = await fetch("https://capstone-project-bwdc.onrender.com/items");
      let convertedData= await response.json();
      console.log(convertedData); 
      commit('setItems', convertedData);
    } catch (error) {
      console.error("API Error:", error);
    }
  }
  
},
  modules: {
  }
})

