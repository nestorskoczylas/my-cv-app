<template>
  <q-card class="experience-card">
    <q-card-section>
      <div class="experience-content">
        <!-- Left Section -->
        <div class="left-section">
          <div class="year">{{ year }}</div>
          <div class="title">{{ title }}</div>
          <span class="entity-location">
            {{ entity }} - {{ location }}
          </span>
          <div class="details">
            <div class="detail-title">{{ detailTitle }}</div>
            <ul class="details-list">
              <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
            </ul>
          </div>
        </div>
        <!-- Right Section -->
        <div class="right-section">
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
  detailTitle: string
  details: string[]
  descriptionTitle: string
  descriptions: string[]
}>()
</script>

<style scoped lang="scss">
.experience-card {
  margin-bottom: 1.8rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 0.6rem;
}

.experience-content {
  display: flex;
  width: 100%;
}

.left-section {
  width: 50%;
  padding: 1.25rem;
}

.right-section {
  width: 50%;
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

.details, .description {
  margin-top: 1.25rem
}

.detail-title, .description-title {
  font-weight: bold;
  font-size: 1rem;
}

.details-list, .description-list {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.details-list li, .description-list li {
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  list-style-type: none;
}
</style>