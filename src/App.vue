<!-- script section -->
<script>
import AppHeader from './components/AppHeader.vue';


export default {
  // name
  name: "App",
  components: {
    AppHeader,
  }
}
</script>



<!-- template section -->
<template>

  <!-- header -->
  <AppHeader />
  <router-view />

</template>




<!-- style section -->
<style lang="scss">
@use './styles/general.scss' as *;
</style>