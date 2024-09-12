<template>
  <div class="about body">
    <h1 class="about-header bolder">About Us</h1>
    <div class="about-content">
      <p class="about-text">
        Welcome to <strong>Bells' Beauty Boutique</strong>, where beauty meets expertise! We are a full-service beauty salon dedicated to providing exceptional nail care, hair styling, and grooming services. Whether you're looking for a stunning manicure, a relaxing pedicure, intricate braids, or a flawless wig install, our skilled team is here to bring your beauty vision to life.
      </p>
      <p class="about-text">
        At <strong>Bells' Beauty Boutique</strong>, we pride ourselves on using high-quality products and staying up-to-date with the latest beauty trends. Our friendly and professional staff are committed to delivering a personalized and relaxing experience, ensuring you leave our salon feeling beautiful, confident, and rejuvenated.
      </p>
      <p class="about-text">
        Come visit us today and let us pamper you with the ultimate beauty experience!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #ddbea966; 
  max-width: 800px; 
  margin: 70px auto; 
  padding: 20px; 
  border-radius: 30px;
  font-family: Arial, sans-serif; 
  text-align: center; 
}

.about-header {
  font-size: 40px; 
  color: black; 
  margin-bottom: 20px; 
}

.about-content {
  padding: 20px; 
}

.about-text {
  font-size: 20px; 
  color: black; 
  margin-bottom: 20px; 
  font-family: 'Courier New', monospace; 
}

strong {
  color: #a53860; 
}

@media (max-width: 768px) {
  .about {
    padding: 15px; 
    margin: 20px; 
    border-radius: 20px; 
  }

  .about-header {
    font-size: 28px; 
    margin-bottom: 15px; 
  }

  .about-text {
    font-size: 16px; 
    line-height: 1.4; 
  }

  .about-content {
    padding: 10px; 
  }
}

@media (max-width: 480px) {
  .about {
    padding: 10px; 
    margin: 10px; 
  }

  .about-header {
    font-size: 24px; 
  }

  .about-text {
    font-size: 14px; 
    line-height: 1.5; 
  }
}
</style>
