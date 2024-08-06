<!-- components/SocialButtons.vue -->
<template>
  <div>
    <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
      <img src="../assets/github.png" alt="GitHub" />
    </q-btn>
    <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
      <img src="../assets/linkedin.png" alt="LinkedIn" />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.social-btn img {
  width: 1.6rem;
  height: 1.6rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-btn img:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
