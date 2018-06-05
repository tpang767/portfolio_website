<template>
  <div class="page-container index-page">
    <v-loading-screen :show="isLoading"></v-loading-screen>
    <template v-if="!isLoading">
      <section class="hero header-section is-medium">
        <!-- <div class="background--topleft">
        </div> -->
        <div class="hero-body introduction ">
          <div class="background--dots">
          </div>
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-4">
                <v-image-circle img="/static/images/website/cover-photo-edit.jpg"
                                :visible="true"
                                class="my-avatar">

                </v-image-circle>
              </div>
              <div class="column is-6">
                <div class="flex-content-v">
                  <h2>Hi, I'm Thomas</h2>
                  <p>
                    I enjoy building applications for web, mobile, and desktop. I know how to help you
                    achieve the product and message that you want. I've build many
                    kinds of web applications, including immersive full-page websites,
                    highly-interactive user interfaces, real-time applications and
                    standalone web tools.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      <introduction-section></introduction-section>
    </template>

  </div>
</template>

<script>
import HeaderSection from '@/sections/Header'
import LandingSection from '@/sections/Landing'
import HiringSection from '@/sections/Hiring'
import AboutSection from '@/sections/About'
import ProjectSection from '@/sections/Projects'
import SkillSection from '@/sections/Skill'
import IntroSection from '@/sections/Intro'
import IntroductionSection from '@/sections/Introduction'
import ContactSection from '@/sections/Contact'
import VLoadingScreen from '@/components/VLoadingScreen'
import VNavbar from '@/components/VNavbar'
import PolkaDots from '@/assets/svg-icons/patterns/polka-dots.svg'
import VImageCircle from '@/components/VImageCircle'
import VNavMenu from '@/components/VNavMenu'
export default {
  name: 'IndexView',
  components: {
    HeaderSection,
    LandingSection,
    HiringSection,
    AboutSection,
    ProjectSection,
    SkillSection,
    IntroSection,
    IntroductionSection,
    ContactSection,
    VLoadingScreen,
    VNavbar,
    PolkaDots,
    VImageCircle,
    VNavMenu
  },
  data() {
    return {
      isLoading: true,
      navItems: [
        { name: 'About', path: 'About', current: true },
        { name: 'Work', path: 'Work' },
        { name: 'Skill', path: 'Skill' },
        { name: 'Contact', path: 'Contact' }
      ]
    }
  },
  mounted() {
    this.isLoading = false
  },
  created() {
    const currentRoute = this.$route.name
    console.log(currentRoute)
  },
  computed: {
    currentNavItem() {}
  },
  methods: {
    showMe() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.timeOut)
    }
  }
}
</script>

<style lang="scss">
.flex-content-h {
  display: flex;
  align-items: center;
  justify-content: center;
}
section.header-section {
  position: relative;
  max-height: 100vh;
  // padding-top: 8rem;
  // padding-bottom: 4rem;
  h1.title.headliner {
    line-height: 2.5rem;
  }
  .background {
    &--dots {
      position: absolute;
      top: 15%;
      left: 0;
      height: 100%;
      width: 45%;
      z-index: 0;
      background: transparent;
      // transform: translate(0, -1%);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='19' height='19' fill='%23ededed'/%3E%3C/svg%3E");
    }
    &--topleft {
      position: absolute;
      top: 15%;
      right: 5%;
      height: 80%;
      width: 50%;
      background: $primary;
      opacity: 0.5;
    }
    .headlines--top {
      margin-top: 4rem;
    }
  }
}

.header-image {
  width: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}
.flex-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.my-avatar {
  z-index: 50;
}
</style>
