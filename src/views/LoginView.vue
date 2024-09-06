<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Login attempted with email:', this.email, 'and password:', this.password)
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
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
  
  input[type="email"], input[type="password"] {
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
    background-color: #CB997E;
  }
  
  a {
    text-decoration: none;
    color: #CB997E;
  }
  
  a:hover {
    color: #6B705C;
  }
  </style>