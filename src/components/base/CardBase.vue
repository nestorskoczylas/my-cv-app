<template>
  <q-card class="card-base">
    <q-card-section>
      <div class="card-content">
        <div class="card-section">
          <div class="year">{{ year }}</div>
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
}>()
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
  width: 100%;
}

.card-section {
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
</style>
