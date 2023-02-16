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

  <div class="container pt-5 pb-5">
    <hr>
    <section class="row ">
      <div class="section-img col-12 col-md-6 mb-3">
        <img src="../assets/imgs/world.webp" alt="">
      </div>

      <div class="col-12 col-md-6 d-flex align-items-center">
        <h4 class="text-center">Più di 275.000.000 di visite
          e 2.300.000 appuntamenti ogni anno
          con i nostri specialisti.
        </h4>
      </div>
    </section>
    <hr>

</div>
</template>



<!-- style section -->
<style lang="scss">
@use '../styles/general.scss' as *;

.jumbo-about {
  width: 100%;
  opacity: .6;
  max-height: 50rem;
  object-fit: cover;
  object-position: top;
}

.color-header {
  background-color: #d5eaf2;
  color: #20254c;
  position: relative;
  object-fit: cover;
}

.about-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.section-img {
  text-align: center;

  img {
    width: 70%;
  }
}

.container {
  hr {
    border: 2px solid #80c8f5;
  }
}
</style>