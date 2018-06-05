<template>
  <div class="project-item card">
    <div class="project-image">
      <figure class="image is-16by9">
        <img :src="`${item.image}`"
             alt="Placeholder image">
      </figure>
    </div>
    <div class="project-content card-content">
      <div class="content">
        <p href="#"
           class="title is-6">{{item.title}}</p>
        <p href="#"
           class="">
          <strong>{{item.subtitle}}</strong>
        </p>
        <p>{{item.description}}</p>
        <!-- <br/> -->
        <button class="button is-outlined is-medium"
                @click="handleModal">View Project</button>

        <div class="modal"
             :class="{'is-active': modalOpen}">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{{item.title}}</p>
              <button class="delete"
                      aria-label="close"
                      @click="handleModal"></button>
            </header>
            <section class="modal-card-body">
              <p>{{item.description}}</p>
            </section>
            <footer class="modal-card-foot">

            </footer>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    item: {
      type: Object,
      default: () => {
        image: '/static/images/projects/DigiTracker/AddHolding.png'
      }
    }
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    handleModal() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>

<style lang="scss">
</style>
