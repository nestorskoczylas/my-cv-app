<template>
  <q-card class="experience-card">
    <q-card-section>
      <div class="year">{{ year }}</div>
      <div class="title">{{ title }}</div>
      <div class="entity">{{ entity }}</div>
      <div class="location">{{ location }}</div>
      <div class="details">
        <div class="detail-title">{{ detailTitle }}</div>
        <div class="details-list">{{ details }}</div>
      </div>
      <div class="description">
        <div class="description-title">{{ descriptionTitle }}</div>
        <div class="description-list">{{ descriptions }}</div>
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
  detailTitle: string
  details: string
  descriptionTitle: string
  descriptions: string
}>()
</script>

<style scoped lang="scss">
.experience-card {
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.year {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.entity, .location {
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
}

.details, .description {
  margin-top: 10px;
}

.detail-title, .description-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.details-list, .description-list {
  font-size: 1rem;
}
</style>
