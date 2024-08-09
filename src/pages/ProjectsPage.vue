<template>
  <div class="projects-page">
    <div class="projects-background">
      <!-- Section for Projects -->
      <SectionCardTitle :title="$t('projectsTitle')" />

      <!-- Project Cards -->
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :year="project.year"
        :entity="project.entity"
        :location="project.location"
        :technologies="project.technologies"
        :description="project.description"
        :links="project.links"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'src/boot/i18n'
import { computed } from 'vue'
import ProjectCard from '../components/cards/ProjectCard.vue'
import SectionCardTitle from 'src/components/cards/SectionCardTitle.vue'

const { tm } = useI18n()

const projects = computed(() => tm('projects') as Array<{
  title: string
  year: string
  entity?: string
  location?: string
  technologies: string[]
  description: string
  links: { title: string, url: string }[]
}>)
</script>

<style scoped lang="scss">
.projects-page {
  background-color: $dark-beige;
  padding: 1.25rem;
  min-height: 100vh;
}

.projects-background {
  max-width: 800px;
  margin: 0 auto;
}
</style>
