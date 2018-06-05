<template>
  <v-section name="introduction"
             class="section--introduction">
    <!-- <div class="container">
      <div class="columns is-centered">
        <div class="column is-3">
          <v-image-circle img="/static/images/website/cover-photo-edit.jpg"
                          :visible="true"
                          class="my-avatar">

          </v-image-circle>
        </div>
        <div class="column is-4">
          <p>
            I enjoy building applications for web, mobile, and desktop. I know how to help you
            achieve the product and message that you want. I've build many kinds
            of web applications, including immersive full-page websites, highly-interactive
            user interfaces, real-time applications and standalone web tools.
          </p>
        </div>
      </div>
    </div>
    <div class="column has-text-centered is-narrow narrow-content"> -->

    <!-- <div class="image-placeholder"
           is-centered>
        <simple-clean-icon class="svg-icon"></simple-clean-icon>
      </div> -->
    <!-- <v-section-title title="About Me"
                       center></v-section-title> -->

    <!-- </div> -->

    <template v-for="aboutItem in aboutItems">
      <div class="item-row"
           :key="aboutItem.title">
        <div class="columns">
          <div class="column is-4 is-offset-2">

            <v-section-title :title="aboutItem.title"></v-section-title>

            <p>
              {{aboutItem.text}}
            </p>
          </div>
          <div class="column">
            <div class="side-illustration flex-c">
              <div class="image-placeholder"
                   is-centered>
                <simple-clean-icon class="svg-icon"></simple-clean-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider-1"></div>
    </template>
    <div class="column has-text-centered is-narrow narrow-content">
      <div class="image-placeholder"
           is-centered>
        <simple-clean-icon class="svg-icon"></simple-clean-icon>
      </div>
      <v-section-title title="Hire Talent"
                       center></v-section-title>
      <p>
        If you have a cool idea, feel free to email me to get the conversation going. I am
        available for freelance work and would love to hear about your project.
      </p>

    </div>
    <!-- <div class="divider-1"></div>
    <div class="columns is-centered ">
      <div class="column is-one-fifths">
        <div class="content-block">
          <v-section-title title="My Philosophy"></v-section-title>
          <p>
            I am commited to using clean, simple, and elegant solutions to solve complex problems.
            Whether it be exploring new technologies, refactoring code, or testing
            a new strategy, I focus on simplicity and functionality for all my projects.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="side-illustration flex-c">
          <div class="image-placeholder"
               is-centered>
            <simple-clean-icon class="svg-icon"></simple-clean-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-1"></div>
    <div class="columns is-centered">
      <div class="column is-one-fifths">
        <div class="content-block">
          <v-section-title title="Experience"></v-section-title>
          <p>
            I know how to help you achieve the product and message that you want. I've build
            many kinds of web applications, including immersive full-page websites,
            highly-interactive user interfaces, real-time applications and standalone
            web tools.

          </p>
        </div>
      </div>
      <div class="column">
        <div class="side-illustration flex-c">
          <div class="image-placeholder"
               is-centered>
            <about-experience-icon class="svg-icon"></about-experience-icon>
          </div>
        </div>

      </div>

    </div>
    <div class="divider-1"></div>
    <div class="columns is-centered">
      <div class="column is-one-fifths">
        <div class="content-block">
          <v-section-title title="Background"></v-section-title>
          <p>
            Having graduated from NYU in 2014 with a degree in economics, I initially worked
            as an analyst right out of college. It wasn't until 2015, that I had
            written my first line of code for [fun], spurring my new-found passion
            thereafter. I taught myself programming in my spare time for over a year,
            eventually committing to a full career change after receiving my first
            job offer.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="side-illustration flex-c">
          <div class="image-placeholder"
               is-centered>
            <simple-clean-icon class="svg-icon"></simple-clean-icon>
          </div>
        </div>

      </div>
    </div> -->

  </v-section>
</template>

<script>
import VectorHeadline from '@/components/Vectors/VectorHeadline'
import WebDesignSvg from '@/assets/svg-icons/designer/web-design.svg'
import VSection from '@/components/VSection'
import VSectionTitle from '@/components/VSectionTitle'
import RobotIcon from '@/assets/svg-icons/technology/robot.svg'
import HandCubeIcon from '@/assets/svg-icons/technology/hand-cube.svg'
import HologramIcon from '@/assets/svg-icons/future/hologram.svg'
import IdentityIcon from '@/assets/svg-icons/future/eye.svg'
import ModelIcon from '@/assets/svg-icons/technology/model.svg'
import ComputerIcon from '@/assets/svg-icons/technology/computer.svg'
import VFrameCard from '@/components/VFrameCard'
import SimpleCleanIcon from '@/assets/svg-icons/future/plant.svg'
import AboutMeIcon from '@/assets/svg-icons/future/robot1.svg'
import AboutExperienceIcon from '@/assets/svg-icons/future/chip.svg'
import VImageCircle from '@/components/VImageCircle'
export default {
  name: 'IntroductionSection',
  components: {
    SimpleCleanIcon,
    VectorHeadline,
    WebDesignSvg,
    VSection,
    VSectionTitle,
    RobotIcon,
    HandCubeIcon,
    HologramIcon,
    ModelIcon,
    ComputerIcon,
    IdentityIcon,
    VFrameCard,
    AboutMeIcon,
    AboutExperienceIcon,
    VImageCircle
  },
  data() {
    return {
      aboutItems: [
        {
          title: 'About Me',
          text:
            "I enjoy building applications for web, mobile, and desktop. I know how to help you achieve the product and message that you want. I've build many kinds of web applications, including immersive full-page websites, highly-interactive user interfaces, real-time applications and standalone web tools."
        },
        {
          title: 'My Philosophy',
          text:
            'I am commited to using clean, simple, and elegant solutions to solve complex problems. Whether it be exploring new technologies, refactoring code, or testing a new strategy, I focus on simplicity and functionality for all my projects.'
        },
        // {
        //   title: 'Experience',
        //   text:
        //     "I know how to help you achieve the product and message that you want. I've build  many kinds of web applications, including immersive full-page websites, highly-interactive user interfaces, real-time applications and standalone web tools."
        // },
        {
          title: 'Background',
          text:
            "Having graduated from NYU in 2014 with a degree in economics, I initially worked as an analyst right out of college. It wasn't until 2015, that I had written my first line of code for [fun], spurring my new-found passion thereafter. I taught myself programming in my spare time for over a year, eventually committing to a full career change after receiving my first job offer."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section--introduction {
  // height: 100vh;
}
.svg-wrapper.intro {
  max-width: 75px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}
.item-row {
  margin-bottom: 2rem;
}
.content-block {
  position: relative;
  border: 1px solid #ebe9f4;
  height: 300px;

  // background: #f6f7f8;
  // align-items: center;
  // text-align: center;
  .inner-block {
    background: $primary;
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    transform: translate(15%, -5%);
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }
}
.svg-img {
  max-height: 100%;
  width: auto;
  object-fit: contain;
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
.narrow-content {
  max-width: 460px;
  margin: 0 auto;
}
.divider-1 {
  height: 0;
  margin: 2rem auto;
  border-bottom: 4px dotted black;
  width: 100px;
}
.flex-c {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
