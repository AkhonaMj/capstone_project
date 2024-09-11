<template>
  <div v-if="item">
    <h2>{{ item.itemName }}</h2>
    <img :src="item.itemUrl" alt="Item Image" class="item-image" />
    <p><strong>Amount:</strong> {{ item.amount }}</p>
    <p><strong>Category:</strong> {{ item.category }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    item() {
      return this.$store.state.item;
    }
  },
  methods: {
    fetchItem() {
      this.$store.dispatch('getSingleItem', this.id);
    }
  },
  mounted() {
    this.fetchItem(); // Fetch item data when the component mounts
  }
}
</script>

<style scoped>
.item-image {
  max-width: 100%;
  height: auto;
}
</style>



<!-- <style scoped>
/* Your modal styles here */
</style> -->

  <style scoped>
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  .datepicker-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  </style>
  