<template>
  <div>
    <section class="bsb-timeline-2 py-5 py-xl-8">
      <div class="container custom-padding-top">
        <div class="row mb-4 justify-content-center">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Search by service name..."
              v-model="searchQuery"
            />
          </div>
          <div class="col-md-4">
            <select class="form-select" v-model="sortOrder" @change="sortItems">
              <option value="asc">Sort by amount: Low to High</option>
              <option value="desc">Sort by amount: High to Low</option>
            </select>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="services text-center">
            <h1 class="services-header">Our Services</h1>
            <div class="row">
              <div
                class="col-md-4 col-sm-6 col-xs-12"
                v-for="(item, index) in filteredAndSortedItems"
                :key="index"
              >
                <div class="card service-card shadow-sm">
                  <img
                    :src="item.itemUrl"
                    alt="Item Image"
                    class="card-img-top service-img"
                  />
                  <div class="card-body">
                    <h2 class="card-title">{{ item.itemName }}</h2>
                    <p class="card-amount">amount: {{ item.amount }}</p>
                    <DateTimeModal :selectedService="item" />
                    <p><router-link :to="{ name: 'singleItem', params: { id: item.itemId } }">View More</router-link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DateTimeModal from '../components/DateTimeModal.vue';

export default {
  components: {
    DateTimeModal
  },
  data() {
    return {
      searchQuery: '', 
      sortOrder: 'asc', 
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    filteredAndSortedItems() {
      let filteredItems = this.items.filter((item) =>
        item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.sortOrder === 'asc') {
        filteredItems.sort((a, b) => a.amount - b.amount);
      } else if (this.sortOrder === 'desc') {
        filteredItems.sort((a, b) => b.amount - a.amount);
      }

      return filteredItems;
    }
  },
  methods: {
    getApiData() {
      this.$store.dispatch('getApiData');
    },
    sortItems() {

    }
  },
  mounted() {
    this.getApiData();
  }
};
</script>

<style scoped>
.form-control,
.form-select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.container {
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;
}

.services-header {
  font-size: 40px; 
  font-weight: bold;
  color: #a53860; 
  margin-bottom: 50px; 
}

.card {
  margin-bottom: 30px; 
  border-radius: 15px; 
  overflow: hidden; 
  transition: transform 0.2s, box-shadow 0.2s; 
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.service-img {
  height: 200px; 
  object-fit: contain; 
  border-bottom: 3px solid #a53860; 
}

.card-body {
  padding: 20px; 
  text-align: center; 
}

.card-title {
  font-size: 24px; 
  font-weight: bold; 
  color: #333; 
  margin-bottom: 20px; 
}

.card-amount {
  font-size: 18px;
  color: #a53860;
  margin-bottom: 15px;
}
a{
  color:#a53860 ;
}

@media (max-width: 768px) {
  .services-header {
    font-size: 32px; 
  }

  .card-title {
    font-size: 20px; 
  }

  .card {
    margin-bottom: 20px; 
  }
}

@media (max-width: 576px) {
  .services-header {
    font-size: 28px; 
  }

  .card-title {
    font-size: 18px; 
  }

  .service-img {
    height: 150px;
  }

  .card-body {
    padding: 15px; 
  }
}
</style>
