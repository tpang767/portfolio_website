<template>
  <section class="section skillset">
    <divider-svg class="divider-svg"></divider-svg>
    <div class="container">
      <v-section-title title="Skills"></v-section-title>
      <div class="skills">
        <template v-for="svg in svgList">
          <grid-block :title="svg.name"
                      :key="svg.name">
            <component :is="svg.component"
                       class="skill-logo"></component>
          </grid-block>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import GridBlock from '@/components/Blocks/GridBlock'
import WebpackLogo from '@/assets/svg-icons/webpack.svg'
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
import DividerSvg from '@/assets/svg-icons/section-divider.svg'
export default {
  name: 'SkillView',
  components: {
    JavascriptLogo,
    WebpackLogo,
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
    DividerSvg
  },
  data() {
    return {
      svgList: [
        { name: 'Javascript', component: 'JavascriptLogo' },
        { name: 'Webpack', component: 'WebpackLogo' },
        { name: 'CSS', component: 'CssLogo' },
        { name: 'Bitbucket', component: 'BitBucketLogo' },
        { name: 'Git', component: 'GitLogo' },
        { name: 'Bootstrap', component: 'BootstrapLogo' },
        { name: 'Mongodb', component: 'MongodbLogo' },
        { name: 'Vuejs', component: 'VuejsLogo' },
        { name: 'Sass', component: 'SassLogo' },
        { name: 'PHP', component: 'PhpLogo' },
        { name: 'Nodejs', component: 'NodejsLogo' },
        { name: 'Javascript', component: 'HtmlLogo' }
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
section.skillset {
  position: relative;
  overflow: hidden;
  @include shade-background;
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
  margin-bottom: 10rem;
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
