<!-- script section -->
<script>
export default {
  // name
  name: "AppHeader",

  // data
  data() {
    return {
      links: [

        // home
        {
          voice: "HOME",
          href: "#home"
        },

        // about
        {
          voice: "ABOUT",
          href: "#about"
        },

        // services
        {
          voice: "SERVICES",
          href: "#services"
        },

        // contact
        {
          voice: "CONTACT",
          href: "#contact"
        }
      ]
    }
  }
}

</script>




<!-- template section -->
<template>

  <!-- header section -->
  <header>
    <nav>
      <ul>
        <li v-for="( item, index ) in links">
          <a :href="item.href">{{ item.voice }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- /header section -->

</template>




<!-- style section -->
<style lang="scss">
@use '../styles/general.scss' as *;

header {
  background-image: linear-gradient(to bottom right, lightblue, rgb(216, 236, 243));

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    padding: 1rem 0;

    // list formatting section
    ul {
      display: flex;

      // list items
      li {
        margin-right: 1rem;
        border-top: 3px solid transparent;
        transition-duration: .5s;

        &:hover {
          opacity: 1;
          border-top: 3px solid white;
        }

        // anchor
        a {
          color: white;
        }
      }
    }
  }
}
</style>