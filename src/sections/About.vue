<template>
  <v-section name="about"
             v-scroll="onScroll">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered is-narrow narrow-content">
          <!-- <div class="image-placeholder"
               is-centered>
          </div> -->
          <v-section-title title="History"></v-section-title>
          <p>
            Having graduated from NYU in 2014 with a degree in economics, I initially worked
            as an analyst right out of college. It wasn't until 2015, that I had
            written my first line of code for [fun], spurring my new-found passion
            thereafter. I taught myself programming in my spare time for over a year,
            eventually committing to a full career change after receiving my first
            job offer.
          </p>

          <!-- <div class="divider-1"></div> -->

        </div>

        <!-- <div class="content content-block">
            <v-section-title title="About"></v-section-title>
            <p>
              I'm a web developer experienced in both front and backend development with some design
              skills too. I enjoy exploring new technologies and creating different
              types of applications such as:
            </p>
            <p>
              Building functional and creative web applications is what I do best. I am a perfectionist
              with a passion for solving complex problems and a commitment to creating
              clean, simple, and elegant solutions.
            </p>
          </div> -->

        <!-- <div class="content content-block"> -->

        <!-- </div> -->
      </div>

    </div>
    </div>
  </v-section>
</template>

<script>
import VSectionTitle from '@/components/VSectionTitle'
// import FrameCard from '@/components/FrameCard'
import VSection from '@/components/VSection'
import VSectionDivider from '@/components/VSectionDivider'
export default {
  name: 'AboutSection',
  components: {
    VSection,
    VSectionTitle,
    VSectionDivider
  },
  data() {
    return {
      sections: [
        {
          title: 'Background',
          text:
            'Web developer with a perfectionist attitude, extremely inquisitive mindset, and mission-driven work ethic. I have a passion for solving complex problems and an affinity for detail oriented work, which is why I focus on using clean, simple, and elegant solutions.'
        },
        {
          title: 'Mission',
          text:
            'I love to constantly immersing myself in new technologies because they not only elevate my skillset but also ensure that I am building products that are highly functional, creative, and have long term scalibility.'
        },
        {
          title: 'Experience',
          text:
            "Experienced in both frontend and backend development. I like to build all kinds of applications to broaden my range of skills and to makeme a more versatile    developer. Some applications I've built include:",
          list: [
            'Single page applications (SPA)',
            'Responsive mobile & desktop websites',
            'Real time applications',
            'Dynamic User Interfaces'
          ]
        }
      ]
    }
  },
  methods: {
    onScroll(e, position) {
      console.log(e, position)
    }
  }
}
</script>

<style lang="scss">
.about.section {
  position: relative;
  overflow: hidden;

  .cover-photo {
    box-shadow: 0 3rem 3rem -1rem rgba(10, 10, 10, 0.2);
  }

  .content-block {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}
</style>
