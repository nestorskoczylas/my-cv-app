<template>
  <q-card class="education-card">
    <q-card-section>
      <div class="education-content">
        <div class="education-section">
          <div class="year">{{ year }}</div>
          <div class="title">{{ title }}</div>
          <div class="entity-location">
            {{ entity }} - {{ location }}
          </div>
          <div class="description-title">{{ descriptionTitle }}</div>
          <ul class="description-list">
            <li v-for="(desc, index) in descriptions" :key="index">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<{
  year: string
  title: string
  entity: string
  location: string
  descriptionTitle: string
  descriptions: string[]
}>()
</script>

<style scoped lang="scss">
.education-card {
  margin-bottom: 1.8rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
}

.education-content {
  display: flex;
  width: 100%;
}

.education-section {
  width: 100%;
  padding: 1.25rem;
}

.year {
  color: blue;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
}

.title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.entity-location {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.6rem;
}

.description-title {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.6rem;
}

.description-list {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.description-list li {
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  list-style-type: none;
}
</style>
