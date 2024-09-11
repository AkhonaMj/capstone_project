<template>
  <div>
    <section class="bsb-timeline-2 py-5 py-xl-8">
      <div class="container custom-padding-top">
        <!-- Search and Sort Controls -->
        <div class="row mb-4 justify-content-center">
          <div class="col-md-6">
            <!-- Search Input -->
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Search by service name..."
              v-model="searchQuery"
            />
          </div>
          <div class="col-md-4">
            <!-- Sort Dropdown -->
            <select class="form-select" v-model="sortOrder" @change="sortItems">
              <option value="asc">Sort by amount: Low to High</option>
              <option value="desc">Sort by amount: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Services Section -->
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
                    <!-- Pass the selected item to the DateTimeModal component -->
                    <DateTimeModal :selectedService="item" />
                    <router-link :to="{ name: 'singleItem', params: { id: item.itemId } }">View More</router-link>

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
      searchQuery: '', // For search functionality
      sortOrder: 'asc', // For sorting functionality
    };
  },
  computed: {
    // Fetch items from Vuex store
    items() {
      return this.$store.state.items;
    },
    // Filtered and sorted items based on search query and sort order
    filteredAndSortedItems() {
      // Filter items by name based on searchQuery
      let filteredItems = this.items.filter((item) =>
        item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Sort items by amount based on sortOrder
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
      // The computed property will react to this change and re-sort
    }
  },
  mounted() {
    this.getApiData();
  }
};
</script>
<style scoped>
/* Styles for Search and Sort Controls */
.form-control,
.form-select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Container and Layout */
.container {
  max-width: 1200px; /* Keeps the layout centered and contained */
  margin: 0 auto;
  padding: 20px;
}

.services-header {
  font-size: 40px; /* Large font for header */
  font-weight: bold;
  color: #a53860; /* Color matching the overall theme */
  margin-bottom: 50px; /* Space below the header */
}

.card {
  margin-bottom: 30px; /* Spacing between cards */
  border-radius: 15px; /* Rounded corners */
  overflow: hidden; /* Ensures rounded corners work with images */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effects */
}

.card:hover {
  transform: translateY(-10px); /* Lift effect on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow for hover effect */
}

/* Card Image */
.service-img {
  height: 200px; /* Fixed height for images */
  object-fit: cover; /* Crops the image to fill the area */
  border-bottom: 3px solid #a53860; /* Adds a border at the bottom */
}

/* Card Content */
.card-body {
  padding: 20px; /* Add padding inside card body */
  text-align: center; /* Center-align text */
}

.card-title {
  font-size: 24px; /* Size for the card titles */
  font-weight: bold; /* Bold for emphasis */
  color: #333; /* Dark text color */
  margin-bottom: 20px; /* Space below title */
}

.card-amount {
  font-size: 18px;
  color: #a53860;
  margin-bottom: 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-header {
    font-size: 32px; /* Smaller header size for tablets */
  }

  .card-title {
    font-size: 20px; /* Smaller title size for tablets */
  }

  .card {
    margin-bottom: 20px; /* Less spacing between cards */
  }
}

@media (max-width: 576px) {
  .services-header {
    font-size: 28px; /* Smaller header size for mobile */
  }

  .card-title {
    font-size: 18px; /* Smaller title size for mobile */
  }

  .service-img {
    height: 150px; /* Smaller image height for mobile */
  }

  .card-body {
    padding: 15px; /* Less padding inside card body */
  }
}
</style>
