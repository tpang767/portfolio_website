<template>
  <section class="section hiring"
           id="hiring">
    <!-- <v-section-divider :flipped="true"
                       :colored="true"></v-section-divider> -->
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <v-frame-card>
            <!-- <h3 slot="title">Thomas</h3> -->
          </v-frame-card>
          <!-- <figure class="image is-2by5 cover-photo">
            <img src="/static/images/website/cover-photo-edit.jpg">
          </figure> -->
        </div>
        <div class="column is-6">
          <div class="block-panel">
            <div class="content">
              <p class="section-title is-spaced">Hire Talent</p>
              <p class="m-btm"> If you need a developer for your next project, feel free to email me.
                I'd love to hear about your cool idea and how I help you accomplish
                it. Let's get the conversation going.</p>
              <a class="button is-outlined is-medium"
                 href="#contact">Contact</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaptionBlockGrid from '@/components/Blocks/CaptionBlockGrid'
import DividerSvg from '@/assets/svg-icons/section-divider.svg'
import VSectionDivider from '@/components/VSectionDivider'
import VFrameCard from '@/components/VFrameCard'
export default {
  name: 'HiringSection',
  components: {
    CaptionBlockGrid,
    DividerSvg,
    VSectionDivider,
    VFrameCard
  },
  data() {
    return {
      captionBlocks: []
    }
  },
  created() {
    this.setCaptions()
  },
  methods: {
    setCaptions() {
      const baseUrl = '/static/images/captionblocks'
      function getImagePath(baseUrl, fileName) {
        return `${baseUrl}/${fileName}.png`
      }
      for (var i = 0; i < 6; i++) {
        let item = {}
        item.title = `title-${i}`
        item.subtitle = `subtitle-${i}`
        item.image = getImagePath(baseUrl, i)
        this.captionBlocks.push(item)
      }
    }
  }
}
</script>

<style lang="scss">
section.hiring {
  position: relative;
  overflow: hidden;
}
.block-panel {
  padding: 3rem;
  text-align: center;
  margin-bottom: 10rem;
  .m-btm {
    @include block;
  }
  .title {
    font-family: "League Spartan-Bold";
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    // font-size: 4.0625rem;
    //   line-height: 4.0625rem;
  }
  .subtitle {
    font-family: "Montserrat";
    line-height: 2rem;
    opacity: 0.8;
    // text-transform: uppercase;
    // font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
}
</style>
