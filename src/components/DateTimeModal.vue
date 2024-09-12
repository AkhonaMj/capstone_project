<template>
  <div>
    <button @click="showModal = true">Book</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Book {{ selectedService.itemName }}</h5>
              <button @click="showModal = false" class="btn-close"></button>
            </div>
            <div class="modal-body">
              <div class="datepicker-container">
                <Datepicker v-model="date" />
              </div>
              <select v-model="time.hours" class="form-select mt-3">
                <option v-for="hour in hours" :key="hour" :value="hour">{{ hour }}:00</option>
              </select>
            </div>
            <div class="modal-footer">
              <button @click="showModal = false" class="btn btn-secondary">Close</button>
              <button @click="insertData()" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker'

export default {
  components: { Datepicker },
  props: ['selectedService'],
  setup(props) {
    const showModal = ref(false);
    const date = ref(new Date());
    const time = ref({ hours: 8, minutes: 0 });
    const selectedItem = ref(props.selectedService); 

    const hours = ref([]);
    for (let i = 8; i <= 17; i++) {
      hours.value.push(i);
    }

    const saveDateTime = () => {
      console.log('Date:', date.value);
      console.log('Time:', time.value);
      showModal.value = false;
    };

    return { showModal, date, time, hours, saveDateTime, selectedItem };
  },
  computed: {
    formattedBookingTime() {
      return `${this.time.hours}:${this.time.minutes.toString().padStart(2, '0')}`;
    },
  },
  methods: {
    insertData() {
      this.$store.dispatch('addOrder', {
        itemId: this.selectedItem.itemId, 
        item: this.selectedItem.itemName, 
        bookingDate: this.date,
        bookingTime: this.formattedBookingTime,
        totalPrice: +this.selectedItem.amount 
      });
    }
  }
}
</script>

<style scoped>
/* Modal Overlay */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}


.modal-dialog {
  max-width: 500px;
  margin: 1rem;
  width: 100%; 
}


.modal-content {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  margin-bottom: 0;
  font-size: 1.25rem; 
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
}

.datepicker-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

::v-deep .vue3-datepicker {
  width: 100%; 
  max-width: 400px;
}

::v-deep .vue3-datepicker__calendar {
  font-size: 14px; 
}

::v-deep .vue3-datepicker__day {
  padding: 0.5rem; 
}

::v-deep .vue3-datepicker__day--selected {
  background-color: #a53860; 
  color: #fff; 
}

::v-deep .vue3-datepicker__day--today {
  border: 1px solid #a53860; 
}

.form-select {
  width: 100%; 
  margin-top: 1rem;
}

.btn {
  margin: 0 0.5rem;
}
</style>
