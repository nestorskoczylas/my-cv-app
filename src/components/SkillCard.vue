<template>
  <q-card class="skill-card">
    <q-card-section>
      <div class="skill-content">
        <div class="skill-item" v-for="(item, index) in skills" :key="index">
          <span><strong>{{ item.title }} :</strong> {{ item.description }}</span>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<{
  skills: { title: string; description: string }[]
}>()
</script>

<style scoped lang="scss">
.skill-card {
  margin-bottom: 1.8rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
}

.skill-content {
  display: flex;
  flex-direction: column;
}

.skill-item {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
}
</style>
