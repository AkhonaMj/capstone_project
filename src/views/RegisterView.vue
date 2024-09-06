<template>
    <div class="register-page">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required>
  
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required>
  
        <label for="userRole">User Role:</label>
        <select id="userRole" v-model="userRole" required>
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
  
        <label for="emailAdd">Email:</label>
        <input type="email" id="emailAdd" v-model="emailAdd" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        userRole: '',
        emailAdd: '',
        password: ''
      }
    },
    methods: {
      register() {
        console.log('Registration attempted with:', {
          firstName: this.firstName,
          lastName: this.lastName,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          password: this.password
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .register-page {
    max-width: 300px;
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
  
  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  select {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    width: 100%;
    height: 40px;
    background-color: #CB997E;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: auto;
  }
  
  button[type="submit"]:hover {
    background-color:CB997E;
  }
  
  a {
    text-decoration: none;
    color: #CB997E;
  }
  
  a:hover {
    color: #6B705C;
  }
  </style>