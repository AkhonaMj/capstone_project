import { createStore } from 'vuex';

export default createStore({
  state: {
    items: [],
    orders: []
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
      try {
        // Assuming your API endpoint is: POST /orders/addOrder
        const response = await fetch("https://capstone-project-bwdc.onrender.com/orders/addOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });
        
        const newOrder = await response.json();
        commit('addOrder', newOrder);
      } catch (error) {
        console.error("Error adding order:", error);
      }
    }
  },
  modules: {}
});
