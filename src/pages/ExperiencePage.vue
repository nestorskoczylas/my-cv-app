<template>
  <q-page class="experience-page">
    <q-breadcrumbs class="breadcrumbs">
      <!-- Back-arrow dans une card avec fond blanc -->
      <q-breadcrumbs-el>
        <q-card flat class="back-button">
          <q-btn icon="arrow_back" to="/cv" flat dense />
        </q-card>
        <span class="cv-label">CV</span>
      </q-breadcrumbs-el>

      <!-- 'entity' en $blue et italique pour 'entity - title' -->
      <q-breadcrumbs-el class="breadcrumb-entity-title">
        <span class="breadcrumb-entity">{{ experience?.entity }}</span>
        <span class="breadcrumb-title"> - {{ experience?.title }}</span>
      </q-breadcrumbs-el>
    </q-breadcrumbs>
  </q-page>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const experience = ref()
const { tm } = useI18n()

const experiences = computed(() => tm('experiences') as Array<{
  id: number
  title: string
  entity: string
}>)

onMounted(() => {
  const id = route.params.id[0]
  experience.value = experiences.value.find((experience) => experience.id === parseInt(id))
})
</script>

<style scoped lang="scss">
.experience-page {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: $dark-beige;
}

/* BreadCrumbs Styles */
.breadcrumbs {
  margin-bottom: 20px;
  font-size: 1.25rem;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25%;
  padding: 0.3rem;
  color: $blue;
  margin-right: 1rem;
}

.cv-label {
  font-weight: bold;
  color: $blue;
}

.breadcrumb-entity-title {
  font-style: italic;
  font-weight: 300;
}

.breadcrumb-entity {
  color: $blue;
  margin-right: 0.3rem;
}
</style>
