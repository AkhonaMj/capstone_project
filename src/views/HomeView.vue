<template class="body">
    <div class="body home">
    <div class="header">
      <h1 class="bolder">Bells' Beauty Boutique</h1>
    </div>
    <div class="main">
      <div class="image-container">
        <img
          src="https://akhonamj.github.io/cap_project_images/face2.jpg"
          alt="Beauty and Glamour Image"
        />
      </div>
      <div class="welcome-text-container">
        <p class="welcome-text">Welcome to a home of beauty and glamour!</p>
      </div>
    </div>
   
    <div>
      <button><router-link to="/services" class="">Our services</router-link></button>
      <button><router-link to="/login" class="">Login</router-link> </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeView",
  mounted() {
    document.body.classList.add("body");
  },
};
</script>

<style>
.body {
  background-color: #FFE8D6;
}

button{

    background-color: #a53860;
    border:none;
    padding: 10px 15px;
    margin: 20px 10px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 300px;
    transition: background-color 0.2s ease-in-out;
    
}
button:hover {
    background-color: #f5f5f5;
}

img{
  border-radius: 200px;
}

.home {
  background-color: #ddbea966;
  max-width: 800px;
  margin: 0 auto ;
  margin-top: 70px;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 300px;
  
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
  font-family: 'Courier New', monospace;
}
button{
  width: 170px;
  height: 50px;
  margin: 50px;
  margin-left: 60px;
}
</style>
