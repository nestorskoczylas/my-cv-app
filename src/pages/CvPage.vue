<template>
  <div class="cv-page">
    <div class="cv-background">
      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('experiencesTitle') }}</h4>
      </div>

      <!-- Experience Cards -->
      <ExperienceCard
      v-for="(experience, index) in experiences"
      :key="index"
      :year="experience.year"
      :title="experience.title"
      :entity="experience.entity"
      :location="experience.location"
      :detailTitle="experience.detailTitle"
      :details="experience.details"
      :descriptionTitle="experience.descriptionTitle"
      :descriptions="experience.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('diplomasTitle') }}</h4>
      </div>

      <!-- Diplomas Cards -->
      <EducationCard
        v-for="(education, index) in educations"
        :key="index"
        :year="education.year"
        :title="education.title"
        :entity="education.entity"
        :location="education.location"
        :descriptionTitle="education.descriptionTitle"
        :descriptions="education.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('trainingsTitle') }}</h4>
      </div>

      <!-- Formations Cards -->
      <EducationCard
        v-for="(training, index) in trainings"
        :key="index"
        :year="training.year"
        :title="training.title"
        :entity="training.entity"
        :location="training.location"
        :descriptionTitle="training.descriptionTitle"
        :descriptions="training.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('personalExperiencesTitle') }}</h4>
      </div>

      <!-- Personal Experiences Cards -->
      <ExperienceCard
        v-for="(personalExperience, index) in personalExperiences"
        :key="index"
        :year="personalExperience.year"
        :title="personalExperience.title"
        :entity="personalExperience.entity"
        :location="personalExperience.location"
        :detailTitle="personalExperience.detailTitle"
        :details="personalExperience.details"
        :descriptionTitle="personalExperience.descriptionTitle"
        :descriptions="personalExperience.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('skillsTitle') }}</h4>
      </div>

      <!-- Skills Cards -->
      <SkillCard
        :skills="skills"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>{{ $t('qualitiesTitle') }}</h4>
      </div>

      <!-- Qualities Cards -->
      <SkillCard
        :skills="qualities"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'src/boot/i18n'
import { computed } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import EducationCard from '../components/EducationCard.vue'
import SkillCard from '../components/SkillCard.vue'

const { tm } = useI18n()

const experiences = computed(() => tm('experiences') as Array<{
  year: string
  title: string
  entity: string
  location: string
  detailTitle: string
  details: string[]
  descriptionTitle: string
  descriptions: string[]
}>)

const educations = computed(() => tm('educations') as Array<{
  year: string
  title: string
  entity: string
  location: string
  descriptionTitle: string
  descriptions: string[]
}>)

const trainings = computed(() => tm('trainings') as Array<{
  year: string
  title: string
  entity: string
  location: string
  descriptionTitle: string
  descriptions: string[]
}>)

const personalExperiences = computed(() => tm('personalExperiences') as Array<{
  year: string
  title: string
  entity: string
  location: string
  detailTitle: string
  details: string[]
  descriptionTitle: string
  descriptions: string[]
}>)

const skills = computed(() => tm('skills') as Array<{
  title: string
  description: string
}>)

const qualities = computed(() => tm('qualities') as Array<{
  title: string
  description: string
}>)
</script>

<style scoped lang="scss">
.cv-page {
  background-color: $dark-beige;
  padding: 1.25rem;
  min-height: 100vh;
}

.cv-background {
  max-width: 800px;
  margin: 0 auto;
}

/* Title and Decorative Element */
.title-container {
  display: flex;
  align-items: center;
}

.title-container h4 {
  font-weight: bold;
}

.decorative-element {
  width: 15px;
  height: 15px;
  background-color: blue;
  margin-right: 15px;
}
</style>
