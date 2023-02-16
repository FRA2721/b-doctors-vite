<!-- script section -->
<script>
export default {
  // name
  name: "AppAboutUs",
};
</script>

<!-- template section -->
<template>
  <div class="color-header">
    <img class="jumbo-about" src="../assets/imgs/jumbo-about1.jpg" alt="" />
    <div class="about-title">
      <h1 class="text-start">La Nostra Storia</h1>
      <p>
        L’Ospedale <bold class="bold">B Doctors</bold> è un ospedale di ricerca
        e policlinico universitario fondato nel 1971 per fornire cure
        specializzate per le condizioni di salute più complesse, riconosciuto
        già nel 1972 come Istituto di Ricovero e Cura a Carattere Scientifico
        (IRCCS) per la diabetologia. Nel 1991 inizia l’attività di ricerca di
        base, con l’inaugurazione del dipartimento di biotecnologie (DiBiT),
        mentre nel 1996 nasce l’Università Vita-Salute San Raffaele. Come
        conseguenza dell’ampliamento dell’area ricerca, che oggi conta oltre 150
        laboratori, la qualifica di IRCCS viene estesa nel 2001 a tutto l’ambito
        della medicina molecolare. Nel 2012 il San Raffaele entra a far parte
        del Gruppo San Donato (GSD), il più grande gruppo ospedaliero privato in
        Italia.
      </p>
    </div>
  </div>
  <!-- Section-services -->
  <h2 class="mt-5 mb-5 text-center">I Nostri Servizi</h2>
  <div class="container d-flex justify-content-center">
    <div class="row text-center p-3">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/imgs/img-cure.png"
            class="card-img-top"
            alt="..." />
          <div class="card-body">
            <h3 class="card-text">Cure d'avanguardia</h3>
            <p class="card-text">
              L’eccellenza medico-scientifica dell’Ospedale San Raffaele nasce
              dalla triplice identità dell’istituto, un luogo dove ricerca,
              clinica e formazione universitaria interagiscono quotidianamente.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center p-3">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/imgs/img-alta-tecnologia.png"
            class="card-img-top"
            alt="..." />
          <div class="card-body">
            <h3 class="card-text">Alta tecnologia</h3>
            <p class="card-text">
              Dai robot chirurgici agli strumenti di imaging e radioterapia di
              precisione: all’Ospedale San Raffaele tecnologie all’avanguardia
              permettono diagnosi sempre più precoci e cure più personalizzate.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center p-3">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/imgs/img-appproccio.png"
            class="card-img-top"
            alt="..." />
          <div class="card-body">
            <h3 class="card-text">Cure d'avanguardia</h3>
            <p class="card-text">
              L’eccellenza medico-scientifica dell’Ospedale San Raffaele nasce
              dalla triplice identità dell’istituto, un luogo dove ricerca,
              clinica e formazione universitaria interagiscono quotidianamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Section-number -->

  <div class="container pt-5 pb-5">
    <hr />
    <section class="row">
      <div class="section-img col-12 col-md-6 mb-3">
        <img src="../assets/imgs/world.webp" alt="" />
      </div>

      <div class="col-12 col-md-6 d-flex align-items-center">
        <h4 class="text-center">
          Più di 275.000.000 di visite e 2.300.000 appuntamenti ogni anno con i
          nostri specialisti.
        </h4>
      </div>
    </section>
    <hr />
  </div>
</template>

<!-- style section -->
<style lang="scss">
@use "../styles/general.scss" as *;

.jumbo-about {
  width: 100%;
  opacity: 0.6;
  max-height: 50rem;

  img {
    width: 100%;
    object-fit: cover;
  }
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
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.bold {
  font-size: x-large;
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
