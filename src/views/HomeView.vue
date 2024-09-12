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
      <button><router-link to="/services" class="link">Our services</router-link></button>
      <button><router-link to="/login" class="link">Login</router-link> </button>
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
  margin: 0;
  padding: 0;
}

.home {
  background-color: #ddbea966;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.image-container {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 200px;
}

.welcome-text-container {
  width: 100%;
  padding: 0 20px;
}

.welcome-text {
  font-size: 36px;
  color: black;
  font-weight: bold;
  font-family: 'Courier New', monospace;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; 
  margin-top: 30px;
}

button {
  background-color: #a53860;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.2s ease-in-out;
  width: 150px;
}

button:hover {
  background-color: #ddbea966;
}

.link {
  text-decoration: none;
  color: black;
  display: block; 
}

@media (max-width: 768px) {
  .home {
    padding: 10px;
  }

  .welcome-text {
    font-size: 24px;
  }

  button {
    width: 120px;
    font-size: 14px;
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .welcome-text {
    font-size: 18px;
  }

  button {
    width: 100px;
    font-size: 12px;
    padding: 6px 10px;
  }
}

</style>