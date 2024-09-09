/*eslint-disable */
import { createStore } from 'vuex';
import axios from 'axios';
import {useCookies} from 'vue3-cookies'
import router from '@/router';
const {cookies} = useCookies()
axios.defaults.headers = cookies.get('token')
export default createStore({
  state: {
    items: [],
    orders: [],
    login:[]
  },
  getters: {},
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setOrders(state, payload) {
      state.orders = payload;
    },
    addOrder(state, order) {
      state.orders.push(order);
    }
  },
  actions: {
    async getApiData({ commit }) {
      try {
        let response = await fetch("https://capstone-project-bwdc.onrender.com/items");
        let convertedData = await response.json();
        commit('setItems', convertedData);
      } catch (error) {
        console.error("API Error:", error);
      }
    },
    async addOrder({ commit }, order) {
      console.log(order);
      
      try {
        const response = await fetch("http://localhost:2001/orders/addOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });
        
        const newOrder = await response.json();
        console.log(newOrder);

        commit('addOrder', newOrder);
      } catch (error) {
        console.error("Error adding order:", error);
      }
    },


    // async register({commit}){
    //   let 
    // }

    async loginUser({commit},info){
      console.log(info)
      let {data} = await axios.post("https://capstone-project-bwdc.onrender.com/users/login",info)
      cookies.set('token',data.token)
      if(data.token){
        router.push({name: 'services'})
        
      }
    },

  },
  modules: {}
});
