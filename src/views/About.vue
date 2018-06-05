<template>
  <div class="page-container about-page">
    <v-loading-screen :show="isLoading"></v-loading-screen>
    <template v-if="!isLoading">
      <section-about></section-about>
      <section-skills></section-skills>
    </template>
  </div>
</template>

<script>
import VButtonVertical from '@/components/Buttons/VButtonVertical'
import VLoadingScreen from '@/components/VLoadingScreen'
import VImageCircle from '@/components/VImageCircle'
import VSectionTitle from '@/components/VSectionTitle'
import VFrameCard from '@/components/VFrameCard'
import IconAbout from '@/assets/svg-icons/color-line/laptop.svg'
import IconPhilosophy from '@/assets/svg-icons/color-line/lightbulb_idea.svg'
import IconExperience from '@/assets/svg-icons/color-line/bulletin_board.svg'
import SectionAbout from '@/components/Sections/AboutMe'
import SectionSkills from '@/components/Sections/Skills'
export default {
  name: 'AboutView',
  components: {
    SectionAbout,
    VImageCircle,
    VLoadingScreen,
    VSectionTitle,
    VFrameCard,
    VButtonVertical,
    IconAbout,
    IconPhilosophy,
    IconExperience,
    SectionSkills
  },
  data() {
    return {
      isLoading: true
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
}
.divider-1 {
  height: 0;
  margin: 2rem auto;
  border-bottom: 4px dotted rgba(0, 0, 0, 0.5);
  width: 100px;
}
.headline--1 {
  // font-family: "Julius Sans One";
  // text-transform: uppercase;
  // font-weight: bold;
  // letter-spacing: 0.1rem;
  font-size: 2.5rem;
}

section.about {
  @include border(bottom);
}

.small-container {
  max-width: 38em;
}
.flex-content-v {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.image-placeholder {
  width: 150px;
  height: 150px;
  padding: 1rem;
  border-radius: 50%;
  // background: grey;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  .svg-icon {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
}
</style>
