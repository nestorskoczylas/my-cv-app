<template>
  <CardBase :year="year" :title="title" :entity="entity" :location="location" :showMoreDetails="showMoreDetails" @more-details="handleMoreDetails">
    <template v-slot:details>
      <div class="detail-title">{{ detailTitle }}</div>
      <div class="detail-list">{{ details.join(', ') }}</div>
    </template>
    <template v-slot:descriptions>
      <div class="description-title">{{ descriptionTitle }}</div>
      <ul class="description-list">
        <li v-for="(desc, index) in descriptions" :key="index">{{ desc }}</li>
      </ul>
    </template>
  </CardBase>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import CardBase from '../base/CardBase.vue'

const props = defineProps<{
  id: number
  year: string
  title: string
  entity: string
  location: string
  detailTitle: string
  details: string[]
  descriptionTitle: string
  descriptions: string[]
  showMoreDetails?: boolean
}>()

const router = useRouter()

const handleMoreDetails = () => {
  router.push({ name: 'experience', params: { id: props.id } })
}

</script>

<style scoped lang="scss">
.detail-title {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  padding-top: 0.6rem;
}

.detail-list {
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  padding-left: 1.25rem;
}

.description-title {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  padding-top: 0.6rem;
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
