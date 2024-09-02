<template>
  <div class="home">
    <div class="left-side">
      <h1 class="bolder">Bells' Beauty Botique</h1>
      <p class="nice">Welcome to a home of beauty and glamour!</p>
    </div>
    <div class="right-side">
      <img src="https://via.placeholder.com/300" alt="Beauty and Glamour Image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.left-side {
  flex-basis: 40%;
}

.right-side {
  flex-basis: 60%;
}

.bold {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
}

.nice {
  font-size: 18px;
  color: #666;
}

.right-side img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>