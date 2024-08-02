<template>
  <q-header bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <div class="left-section">
        <div class="decorative-element"></div>
        <div class="header-info">
          <span class="name">{{ $t('fullName') }}</span>
          <div class="position-info">
            <span class="separator">/</span>
            <span class="position">{{ $t('jobTitle') }}</span>
          </div>
        </div>
      </div>
      <q-toolbar-title class="right-section">
        <q-btn
          :class="{ 'active-btn': isActive('home') }"
          flat
          :label="$t('AboutMe')"
          @click="goTo('home')"
        />
        <q-btn
          :class="{ 'active-btn': isActive('cv') }"
          flat
          :label="$t('CV')"
          @click="goTo('cv')"
        />
        <q-btn
          :class="{ 'active-btn': isActive('projects') }"
          flat
          :label="$t('Projects')"
          @click="goTo('projects')"
        />
        <!-- Language Selector -->
        <div class="language-selector">
          <q-btn flat @click="changeLanguage('fr-FR')" class="lang-btn">
            <img src="/src/assets/flag_fr.png" alt="French" />
          </q-btn>
          <q-btn flat @click="changeLanguage('en-GB')" class="lang-btn">
            <img src="/src/assets/flag_en.png" alt="English" />
          </q-btn>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'src/boot/i18n'
import type { Locale } from 'src/i18n'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

const goTo = (path: string) => {
  router.push({ name: path })
}

const isActive = (name: string) => {
  return route.name === name
}

const changeLanguage = (lang: Locale) => {
  locale.value = lang
}
</script>

<style scoped>
.q-header {
  padding-top: 10px;
  padding-bottom: 10px;
}

.left-section {
  display: flex;
  align-items: center;
}

.decorative-element {
  width: 10px;
  height: 10px;
  background-color: blue;
  margin-right: 10px;
}

.header-info {
  display: flex;
  align-items: center;
}

.name {
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1;
}

.position-info {
  text-transform: uppercase;
  margin-left: 10px;
}

.separator {
  font-weight: 300;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 1.25rem;
}

.position {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1.15rem;
  line-height: 1;
}

.right-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}

.right-section > .q-btn {
  font-size: 0.9rem;
  font-weight: 300;
}

.right-section > .q-btn:hover {
  color: blue;
}

.right-section .active-btn {
  color: blue;
}

.language-selector {
  display: flex;
  align-items: center;
}

.lang-btn {
  margin-left: 10px;
}

.lang-btn img {
  width: 20px;
  height: auto;
}
</style>
