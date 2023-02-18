<!-- script section -->
<script>
export default {
  // name
  name: "AppContact",
}

</script>




<!-- template section -->
<template>
  <div class="container">

    <h1 class="text-center mt-3 mb-4">BDoctors Contacts</h1>

    <div class="details row text-center text-sm-start align-items-stretch mb-2">
      <div class="title col col-12 col-md-3">
        <h2>Contacts</h2>
      </div>
      <div class="address col col-12 col-md-3">
        Office info:
        <p>02 123123123</p>
        <p>PEC: bdoctors@doctor.com</p>
      </div>
      <div class="program col col-12 col-md-3">
        Public relations office:
        <p>Uping Street seen from Withsbrurck, 203</p>
      </div>
      <div class="contact-center col col-12 col-md-3">
        Contact center:
        <p>02 698279829</p>

      </div>
    </div>

    <div class="details row text-center text-sm-start align-items-stretch mb-2">
      <div class="title col col-12 col-md-3">
        <h2>Structure detail</h2>
      </div>
      <div class="address col col-12 col-md-3">
        Address:
        <p>Downing Street seen from Whitehall, 2013</p>
      </div>
      <div class="program col col-12 col-md-3">
        Opening times:
        <p>
          Lun-Ven 7:00-17:00 <br>
          Sabato 8:00-12:00 <br>
        </p>
      </div>
      <div class="contact-center col col-12 col-md-3">
        Information Admissions Solvency
        <p>
          Telefono 02 2643 2800 <br>
          Lun-Ven 7:00-17:00
        </p>
      </div>
    </div>

  </div>
</template>



<!-- style section -->
<style lang="scss">
@use '../styles/general.scss' as *;

.col {
  border-left: 1px solid black;
}
</style>