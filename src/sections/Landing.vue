<template>
  <v-section name="landing"
             class="section--landing">
    <div class="columns">

      <div class="column is-narrow narrow-content">
        <vector-headline :reveal="true"
                         class="headlines--header">
          <h1 class="title headline-1 "
              slot="title">
            Thomas
          </h1>
        </vector-headline>
        <vector-headline :reveal="true"
                         class="headlines--header">
          <h1 class="title headline-1"
              slot="title">
            Pang
          </h1>
        </vector-headline>
        <div class="line-segment"></div>
        <vector-headline :reveal="true"
                         class="headlines--header">
          <p class="subtitle headline-2 "
             slot="subtitle">
            web developer
          </p>
        </vector-headline>
      </div>
      <div class="column is-one-third is-offset-2">
        <v-frame-card></v-frame-card>
      </div>
      <!-- <div class="column is-half is-narrow ">
        <div class="background-graphics">
          <header-icon></header-icon>
        </div>
      </div> -->
    </div>

    <!-- <vector-headline :reveal="true">
          <p class="subtitle"
             slot="subtitle"> As the ever-expanding internet seemingly grows in complexity, functionality
            and simplicity in design become the greatest priority.</p>
        </vector-headline> -->
    <!-- </div> -->

  </v-section>
</template>

<script>
import VectorHeadline from '@/components/Vectors/VectorHeadline'
import VFrameCard from '@/components/VFrameCard'
import VSection from '@/components/VSection'
import VSectionTitle from '@/components/VSectionTitle'
import HeaderIcon from '@/assets/svg-icons/future/hologram.svg'
export default {
  name: 'LandingSection',
  components: {
    VSection,
    VSectionTitle,
    VectorHeadline,
    VFrameCard,
    HeaderIcon
  },
  created() {
    setTimeout(() => {
      this.animateVector(this.$refs.triangleSquare)
    }, 100)
  },
  methods: {
    animateVector(target) {
      target.enter()
    }
  }
}
</script>

<style lang="scss">
.section--landing {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 6rem 0;
  .title--top {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  .line-segment {
    height: 0;
    border-bottom: 4px solid black;
    width: 100px;
  }
  .background-graphics {
  }
  .title--right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    // transform: translate3d(-50%, 0, 0);
  }
  .inner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  figure.svg-wrapper {
    max-width: 400px;
  }
}
.headlines--header {
  .highlighted {
    color: $primary;
  }
}
</style>
