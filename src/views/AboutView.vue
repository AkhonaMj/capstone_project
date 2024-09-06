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
  background-color: #ddbea966; /* Matching background to the home page */
  max-width: 800px; /* Keeps the width consistent */
  margin: 70px auto; /* Center and add top margin */
  padding: 20px; /* Add padding for spacing */
  border-radius: 30px; /* Adjusted for mobile friendliness */
  font-family: Arial, sans-serif; /* Use the same font */
  text-align: center; /* Center-align text */
}

.about-header {
  font-size: 40px; /* Consistent header size */
  color: black; /* Matching color */
  margin-bottom: 20px; /* Space below header */
}

.about-content {
  padding: 20px; /* Reduced padding for responsiveness */
}

.about-text {
  font-size: 20px; /* Smaller text for better readability on mobile */
  color: black; /* Consistent text color */
  margin-bottom: 20px; /* Space between paragraphs */
  font-family: 'Courier New', monospace; /* Matching font style */
}

strong {
  color: #a53860; /* Emphasize important text with the button color */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .about {
    padding: 15px; /* Reduce padding on smaller screens */
    margin: 20px; /* Less margin for smaller screens */
    border-radius: 20px; /* Adjust border radius for smaller screens */
  }

  .about-header {
    font-size: 28px; /* Smaller header size for smaller screens */
    margin-bottom: 15px; /* Reduced space below header */
  }

  .about-text {
    font-size: 16px; /* Smaller text size for readability */
    line-height: 1.4; /* Adjust line height for smaller screens */
  }

  .about-content {
    padding: 10px; /* Reduce padding for mobile */
  }
}

@media (max-width: 480px) {
  .about {
    padding: 10px; /* Even smaller padding for very small screens */
    margin: 10px; /* Less margin for very small screens */
  }

  .about-header {
    font-size: 24px; /* Smaller header size */
  }

  .about-text {
    font-size: 14px; /* Adjust text size for small screens */
    line-height: 1.5; /* Adjust line height for small screens */
  }
}
</style>
