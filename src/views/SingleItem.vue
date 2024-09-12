<template>
  <div v-if="item && Object.keys(item).length">
    <h2>{{ item.itemName }}</h2>
    <img :src="item.itemUrl" alt="Item Image" class="item-image" />
    <p><strong>Amount:</strong> {{ item.amount }}</p>
    <p><strong>Category:</strong> {{ item.category }}</p>
  </div>
  <div v-else>
    <p>Loading item details...</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    item() {
      return this.$store.state.item;
    }
  },
  methods: {
    fetchItem() {
      this.$store.dispatch('getSingleItem', this.$route.params.id);

    }
  },
  mounted() {
    this.fetchItem();
  }
}
</script>

<style scoped>
.item-image {
  max-width: 100%;
  height: auto;
}
</style>
