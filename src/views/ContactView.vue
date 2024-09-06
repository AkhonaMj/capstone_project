<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitContactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitContactForm() {
        console.log('Contact form submitted with:', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        // You can add your own logic here to send the form data to your server or API
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
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
  
  input[type="text"], input[type="email"] {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  textarea {
    width: 100%;
    height: 100px;
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
  </style>