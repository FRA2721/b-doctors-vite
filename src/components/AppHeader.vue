<!-- script section -->
<script>
import { RouterLink } from 'vue-router';

export default {
    // name
    name: "AppHeader",
    // data
    data() {
        return {
            links: [
                // home
                {
                    label: "HOME",
                    routeName: "home"
                },

                // {
                //     label: "ABOUT",
                //     routeName: "about"
                // },

                // {
                //     label: "SERVICES",
                //     routeName: "services"
                // },

                // {
                //     label: "CONTACT",
                //     routeName: "contact"
                // }
            ]
        };
    },
    components: { RouterLink }
}

</script>




<!-- template section -->
<template>

  <!-- header section -->
  <header>
    <div class="container">
      <nav>
        <ul>
          <li v-for="( item, index ) in links">
            <router-link :to="{ name: item.routeName }">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
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
    padding: 1rem 0;

    // list formatting section
    ul {
      display: flex;

      // list items
      li {
        margin-right: 1rem;
        padding-top: 1rem;
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