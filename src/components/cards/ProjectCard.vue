<template>
  <q-card class="project-card">
    <q-card-section>
      <div class="project-content">
        <div class="project-details">
          <div class="project-title">{{ title }}</div>
          <div class="project-year"><strong>{{ year }}</strong></div>
          <div v-if="entity || location" class="project-entity-location">
            {{ entity }} <span v-if="location">- {{ location }}</span>
          </div>
          <div class="project-description">{{ description }}</div>
          <div class="project-link-title">{{ $t('linkTitle') }}</div>
          <ul class="project-links">
            <li v-for="(link, index) in links" :key="index" class="project-link-item">
              <q-icon name="arrow_forward_ios" size="14px" class="project-link-icon" />
              <a :href="link.url" target="_blank" class="project-link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="project-technologies">
          <div class="technology-title">{{ $t('technologyTitle') }}</div>
          <ul class="technology-list">
            <li v-for="(tech, index) in technologies" :key="index" class="technology-item">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  year: string
  entity?: string
  location?: string
  technologies: string[]
  description: string
  links: { title: string, url: string }[]
}>()
</script>

<style scoped lang="scss">
.project-card {
  margin-bottom: 1.8rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
}

.project-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1.25rem;
}

.project-details {
  width: 75%;
  padding-right: 1.25rem;
}

.project-title {
  color: $blue;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.project-year {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.project-entity-location {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.project-description {
  font-style: italic;
  color: #333;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.project-link-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.project-links {
  list-style-type: none;
  padding-left: 0.5rem;
}

.project-link-item {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.project-link-icon {
  margin-right: 0.5rem;
  color: $blue;
}

.project-link {
  text-decoration: none;
  color: $blue;
}

.project-technologies {
  margin-top: 2rem;
  margin-left: 2rem;
}

.technology-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.technology-list {
  padding-left: 1.5rem;
}

.technology-item {
  margin-bottom: 0.5rem;
  color: #333;
}
</style>
