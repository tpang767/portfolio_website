<template>
  <nav class="navbar border-bottom">
    <div class="container">
      <div class="navbar-brand">
        <v-button-vertical class="v-navbrand navbar-item"
                           text="Thomas Pang"
                           path="Home"></v-button-vertical>
        <div class="navbar-burger burger"
             data-target="navMenu"
             @click="handleToolBar"
             :class="{'is-active': active}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu"
           :class="{'is-active': active}"
           ref="navbar-menu"
           id="navMenu">
        <router-link class="navbar-item"
                     to="{name: 'About'}"
                     style="margin-left:auto;">About</router-link>
        <router-link class="navbar-item"
                     to="{name: 'Work'}">Work</router-link>
        <!-- <router-link v-for="link in links"
                   :to="{name: link.path}"
                   class="navbar-item"
                   :key="link.name">
        {{link.name}}
      </router-link> -->
        <!-- <VButtonVertical v-for="link in links"
                         class="navbar-item"
                         :key="link.name"
                         :text="link.name"
                         :path="link.path"></VButtonVertical> -->
      </div>
    </div>

  </nav>

  <!-- <nav class="navbar">
    <div class="container is-full-width">

      <div class="navbar-menu is-flex"
           :class="{'is-active': active}"
           ref="navbar-menu"
           id="navMenu">
        <div class="navbar-start">
          <div class="navbar-brand">

            <span class="navbar-burger burger"
                  data-target="navMenu"
                  @click="handleToolBar"
                  :class="{'is-active': active}">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div class="navbar-end">
          <VButtonVertical v-for="link in links"
                           class="navbar-item"
                           :key="link.name"
                           :text="link.name"
                           :path="link.path"></VButtonVertical>

        </div>
      </div>
    </div>
  </nav> -->
</template>

<script>
import VNavMenu from './VNavMenu'
import VButtonVertical from './Buttons/VButtonVertical'
export default {
  name: 'VNavbar',
  components: {
    VNavMenu,
    VButtonVertical
  },
  data() {
    return {
      active: false,
      links: [
        // { name: 'Home', path: 'Home' },
        { name: 'About', path: 'About' },
        { name: 'Work', path: 'Work' },
        { name: 'Skill', path: 'Skill' },
        { name: 'Contact', path: 'Contact' }
        //
      ]
    }
  },
  methods: {
    handleToolBar() {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
.border-bottom {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}
nav.navbar {
  // #ECE9E6
  // box-shadow: 0 2px 0 0 #f5f5f5;
  background: transparent;
  // padding: 1rem 2rem;
  // z-index: 9999;
  // border-bottom: 1px solid #ebe9f4;

  .navbar-menu {
    .navbar-end {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .navbar-item {
    font-family: "Brandon";
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-size: 0.75rem;
    &:hover {
      color: $primary;
    }
  }
  .navbar-item:before {
    // display: inline-block;
    // content: "";
    // border-radius: 50%;
    // height: 0.3rem;
    // width: 0.3rem;
    // margin-right: 1rem;
    // background: black;
    // background-color: #bdbdbd;
  }
}
</style>
