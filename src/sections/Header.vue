<template>
  <section class="hero header is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/placeholders/50x50.png"
                   alt="Logo">
            </a>
            <span class="navbar-burger burger"
                  data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB"
               class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Examples
              </a>
              <a class="navbar-item">
                Documentation
              </a>
              <span class="navbar-item">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Full Height title
            </h1>
            <h2 class="subtitle">
              Full Height subtitle
            </h2>
          </div>
          <div class="column">

          </div>
        </div>

      </div>
    </div>
    <div class="hero-footer"></div>
  </section>
</template>

<script>
// import TriangleSquare from '@/assets/svg-icons/polygons/triangle-square.svg'
import VectorHeadline from '@/components/Vectors/VectorHeadline'
import VFrameCard from '@/components/VFrameCard'
export default {
  name: 'HeaderSection',
  components: {
    VectorHeadline,
    VFrameCard
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
section.header {
  position: relative;
  overflow: hidden;




}

  .inner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.headlines--header {
  .headline-1 {
    font-size: 3.25rem;
  }
  .headline-2 {
    font-size: 2rem;
  }
}

style>
