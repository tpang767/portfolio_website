<template>

  <ul class="navbar is-fixed-top v-nav-menu">
    <li>
      <v-button-vertical class="v-navbrand"
                         text="Navbrand"
                         path="Home"></v-button-vertical>
      <!-- <router-link >Brand</router-link> -->
    </li>
    <li :class="{'current': navItem.current}"
        v-for="navItem in navItems"
        :key="navItem.name">
      <v-button-vertical :text="navItem.name"
                         :path="navItem.path"></v-button-vertical>
    </li>
  </ul>
</template>

<script>
import VButtonVertical from './Buttons/VButtonVertical'
export default {
  name: 'VNavMenu',
  components: {
    VButtonVertical
  },
  props: {
    navItems: {
      type: Array,
      default: () => [
        {
          name: 'Home',
          text: 'No Text',
          path: '#'
        }
      ]
    }
  },
  data() {
    return {}
  },
  methods: {
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss">
.navbar.v-nav-menu {
  border-bottom: 1px solid #ebe9f4;
}
.v-nav-menu {
  display: flex;
  // background: transparent;
  // text-align: center;
  :not(.v-navbrand) {
    align-self: flex-end;
  }
}
.v-nav-menu * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.v-nav-menu li {
  list-style: outside none none;
  margin: 0.4em 0.8em;
  padding: 0;
}
.v-nav-menu .v-button-vertical {
  padding: 0 0.7em;
  color: black;
  position: relative;
  text-decoration: none;
  &:not(.v-brand) {
    align-self: flex-end;
  }
}
.v-nav-menu .v-button-vertical:before {
  position: absolute;
  content: "";
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  opacity: 0;
  left: 15%;
  right: 15%;
  top: 0;
  bottom: 0;
  border-left: 3px solid $primary;
  border-right: 3px solid $primary;
}
.v-nav-menu .v-button-vertical:hover,
.v-nav-menu .current .v-button-vertical {
  color: black;
}
.v-nav-menu .v-button-vertical:hover:before,
.v-nav-menu .current .v-button-vertical:before {
  opacity: 1;
  left: 0;
  right: 0;
}
</style>
