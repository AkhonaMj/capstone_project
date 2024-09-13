/*eslint-disable */
import { createStore } from "vuex";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import router from "@/router";
const { cookies } = useCookies();
axios.defaults.headers = cookies.get("token");

export default createStore({
  state: {
    userId: null,
    items: [],
    item: {},
    orders: [],
    login: [],
  },

  getters: {},
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setSingleItem(state, payload) {
      console.log('Setting Item:', payload); 
      state.item = payload;
  },
    setOrders(state, payload) {
      state.orders = payload;
    },
    addOrder(state, order) {
      state.orders.push(order);
    },
    setUserId(state, userId) {
      state.userId = userId; 
    },
  },
  actions: {
    async getApiData({ commit }) {
      try {
        let response = await fetch(
          "https://capstone-project-bwdc.onrender.com/items"
        );
        let convertedData = await response.json();
        commit("setItems", convertedData);
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    async getSingleItem({ commit }, id) {
      try {
          let response = await fetch(`https://capstone-project-bwdc.onrender.com/items/${id}`);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          let data = await response.json();
          console.log('Fetched Item:', data); 
          if (Array.isArray(data)) {
              data = data[0]; 
          }
          commit('setSingleItem', data); 
      } catch (error) {
          console.error('Error fetching single item:', error);
      }
  },

    async addOrder({ commit }, order) {
      console.log(order);

      try {
        const response = await axios.post(
          "https://capstone-project-bwdc.onrender.com/orders/addOrder",
          order,
          { withCredentials: true }
        );

        const newOrder = response.data;
        console.log(newOrder);

        commit("addOrder", newOrder);
      } catch (error) {
        console.error(
          "Error adding order:",
          error.response?.data || error.message
        );
      }
    },

    async register({ commit }, info) {
      try {
        console.log(info);
        let { data } = await axios.post(
          "https://capstone-project-bwdc.onrender.com/users/register",
          info
        );

        console.log("Registration successful:", data);
      } catch (error) {
        console.error(
          "Registration failed:",
          error.response ? error.response.data : error.message
        );
      }
    },

    async loginUser({ commit }, info) {
      console.log(info);
      try {
        let { data } = await axios.post(
          "https://capstone-project-bwdc.onrender.com/users/login",
          info
        );
        cookies.set("token", data.token);
        if (data.token) {
          commit("setUserId", data.userId); 
          router.push({ name: "services" });
        }
      } catch (error) {
        console.error(
          "Login failed:",
          error.response ? error.response.data : error.message
        );
      }
    },

    async getUserProfile(){
      try {
        let response = await fetch(
          `https://capstone-project-bwdc.onrender.com/users/${id}`
        );
        let convertedData = await response.json();
        commit("setUserId", convertedData);
      } catch (error) {
        console.error("API Error:", error);
      }

    }
  },
  modules: {},
});