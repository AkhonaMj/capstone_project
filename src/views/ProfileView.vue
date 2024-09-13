<template>
  <div class="profile-page">
    <h1>User Profile</h1>

    <div v-if="user">
      <p><strong>First Name:</strong> {{ user.firstName }}</p>
      <p><strong>Last Name:</strong> {{ user.lastName }}</p>
      <p><strong>User Role:</strong> {{ user.userRole }}</p>
      <p><strong>Email:</strong> {{ user.emailAdd }}</p>

      <button @click="showEditModal = true">Edit Profile</button>
    </div>

    <div v-if="showEditModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <form @submit.prevent="updateUserProfile">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="formData.firstName" required />

          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="formData.lastName" required />

          <label for="userRole">User Role:</label>
          <select id="userRole" v-model="formData.userRole" required>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <label for="emailAdd">Email:</label>
          <input type="email" id="emailAdd" v-model="formData.emailAdd" required />

          <button type="submit">Save Changes</button>
          <button type="button" @click="showEditModal = false">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      user: null, 
      showEditModal: false, 
      formData: {
        firstName: '',
        lastName: '',
        userRole: '',
        emailAdd: '',
      }
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  created() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const id = this.$store.state.userId; 
        let response = await fetch(`https://capstone-project-bwdc.onrender.com/users/${id}`);
        let convertedData = await response.json();
        this.user = convertedData;
        this.formData = { ...convertedData };
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    },
    async updateUserProfile() {
      try {
        await fetch(`https://capstone-project-bwdc.onrender.com/users/${this.user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        this.user = { ...this.formData }; 
        alert('Profile updated successfully!');
        this.showEditModal = false; 
      } catch (error) {
        console.error('Failed to update profile:', error);
        alert('Profile update failed. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
.profile-page {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"], input[type="email"], select {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  height: 40px;
  background-color: #9f375d;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
