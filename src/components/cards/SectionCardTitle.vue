<template>
  <div class="title-container">
    <DecorativeElement />
    <h4>{{ title }}</h4>
  </div>
</template>

<script lang="ts" setup>
import DecorativeElement from '../base/DecorativeElement.vue'

defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
.title-container {
  display: flex;
  align-items: center;
}

.title-container h4 {
  font-weight: bold;
}
</style>
