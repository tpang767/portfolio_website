<template>
  <div class="page-container contact-page">
    <v-loading-screen :show="isLoading"></v-loading-screen>
    <template v-if="!isLoading">
      <section class="section">
        <div class="container">

          <div class="is-divider"
               data-content="."></div>
          <v-section-title title="Contact"
                           center></v-section-title>
          <div class="content">
            <blockquote> I am available for freelance work. If you have a cool idea, feel free
              to email me to get the conversation going. I look forward to hearing
              about your project.</blockquote>
          </div>
          <div class="content is-large has-text-centered">
            <h5 class="subtitle"></h5>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="image-placeholder"
                     is-centered>
                  <icon-information class="svg-icon"></icon-information>
                </div>

                <v-section-title title="Information"
                                 center></v-section-title>
                <div class="content is-small"
                     style="margin:15px 0;">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>Thomas Pang</td>
                      </tr>
                      <tr>
                        <td>Occupation</td>
                        <td>Web Developer</td>
                      </tr>
                      <tr>
                        <td>Location</td>
                        <td>New York City</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>t.pang767@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Eleven</td>
                        <td>Twelve</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- <dl style="margin:15px 0;">
                    <dt>Name</dt>
                    <dd>Thomas Pang</dd>
                    <dt>Occupation</dt>
                    <dd>Web Developer</dd>
                  </dl> -->
                </div>

              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="image-placeholder"
                     is-centered>
                  <icon-hire class="svg-icon"></icon-hire>
                </div>

                <v-section-title title="Hire Talent"
                                 center></v-section-title>
                <p>
                  I am available for freelance work. If you have a cool idea, feel free to email me
                  to get the conversation going. I look forward to hearing about
                  your project.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="image-placeholder"
                     is-centered>
                  <icon-contact class="svg-icon"></icon-contact>
                </div>
                <v-section-title title="Additional"
                                 center></v-section-title>
                <div class="contact-info">
                  <div class="contact-item"
                       v-for="contact in contacts"
                       :key="contact.name">
                    <a class="contact-image"
                       :href="contact.path">
                      <i :class="contact.icon"
                         class="contact-icon fa-2x"></i>
                    </a>
                    <span class="contact-text">
                      {{contact.text}}
                    </span>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import VButtonVertical from '@/components/Buttons/VButtonVertical'
import VLoadingScreen from '@/components/VLoadingScreen'
import VImageCircle from '@/components/VImageCircle'
import VSectionTitle from '@/components/VSectionTitle'
import VFrameCard from '@/components/VFrameCard'
import IconHire from '@/assets/svg-icons/color-line/coffe.svg'
import IconContact from '@/assets/svg-icons/color-line/sunglasses.svg'
import IconInformation from '@/assets/svg-icons/color-line/book.svg'
import SectionAbout from '@/components/Sections/AboutMe'
import SectionSkills from '@/components/Sections/Skills'
export default {
  name: 'ContactView',
  components: {
    SectionAbout,
    VImageCircle,
    VLoadingScreen,
    VSectionTitle,
    VFrameCard,
    VButtonVertical,
    IconHire,
    IconContact,
    SectionSkills,
    IconInformation
  },
  data() {
    return {
      isLoading: true,
      contacts: [
        { name: 'email', icon: 'far fa-envelope', text: 't.pang767@gmail.com' },
        {
          name: 'github',
          icon: 'fab fa-github',
          text: 'github.com/tpang767',
          path: 'https://github.com/tpang767'
        },
        {
          name: 'linkedIn',
          icon: 'fab fa-linkedin-in',
          text: 'linkedin.com/in/thomas-pang/',
          path: 'https://linkedin.com/in/thomas-pang/'
        },
        {
          name: 'codepen',
          icon: 'fab fa-codepen',
          text: 'codepen.io/teapea767',
          path: 'https://codepen.io/teapea767'
        }
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

section.contact {
  @include border(bottom);
}

.contact-info {
  display: flex;
  flex-direction: column;
  // align-items:center;
  margin-top: 15px;
  // width: 90%;
  margin-left: auto;
  margin-right: auto;
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    > a {
      color: black;
    }
    > a:hover {
      color: $primary;
    }
    .contact-image {
      height: 32px;
      width: 32px;
      margin-right: 10px;
      .contact-icon {
        max-height: 100%;
        width: auto;
        object-fit: contain;
      }
    }
    .contact-text {
    }
  }
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
