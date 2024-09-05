<template>
  <div>
    <button @click="showModal = true">Book</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Book</h5>
              <button @click="showModal = false" class="btn-close"></button>
            </div>
            <div class="modal-body">
              <!-- Datepicker with adjusted size -->
              <div class="datepicker-container">
                <Datepicker v-model="date" />
              </div>
              <select v-model="time.hours" class="form-select mt-3">
                <option v-for="hour in hours" :key="hour" :value="hour">{{ hour }}:00</option>
              </select>
            </div>
            <div class="modal-footer">
              <button @click="showModal = false" class="btn btn-secondary">Close</button>
              <button @click="saveDateTime" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';

export default {
  components: { Datepicker },
  setup() {
    const showModal = ref(false);
    const date = ref(new Date());
    const time = ref({ hours: 8, minutes: 0 });

    const hours = ref([]);
    for (let i = 8; i <= 17; i++) {
      hours.value.push(i);
    }
    const saveDateTime = () => {
      console.log('Date:', date.value);
      console.log('Time:', time.value);
      showModal.value = false;
    };

    return { showModal, date, time, hours, saveDateTime };
  },
};
</script>

<style scoped>
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
}

.modal-title {
  margin-bottom: 0;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

/* Adjust the Datepicker size using deep selectors */
::v-deep .datepicker-container .vue3-datepicker {
  max-width: 200px; /* Limit the width of the date picker */
  margin: 0 auto; /* Center it */
  transform: scale(0.8); /* Scale down the date picker */
}

::v-deep .vue3-datepicker__calendar {
  font-size: 12px; /* Adjust font size for smaller date picker */
}

::v-deep .vue3-datepicker__day {
  padding: 0.5rem; /* Adjust day cell padding */
}
</style>
