<template class="body">
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

<style>
button{
  background-color: #f4acb7;
  

}

.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  padding: 20px;
  text-align: center;
}

.bolder {
  font-weight: bold;
  font-size: 24px;
  color: black;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}


.welcome-text-container {
  width: 60%;
  margin: 0 20px;
}

.welcome-text {
  font-size: 48px;
  color: black;
  font-weight: bold;
}
button{
  width: 170px;
  height: 50px;
  margin: 50px;
  margin-left: 60px;
}
</style>
