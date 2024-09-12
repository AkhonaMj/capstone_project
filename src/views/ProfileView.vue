<template>
    <div class="profile-page">
      <h1>User Profile</h1>
  
      <div v-if="user">
        <p><strong>First Name:</strong> {{ user.firstName }}</p>
        <p><strong>Last Name:</strong> {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.emailAdd }}</p>
        <p><strong>Role:</strong> {{ user.userRole }}</p>
  
        <button @click="editMode = true">Edit Profile</button>
        <button @click="deleteAccount">Delete Account</button>
        <button @click="logout">Logout</button>
  
        <div v-if="editMode">
          <h2>Edit Profile</h2>
          <form @submit.prevent="updateProfile">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="editUser.firstName" required />
  
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="editUser.lastName" required />
  
            <label for="emailAdd">Email:</label>
            <input type="email" id="emailAdd" v-model="editUser.emailAdd" required />
  
            <button type="submit">Save Changes</button>
            <button @click="editMode = false">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCookies } from "vue3-cookies";
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        user: null,        
        editMode: false,    
        editUser: {}        
      };
    },
    setup() {
      const { cookies } = useCookies();
      const router = useRouter();
      return { cookies, router };
    },
    created() {
      this.fetchUserDetails();
    },
    methods: {
      async fetchUserDetails() {
        try {
          const response = await this.$store.dispatch('fetchUserDetails');
          this.user = response.data;
          this.editUser = { ...this.user };  
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      },
      async updateProfile() {
        try {
          await this.$store.dispatch('updateUserProfile', this.editUser);
          this.user = { ...this.editUser };  
          this.editMode = false;
        } catch (error) {
          console.error("Error updating profile:", error);
          alert('Failed to update profile.');
        }
      },
      async deleteAccount() {
        try {
          await this.$store.dispatch('deleteUserAccount', this.user.id);
          this.cookies.remove("token");  
          this.$router.push('/register'); 
        } catch (error) {
          console.error("Error deleting account:", error);
          alert('Failed to delete account.');
        }
      },
      logout() {
        this.cookies.remove("token");  
        this.$router.push('/login');  
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
  button {
    margin: 10px 0;
  }
  </style>
  