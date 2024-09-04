<template>
    <div class="">
      <section class="bsb-timeline-2 py-5 py-xl-8">
        <div class="container custom-padding-top">
          <div class="row justify-content-start">
            <div class="services">
              <h1>Services</h1>
              <div class="row">
                <div class="col-md-4" v-for="(item, index) in items" :key="index">
                  <div class="card">
                    <div class="card-body">
                        <img :src="item.itemUrl" alt="Item Image" class="card-img-top">
                      <h2 class="card-title">{{ item.itemName }}</h2>
                      <!-- Add any other item details you want to display here -->
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
  export default {
    computed: {
      items() {
        return this.$store.state.items;
      }
    },
    methods: {
      getApiData() {
        this.$store.dispatch('getApiData');
        console.log(this.items);
        
      }
    },
    mounted() {
      this.getApiData();
    }
  }
  </script>
  
  <style scoped>
    .card {
       margin-bottom: 70px
    }
    .card-img-top {
        width: 100%;
        height: 170px; 
        object-fit: cover;
        border-radius: 10px 10px 0 0;
}
  
  </style>