<!-- script section -->
<script>
export default {
  // name
  name: "AppContact",
};
</script>

<!-- template section -->
<template>
  <div class="container">
    <h1 class="text-center mt-3 mb-5">BD Doctors Contacts</h1>

    <div class="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
      <div class="title col col-12 col-md-3">
        <h2>Contacts</h2>
      </div>
      <div class="address col col-12 col-md-3">
        <h4>Office info:</h4>
        <p>02 123123123</p>
        <p>PEC: bdoctors@doctor.com</p>
      </div>
      <div class="program col col-12 col-md-3">
        <h4>Public relations office:</h4>
        <p>Uping Street seen from Withsbrurck, 203</p>
      </div>
      <div class="contact-center col col-12 col-md-3">
        <h4>Contact center:</h4>
        <p>02 698279829</p>
      </div>
    </div>

    <div class="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
      <div class="title col col-12 col-md-3">
        <h2>Structure details</h2>
      </div>
      <div class="address col col-12 col-md-3">
        <h4>Address:</h4>
        <p>Downing Street seen from Whitehall, 2013</p>
      </div>
      <div class="program col col-12 col-md-3">
        <h4>Opening times:</h4>
        <p>
          Lun-Ven 7:00-17:00 <br />
          Sabato 8:00-12:00 <br />
        </p>
      </div>
      <div class="contact-center col col-12 col-md-3">
        <h4>Information Admissions Solvency:</h4>
        <p>
          Telefono 02 2643 2800 <br />
          Lun-Ven 7:00-17:00
        </p>
      </div>
    </div>
  </div>
</template>

<!-- style section -->
<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.container {
  min-height: calc(100vh - 56px);
}

h1 {
  color: #20254c;

  &::before {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-right: 10px;
    vertical-align: middle;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-left: 10px;
    vertical-align: middle;
  }
}

.col {
  border-left: 1px solid black;
}
</style>
