<template>
  <section class="section skillset">
    <div class="container">
      <div class="tile is-ancestor">

        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="image-placeholder"
                 is-centered>
              <icon-skill class="svg-icon"></icon-skill>
            </div>

            <v-section-title title="Skills"
                             center></v-section-title>
            <p>
              Frontend/backend development skills with some design experience. I am constantly
              exploring new technologies to ensure I am implementing the best practices
              for all my products.
            </p>
          </article>
        </div>
        <div class="tile is-parent is-8">
          <article class="tile is-child box"
                   style="
                   border:0;
                   padding:0;
                   box-shadow:none
                   ">

            <div class="skills">
              <template v-for="svg in svgList">
                <grid-block :title="svg.name"
                            :key="svg.name">
                  <component :is="svg.component"
                             class="skill-logo"></component>
                </grid-block>
              </template>
            </div>
            <!-- <v-section-title title="Core Focus"></v-section-title> -->
            <!-- <div class="skills--focus">
              <template v-for="skill in skills.focus">
                <grid-block :title="skill.name"
                            :key="skill.name">
                  <component :is="skill.component"
                             class="skill-logo"></component>
                </grid-block>
              </template>
            </div> -->
          </article>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import GridBlock from '@/components/Blocks/GridBlock'
import WebpackLogo from '@/assets/svg-icons/webpack.svg'
import ExpressLogo from '@/assets/svg-icons/express.svg'
import JavascriptLogo from '@/assets/svg-icons/javascript.svg'
import CssLogo from '@/assets/svg-icons/css.svg'
import GitLogo from '@/assets/svg-icons/git.svg'
import BitBucketLogo from '@/assets/svg-icons/bitbucket.svg'
import BootstrapLogo from '@/assets/svg-icons/bootstrap.svg'
import JqueryLogo from '@/assets/svg-icons/jquery.svg'
import MongodbLogo from '@/assets/svg-icons/mongodb.svg'
import VuejsLogo from '@/assets/svg-icons/vuejs.svg'
import SassLogo from '@/assets/svg-icons/sass.svg'
import PhpLogo from '@/assets/svg-icons/php.svg'
import NodejsLogo from '@/assets/svg-icons/nodejs.svg'
import HtmlLogo from '@/assets/svg-icons/html.svg'
import VSectionTitle from '@/components/VSectionTitle'
import VSectionDivider from '@/components/VSectionDivider'
import IconSkill from '@/assets/svg-icons/color-line/art_palette.svg'
export default {
  name: 'SkillView',
  components: {
    JavascriptLogo,
    WebpackLogo,
    ExpressLogo,
    CssLogo,
    GitLogo,
    BitBucketLogo,
    BootstrapLogo,
    JqueryLogo,
    MongodbLogo,
    VuejsLogo,
    SassLogo,
    PhpLogo,
    NodejsLogo,
    HtmlLogo,
    VSectionTitle,
    GridBlock,
    IconSkill
  },
  data() {
    return {
      skills: {
        focus: [
          { name: 'Mongodb', component: 'MongodbLogo' },
          { name: 'Express', component: 'ExpressLogo' },
          { name: 'Vuejs', component: 'VuejsLogo' },
          { name: 'Nodejs', component: 'NodejsLogo' }
        ]
      },
      svgList: [
        { name: 'HTML', component: 'HtmlLogo' },
        { name: 'CSS', component: 'CssLogo' },
        { name: 'Sass', component: 'SassLogo' },
        { name: 'Javascript', component: 'JavascriptLogo' },
        { name: 'Nodejs', component: 'NodejsLogo' },
        { name: 'Vuejs', component: 'VuejsLogo' },
        { name: 'Mongodb', component: 'MongodbLogo' },
        { name: 'Bootstrap', component: 'BootstrapLogo' },
        { name: 'Webpack', component: 'WebpackLogo' },
        { name: 'Bitbucket', component: 'BitBucketLogo' },
        { name: 'Git', component: 'GitLogo' },
        { name: 'PHP', component: 'PhpLogo' }
      ]
    }
  },
  methods: {
    selection() {
      return 'CssLogo'
    }
  }
}
</script>

<style lang="scss">
section.section.skillset {
  padding-top: 0;
}
.skill-logo {
  max-width: 50px;
  width: 50px;
  border-radius: 6px;
}
/* Skills */
.skills {
  display: grid;
  // grid-template-columns: repeat(4, minmax(100px, 170px));
  grid-template-rows: auto;
  align-items: center;
  width: fit-content;
  grid-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.skills--focus {
  display: grid;
  margin-top: 15px;
  height: 140px;
  grid-template-columns: repeat(4, minmax(100px, 140px));
  width: fit-content;
  grid-gap: 1rem;
  .focus-item {
    grid-column: 1;
  }
}
@include mobile() {
  .skills {
    grid-template-columns: repeat(2, minmax(100px, 170px));
  }
}
@include tablet() {
  .skills {
    grid-template-columns: repeat(2, minmax(100px, 170px));
  }
}

@include desktop() {
  .skills {
    grid-template-columns: repeat(4, minmax(100px, 170px));
  }
}

.grid-block .skill-logo {
  display: block;
  margin: 0 auto;
}
.grid-block {
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  padding: 2rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  // margin: 0.5rem;
}

.grid-block:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  -webkit-box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
}

.grid-block h3 {
  font-weight: 400;
  font-size: 1rem;
  margin: 2rem 0 0;
  text-align: center;
}
.skills .grid-block .skill-logo {
  max-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 6px;
}
@media screen and (min-width: 650px) {
  .skills .grid-block {
    height: 100%;
  }
}
</style>
