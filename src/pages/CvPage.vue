<template>
  <div class="cv-page">
    <div class="cv-background">
      <!-- Section for Title -->
      <div class="title-wrapper">
        <SectionCardTitle :title="$t('experiencesTitle')" />
        <q-btn v-if="!isMobile" class="cv-button" icon="picture_as_pdf" :label="$t('DownloadResume')" flat dense @click="openCv" />
      </div>

      <!-- Experience Cards -->
      <ExperienceCard
      v-for="(experience, index) in experiences"
      :key="index"
      :id="experience.id"
      :year="experience.year"
      :title="experience.employmentType ? `${experience.title} - ${experience.employmentType}` : experience.title"
      :entity="experience.entity"
      :location="experience.location"
      :detailTitle="experience.detailTitle"
      :details="experience.details"
      :descriptionTitle="experience.descriptionTitle"
      :descriptions="experience.descriptions"
      :showMoreDetails="isMobile ? false : experience.showMoreDetails"
      />

      <!-- Section for Title -->
      <SectionCardTitle :title="$t('diplomasTitle')" />

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
      <SectionCardTitle :title="$t('trainingsTitle')" />

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
      <SectionCardTitle :title="$t('personalExperiencesTitle')" />

      <!-- Personal Experiences Cards -->
      <ExperienceCard
        v-for="(personalExperience, index) in personalExperiences"
        :key="index"
        :id="personalExperience.id"
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
      <SectionCardTitle :title="$t('skillsTitle')" />

      <!-- Skills Cards -->
      <SkillCard
        :skills="skills"
      />

      <!-- Section for Title -->
      <SectionCardTitle :title="$t('qualitiesTitle')" />

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
import ExperienceCard from '../components/cards/ExperienceCard.vue'
import EducationCard from '../components/cards/EducationCard.vue'
import SkillCard from '../components/cards/SkillCard.vue'
import SectionCardTitle from 'src/components/cards/SectionCardTitle.vue'

const { tm } = useI18n()

const isMobile = computed(() => window.innerWidth < 768)

const baseUrlImg = process.env.BASE_URL_IMAGE
const openCv = () => {
  window.open(`${baseUrlImg}cv.pdf`, '_blank')
}

const experiences = computed(() => tm('experiences') as Array<{
  id: number
  year: string
  title: string
  employmentType?: string
  entity: string
  location: string
  detailTitle: string
  details: string[]
  descriptionTitle: string
  descriptions: string[]
  showMoreDetails: boolean
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
  id: number
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
.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cv-button {
  background-color: white;
  color: $blue;
  margin-left: 10px;
  padding: 0.5rem;
}
</style>
