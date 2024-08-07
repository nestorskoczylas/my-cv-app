<template>
  <q-card class="card-base">
    <q-card-section>
      <div class="card-content">
        <div class="card-header">
          <div class="year">{{ year }}</div>
          <q-btn
            v-if="showMoreDetails"
            outline
            color="blue"
            :label="$t('MoreDetails')"
            class="show-more-details"
            @click="handleMoreDetails"
          />
        </div>
        <div class="card-section">
          <div class="title">{{ title }}</div>
          <div class="entity-location">{{ entity }} - {{ location }}</div>
          <slot name="details"></slot>
          <slot name="descriptions"></slot>
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
  showMoreDetails?: boolean
}>()

const emit = defineEmits(['moreDetails'])

const handleMoreDetails = () => {
  emit('moreDetails')
}

</script>

<style scoped lang="scss">
.card-base {
  margin-bottom: 1.8rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  padding-bottom: 0;
}

.card-section {
  width: 100%;
  padding: 1.25rem;
  padding-top: 0;
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

.show-more-details {
  align-self: flex-start;
  font-size: 0.75rem;
}
</style>
