<!-- script section -->
<script>
export default {
  // name
  name: "AppJumbotron",
};
</script>

<template>
  <!-- <section class="d-flex jumbotron-section">
        <div class="jumbotron">
            <div class="jumbotron-container">
                <h3>We care about you...</h3>
                <h1>THE BEST<br>ONLINE<br>SUPPORT FOR YOUR HEALTH</h1>
                <a href="#" class="btn read-more-btn">READ MORE</a>
                <a href="#" class="play-btn me-2"><i class="fa-solid fa-play"></i></a>
                <span>Meet our doctors</span>
            </div>
        </div>
        <div class="">
            <img src="../assets/imgs/jumbo-doctors.png" alt="">
        </div>
    </section> -->

  <section class="jumbotron">
    <div class="jumbotron-container">
      <div class="container">
        <div class="row">
          <div
            class="jumbo-left pt-4 pb-4 col-12 col-lg-8 text-white text-center text-lg-start d-flex flex-column justify-content-center">
            <h3>We care about you...</h3>
            <h1 class="mb-3">
              THE BEST<br />ONLINE<br />SUPPORT FOR YOUR HEALTH
            </h1>

            <div class="call-to-action row g-2">
              <div class="col-12 col-md-6 col-lg-3 col-xl-12">
                <a href="#" class="btn btn-primary">READ MORE</a>
              </div>
              <div
                class="col-12 col-md-6 col-lg-9 col-xl-12 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div class="d-inline-block">
                  <a href="#" class="play-btn me-2"
                    ><i class="fa-regular fa-circle-play me-1"></i>
                  </a>
                </div>
                <div class="d-inline-block">Meet our doctors</div>
              </div>
            </div>
          </div>
          <div class="jumbo-right d-none d-lg-block col-4">
            <div class="jumbo-img">
              <img src="../assets/imgs/jumbo-doctor.png" alt="jumbotron doctors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- style section -->
<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.jumbotron {
  background-image: linear-gradient(to bottom right, #2b94f1, #21ce99);

  h3 {
    font-size: 1.4rem;
  }

  h1 {
    font-size: 1.8rem;
  }
  .jumbo-img {
    img {
      width: 100%;
    }
  }
  .play-btn {
    i {
      font-size: 1.7rem;
    }
  }
}
</style>
