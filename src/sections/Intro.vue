<template>
  <v-section name="intro">
    <div class="content has-text-centered">
      <vector-headline :reveal="true">
        <p class="subtitle"
           slot="subtitle"> As the ever-expanding internet seemingly grows in complexity, functionality
          and simplicity in design become the greatest priority.</p>
      </vector-headline>
    </div>
  </v-section>
</template>

<script>
import VectorHeadline from '@/components/Vectors/VectorHeadline'
import WebDesignSvg from '@/assets/svg-icons/designer/web-design.svg'
import VSection from '@/components/VSection'
export default {
  name: 'IntroSection',
  components: {
    VectorHeadline,
    WebDesignSvg,
    VSection
  }
}
</script>

<style lang="scss">
.section.intro {
}
.svg-wrapper.intro {
  max-width: 75px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}
.svg-img {
  max-height: 100%;
  width: auto;
  object-fit: contain;
}
</style>
