<template>
  <section class="section">
    <div class="container">

      <div class="is-divider"
           data-content="."></div>
      <v-section-title title="About Me"
                       center></v-section-title>
      <div class="content is-large has-text-centered">
        <h5 class="subtitle"></h5>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="image-placeholder"
                 is-centered>
              <icon-about class="svg-icon"></icon-about>
            </div>

            <v-section-title title="Background"
                             center></v-section-title>
            <p>
              Fullstack developer from New York City with a versatile background, mission-driven
              work ethic, and perfectionist attitude. I specialize in building web
              applications and websites for mobile and desktop devices.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="image-placeholder"
                 is-centered>
              <icon-philosophy class="svg-icon"></icon-philosophy>
            </div>
            <v-section-title title="Philosophy"
                             center></v-section-title>
            <p>
              Simplicity and functionality are the top priorities for all my projects. Whether
              it be exploring of new technologies, code refactoring, or strategy
              testing, I am commited using clean, yet elegant solutions.</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="image-placeholder"
                 is-centered>
              <icon-experience class="svg-icon"></icon-experience>
            </div>
            <v-section-title title="Experience"
                             center></v-section-title>
            <p>
              I have experience building all kinds of web applications ranging from immersive full-page
              websites to highly-interactive user interfaces and even standalone
              web tools.</p>
          </article>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import VButtonVertical from '@/components/Buttons/VButtonVertical'
import VSectionTitle from '@/components/VSectionTitle'
import IconAbout from '@/assets/svg-icons/color-line/laptop.svg'
import IconPhilosophy from '@/assets/svg-icons/color-line/lightbulb_idea.svg'
import IconContact from '@/assets/svg-icons/color-line/product.svg'
import IconExperience from '@/assets/svg-icons/color-line/bulletin_board.svg'
export default {
  name: 'SectionAbout',
  components: {
    VSectionTitle,
    VButtonVertical,
    IconAbout,
    IconPhilosophy,
    IconContact,
    IconExperience
  }
}
</script>

<style>
</style>
