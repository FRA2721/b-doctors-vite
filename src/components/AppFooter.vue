<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
export default {
  name: "AppFooter",

  data() {
    return {
      store,
    };
  },
  components: {
    RouterLink,
  },
};
</script>

<template>
  <footer>
    <div class="container pt-5 pb-5">
      <div class="d-flex flex-column flex-md-row g-4 row justify-content-around">
        <div class="left-container col-12 col-lg-4">
          <h4>B Doctors, Online Medicine</h4>
          <hr />
          <p>
            Ospedale San Raffaele S.r.l. Via Olgettina n. 60, 20132 Milano C.F.,
            P. IVA e Iscrizione presso il Registro Imprese di
            Milano-Monza-Brianza-Lodi 07636600962 Cap. Soc. € 60.817.200,00
            interamente versato.
          </p>
        </div>
        <div class="container-right text-start col-12 col-lg-8">
          <h4>Healthcare of the future, today, for everyone.</h4>
          <hr class="hr" />
          <div class="row g-3">
            <ul class="col-6 col-md-12">
              <h5 class="text-muted">Careers</h5>
              <li>Work with us</li>
              <li>Open positions</li>
              <li>Applications open</li>
              <li>Company intranet</li>
            </ul>

            <ul class="col-6 col-md-12">
              <h5 class="text-muted">Contacts</h5>
              <li>Work and contacts</li>
              <li>Contacts B Doctors</li>
              <li>Applications open</li>
            </ul>

            <ul class="col-6 col-md-12">
              <h5 class="text-muted">Legal Information</h5>
              <li>Coockie Policy</li>
              <li>Privacy Policy</li>
              <li>Transparency</li>
            </ul>

            <ul class="col-6 col-md-12">
              <h5 class="text-muted">Other Informations</h5>
              <li>Ethics Committee</li>
              <li>Cookie settings</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="socials d-flex pt-5 justify-content-center justify-content-md-end">
        <div><i class="fa-brands fa-instagram"></i></div>
        <div><i class="fa-brands fa-square-twitter"></i></div>
        <div><i class="fa-brands fa-facebook"></i></div>
        <div><i class="fa-brands fa-linkedin"></i></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

footer {
  background-color: #1f254c;
  color: aliceblue;
}


li {
  list-style: none;
}

ul {
  padding-right: 1rem;
  margin: 0;
}

.fa-brands {
  margin-left: 1rem;
}
</style>
