<template>
  <div class="index-page">
    <!-- Background -->
    <div class="background">
      <div class="background-left"></div>
      <div class="background-right"></div>
    </div>

    <!-- Card -->
    <q-card class="main-card">
      <div class="profile-info">
        <div class="photo-container">
          <img src="/src/assets/personal.png" alt="Photo" class="photo" />
        </div>
        <div class="name">
          <div>{{ $t('firstName') }}</div>
          <div>{{ $t('lastName') }}</div>
        </div>
        <div class="blue-line"></div>
        <div class="job-title">{{ $t('jobTitle') }}</div>
      </div>
      <div class="social-footer">
        <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
          <img src="/src/assets/github.png" alt="GitHub" />
        </q-btn>
        <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
          <img src="/src/assets/linkedin.png" alt="LinkedIn" />
        </q-btn>
      </div>
    </q-card>

    <!-- Right Section -->
    <div class="right-section">
      <div class="greeting">{{ $t('greeting') }}</div>
      <div class="intro">{{ $t('intro') }}</div>
      <div class="buttons">
        <q-btn outline rounded color="blue" :label="$t('CV')" @click="goTo('cv')" />
        <q-btn unelevated rounded color="blue" :label="$t('Projects')" @click="goTo('projects')" />
      </div>
      <div class="description">
        {{ $t('description') }}
      </div>
    </div>
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

/* Background Styles */
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
  width: 40%;
  height: 100%;
}

.background-right {
  background-color: white;
  width: 60%;
  height: 100%;
}

/* Card Styles */
.main-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Profile Info Styles */
.profile-info {
  background-color: $beige;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-container {
  margin-top: 20px;
  width: 205px;
  height: 205px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  margin-bottom: 30px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 25px;
}

.blue-line {
  width: 25%;
  height: 0.2rem;
  background-color: blue;
  margin-bottom: 25px;
}

.job-title {
  font-weight: 300;
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  letter-spacing: 0.1rem;
}

/* Social Footer Styles */
.social-footer {
  padding: 10px 20px;
  background-color: white;
  display: flex;
  justify-content: center;
}

/* Right Section Styles */
.right-section {
  width: 25%;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.greeting {
  font-weight: bold;
  font-size: 6.25rem;
  margin-bottom: 10px;
}

.intro {
  font-size: 1.8rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
}

/* Buttons Styles */
.buttons {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
}

.buttons .q-btn {
  margin-right: 10px;
  width: 40%;
}

.buttons .q-btn:hover, .buttons .q-btn:focus {
  color: white;
  background-color: blue;
  opacity: 0.8;  
}
</style>
