<template>
  <q-footer bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <div class="left-section">
        <span>&copy; {{ currentYear }} {{ $t('fullName') }}</span>
      </div>
      <div class="right-section">
        <span>{{ $t('license') }}</span>
        <span>(+33) 7 83 59 04 23</span>
        <span>nestor.skoczylas23@gmail.com</span>
        <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
          <img src="/src/assets/github.png" alt="GitHub" />
        </q-btn>
        <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
          <img src="/src/assets/linkedin.png" alt="LinkedIn" />
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.q-footer {
  padding-top: 10px;
  padding-bottom: 10px;
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
}

.right-section span {
  margin-right: 10px;
  font-weight: 300;
}

.right-section .q-btn {
  font-size: 0.9rem;
  font-weight: 300;
}

.social-btn img {
  width: 1.6rem;
  height: 1.6rem;
}
</style>
