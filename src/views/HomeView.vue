<template>
  <div class="home">
    <div class="header">
      <h1 class="bolder">Bells' Beauty Boutique</h1>
    </div>
    <div class="main">
      <div class="image-container">
        <img
          src="https://via.placeholder.com/390"
          alt="Beauty and Glamour Image"
        />
      </div>
      <div class="welcome-text-container">
        <p class="welcome-text">Welcome to a home of beauty and glamour!</p>
      </div>
    </div>
   
    <div>
      <button>Our Services</button>
      <button>Get In Touch</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
}

.bolder {
  font-weight: bold;
  font-size: 24px;
  color: #333;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-container {
  width: 40%;
  margin: 0 20px;
}

img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.welcome-text-container {
  width: 60%;
  margin: 0 20px;
}

.welcome-text {
  font-size: 48px;
  color: #666;
  font-weight: bold;
}
button{
  width: 170px;
  height: 50px;
}
</style>
