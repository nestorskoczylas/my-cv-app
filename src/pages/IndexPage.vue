<template>
  <div class="index-page">
    <!-- Background -->
    <div class="background">
      <div class="background-left"></div>
      <div class="background-right"></div>
    </div>

    <!-- Card -->
    <q-card class="main-card" bordered>
      <q-card-section class="card-content">
        <!-- Left Section -->
        <div class="left-section">
          <div class="photo-container">
            <img src="/src/assets/personal.png" alt="Photo" class="photo" />
          </div>
          <div class="name">{{ $t('fullName') }}</div>
          <div class="blue-line"></div>
          <div class="job-title">{{ $t('jobTitle') }}</div>
          <div class="social-footer">
            <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
              <img src="/src/assets/github.png" alt="GitHub" class="social-icon" />
            </q-btn>
            <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
              <img src="/src/assets/linkedin.png" alt="LinkedIn" class="social-icon" />
            </q-btn>
          </div>
        </div>

        <!-- Right Section -->
        <div class="right-section">
          <div class="greeting">{{ $t('greeting') }}</div>
          <div class="intro">{{ $t('intro') }}</div>
          <div class="buttons">
            <q-btn flat :label="$t('CV')" @click="goTo('cv')" />
            <q-btn flat :label="$t('Projects')" @click="goTo('projects')" />
          </div>
          <div class="description">
            {{ $t('description') }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path: string) => {
  router.push({ name: path })
}

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped lang="scss">
.index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;
}

.background-left {
  background-color: $dark-beige;
  width: 33%;
  height: 100%;
}

.background-right {
  background-color: white;
  width: 67%;
  height: 100%;
}

.main-card {
  display: flex;
  width: 90%;
  max-width: 1200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  width: 100%;
}

.left-section {
  background-color: $beige;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  margin-bottom: 20px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.blue-line {
  width: 25%;
  height: 0.2rem;
  background-color: blue;
  margin-bottom: 10px;
}

.job-title {
  font-size: 1.2rem;
  color: #333;
}

.social-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-btn {
  padding: 0;
  margin: 0 10px;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.right-section {
  background-color: white;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.greeting {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 10px;
}

.intro {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.buttons {
  margin-bottom: 20px;
}

.buttons .q-btn {
  margin-right: 10px;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
