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
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const orders = computed(() => store.state.orders);

    return { orders };
  }
};
</script>

<style scoped>
.order-card {
  margin-bottom: 20px;
}
</style>
