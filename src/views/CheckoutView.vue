<template>
  <div>
    <h1>Checkout</h1>
    <div v-for="(order, index) in orders" :key="index" class="order-card">
      <div class="card">
        <img :src="order.item.itemUrl" alt="Item Image" class="card-img-top">
        <div class="card-body">
          <h2 class="card-title">{{ order.item.itemName }}</h2>
          <p>Date: {{ order.bookingDate }}</p>
          <p>Time: {{ order.bookingTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orders: []
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const token = localStorage.getItem('token');
        const userId = 1; // Fetch the user ID from a store or context
        const response = await axios.get(`/orders/getOrderByUser/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.orders = response.data;
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    }
  },
  mounted() {
    this.fetchOrders();
  }
};
</script>

<style scoped>
.order-card {
  margin-bottom: 20px;
}
</style>
