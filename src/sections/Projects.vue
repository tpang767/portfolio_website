<template>
  <section class="section projects">
    <!-- <v-section-divider :flipped="true"
                       :colored="true"></v-section-divider> -->
    <div class="container">
      <v-section-title title="Recent Work"></v-section-title>
    </div>
    <div class="container">
      <template v-for="project in projects">
        <!-- <project-item :item="project"
                        :key="project.title"></project-item> -->
        <project-card :title="project.title"
                      :subtitle="project.subtitle"
                      :summary="project.description"
                      :image="project.image"
                      :key="project.title"></project-card>

      </template>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectItem from '@/components/ProjectItem'
import ProjectCard from '@/components/Projects/ProjectCard'
import VSectionTitle from '@/components/VSectionTitle'
import VSectionDivider from '@/components/VSectionDivider'
export default {
  name: 'Projects',
  components: {
    ProjectItem,
    VSectionTitle,
    VSectionDivider,
    ProjectCard
  },
  computed: mapGetters({
    projects: 'allProjects'
  }),
  created() {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<style lang="scss">
section.projects {
  position: relative;
  overflow: hidden;
}
</style>
