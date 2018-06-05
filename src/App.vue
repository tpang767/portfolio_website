<template>
  <div id="app">
    <div class="app-container">
      <!-- <v-nav-menu :navItems="navItems"></v-nav-menu> -->
      <!-- <VNavbar /> -->
      <section class="hero header-section ">
        <div class="hero-head">
          <div class="container">
          </div>
        </div>
        <div class="hero-body introduction has-text-centered">
          <div class="background--dots">
          </div>
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-12">
                <v-image-circle img="/static/images/website/cover-photo-edit.jpg"
                                :visible="true"
                                class="my-avatar">

                </v-image-circle>
                <h1 class="headline--1">Thomas Pang</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-foot has-text-centered">
          <div class="container">
            <nav class="nav-menu">
              <v-button-vertical text="About"
                                 path="About"></v-button-vertical>
              <v-button-vertical text="Work"
                                 path="Work"></v-button-vertical>
              <v-button-vertical text="Contact"
                                 path="Contact"></v-button-vertical>
            </nav>
          </div>
        </div>
      </section>
      <router-view></router-view>
      <VFooter/>
    </div>
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import VFooter from '@/components/VFooter'
import VNavMenu from '@/components/VNavMenu'
import VButtonVertical from '@/components/Buttons/VButtonVertical'
import VLoadingScreen from '@/components/VLoadingScreen'
import VSectionTitle from '@/components/VSectionTitle'
import VImageCircle from '@/components/VImageCircle'
export default {
  name: 'App',
  components: {
    VNavbar,
    VFooter,
    VNavMenu,
    VImageCircle,
    VLoadingScreen,
    VSectionTitle,
    VButtonVertical
  },
  data() {
    return {
      navItems: [
        { name: 'About', path: 'About', current: true },
        { name: 'Work', path: 'Work' },
        { name: 'Skill', path: 'Skill' },
        { name: 'Contact', path: 'Contact' }
      ]
    }
  }
}
</script>

<style lang="scss">
$navbar-height: 52px;
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-menu-item {
    font-family: "Brandon";
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-size: 0.75rem;
    &:hover {
      color: $primary;
    }
  }
  .nav-menu-item:before {
    display: inline-block;
    content: "";
    border-radius: 50%;
    height: 0.3rem;
    width: 0.3rem;
    margin-right: 1rem;
    background: black;
    background-color: #bdbdbd;
  }
}
</style>
