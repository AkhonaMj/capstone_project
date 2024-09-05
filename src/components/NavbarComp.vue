<template lang="">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav justify-content-center">
              <router-link to="/" class="nav-button">Home</router-link> 
              <router-link to="/about" class="nav-button">About</router-link> 
              <router-link to="/services" class="nav-button">Services</router-link> 
              <router-link to="/contact" class="nav-button">Contact</router-link> 
              <router-link to="/checkout" class="nav-button">Checkout</router-link> 
              <router-link to="/profile" class="nav-button">Profile</router-link> 
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style >
  .navbar-nav {
    justify-content: center;
  }
  .collapse {
    justify-content: center;
  }
  .navbar{
    height: 80px;
  }
  .nav-button {
    background-color: #f4acb7;
    border: 1px solid #ddd;
    padding: 15px 25px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }
  .nav-button:hover {
    background-color: #f5f5f5;
    color: #aa33b7;
  }
  </style>