<!-- script section -->
<script>
export default {
  // name
  name: "AppAboutUs",
}

</script>




<!-- template section -->
<template>
  <div class="color-header">
    <img class="jumbo-about" src="../assets/imgs/jumbo-about1.jpg" alt="">
    <h2 class="text-center about-title">Siamo lideri in medicina privata</h2>
  </div>
  <div class="container">

  </div>

</template>



<!-- style section -->
<style lang="scss">
@use '../styles/general.scss' as *;

.jumbo-about {
  width: 100%;
  opacity: .6;
  max-height: 50rem;


  img {
    width: 100%;
    object-fit: cover;
  }
}

.color-header {
  background-color: #d5eaf2;
  color: #20254c;
  position: relative;
}

.about-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>