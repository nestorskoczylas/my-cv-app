<template>
  <CardBase :year="year" :title="title" :entity="entity" :location="location">
    <template v-slot:descriptions>
      <div class="description-title">{{ descriptionTitle }}</div>
      <ul class="description-list">
        <li v-for="(desc, index) in descriptions" :key="index">{{ desc }}</li>
      </ul>
    </template>
  </CardBase>
</template>

<script lang="ts" setup>
import CardBase from './CardBase.vue';

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
