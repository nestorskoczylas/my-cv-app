<template>
  <q-page class="experience-page">
    <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el>
        <q-card flat class="breadcrumbs__back-button">
          <q-btn icon="arrow_back" to="/cv" flat dense />
        </q-card>
        <span class="breadcrumbs__cv-label">CV</span>
      </q-breadcrumbs-el>

      <q-breadcrumbs-el class="breadcrumbs__entity-title">
        <span class="breadcrumbs__entity">{{ experience?.entity }}</span>
        <span class="breadcrumbs__title"> - {{ experience?.title }}</span>
      </q-breadcrumbs-el>
    </q-breadcrumbs>

    <div class="content">
      <q-card class="content__card">
        <q-card-section class="content__section content__section--overview">
          <div class="content__left-column">
            <div class="content__entity-title">
              <span class="content__entity">{{ experience?.entity }}</span>
              <span class="content__title"> - {{ experience?.title }}</span>
            </div>
            <div class="content__duration">
              <p>{{ experience?.duration }}, {{ $t('in') }} {{ experience?.location }}</p>
            </div>
          </div>
          <div class="content__right-column">
            <div class="content__keywords">
              <q-card class="content__keyword-card" v-for="keyword in experience?.keywords" :key="keyword">
                <q-card-section class="content__keyword-section">
                  <p>{{ keyword }}</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="content__section content__section--details">
          <div class="content__context">
            <span class="content__section-title">{{ $t('contextTitle') }} :</span>
            <p class="content__section-content">{{ experience?.context }}</p>
          </div>
          <div class="content__environments">
            <span class="content__section-title">{{ $t('environmentTitle') }} :</span>
            <p class="content__section-content">{{ experience?.environments.join(', ') }}</p>
          </div>
          <div class="content__methodologies">
            <span class="content__section-title">{{ $t('methodologyTitle') }} :</span>
            <p class="content__section-content">{{ experience?.methodologies.join(', ') }}</p>
          </div>
        </q-card-section>
      </q-card>

      <div class="content__additional">
        <span class="content__achievements-title">{{ $t('achievements') }}</span>
        <div class="content__achievements-columns">
          <div class="content__achievements-column">
            <span class="content__column-title">{{ $t('achievementsGeneralTitle') }} :</span>
            <ul>
              <li v-for="item in experience?.achievementsGenerals" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="content__achievements-column">
            <span class="content__column-title">{{ $t('achievementsMethodologyTitle') }} :</span>
            <ul>
              <li v-for="item in experience?.achievementsMethodologies" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="content__achievements-column">
            <span class="content__column-title">{{ $t('interventionsTitle') }} :</span>
            <ul>
              <li v-for="item in experience?.interventions" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { watch, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const experience = ref()
const { tm } = useI18n()

const experiences = computed(() => tm('experiences') as Array<{
  id: number
  title: string
  employmentType?: string
  entity: string
  location: string
  duration: string
  keywords: string[]
  context: string
  environments: string[]
  methodologies: string[]
  achievementsGenerals: string[]
  achievementsMethodologies: string[]
  interventions: string[]
}>)

watch([experiences, () => route.params.id], () => {
  const id = route.params.id[0]
  experience.value = experiences.value.find(exp => exp.id === parseInt(id))
}, { immediate: true })
</script>

<style scoped lang="scss">
.experience-page {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: $dark-beige;
}

/* Breadcrumbs Styles */
.breadcrumbs {
  margin-bottom: 20px;
  font-size: 1.25rem;
}

.breadcrumbs__back-button {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25%;
  padding: 0.3rem;
  color: $blue;
  margin-right: 1rem;
}

.breadcrumbs__cv-label {
  font-weight: bold;
  color: $blue;
}

.breadcrumbs__entity-title {
  font-style: italic;
  font-weight: 300;
}

.breadcrumbs__entity {
  color: $blue;
  margin-right: 0.3rem;
}

/* Content Styles */
.content {
  flex-grow: 1;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content__card,
.content__additional {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.content__card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content__section--overview,
.content__section--details {
  padding: 0.5rem 0;
  width: 100%;
}

.content__section--overview {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content__left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-left: 0.5rem;
}

.content__entity-title {
  margin-bottom: 0.5rem;
}

.content__entity {
  color: $blue;
  font-size: 2.5rem;
  font-weight: 700;
}

.content__title {
  font-size: 1.75rem;
  font-weight: 300;
}

.content__duration {
  font-size: 1.25rem;
  font-weight: 300;
}

.content__right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.content__keywords {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;
}

.content__keyword-card {
  background-color: white;
  border: 1px solid $blue;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content__keyword-section {
  padding: 0.5rem;
}

.content__keyword-section p {
  margin: 0;
}

.content__section--details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.content__context, .content__environments, .content__methodologies {
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
}

.content__context {
  flex: 7;
}

.content__environments, .content__methodologies {
  flex: 1;
}

.content__section-title {
  color: $blue;
  font-weight: bold;
  font-size: 1.3rem;
}

.content__section-content {
  font-size: 1rem;
  color: #333;
}

/* Additional Content Styles */
.content__additional {
  margin-left: 0.5rem;
}

.content__achievements-title {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: $blue;
}

.content__achievements-columns {
  display: flex;
  margin: 0 1rem;
}

.content__achievements-column {
  margin-right: 1rem;
}

.content__column-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: $blue;
}

ul {
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: disc;
  line-height: 2;
}

li {
  margin-bottom: 0.3rem;
}
</style>