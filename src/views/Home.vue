<template>
  <div class="page-container home">
    <v-loading-screen :show="isLoading"></v-loading-screen>
    <template v-if="!isLoading">
      <!-- <landing-section></landing-section> -->
      <HeaderSection/>
      <introduction-section></introduction-section>
      <!-- <IntroSection/> -->
      <!-- <HiringSection/> -->

      <!-- <AboutSection/> -->
      <!-- <SkillSection/> -->
      <!-- <ProjectSection/> -->
      <ContactSection/>
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
export default {
  name: 'HomeView',
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
    VLoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = false
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
</style>
