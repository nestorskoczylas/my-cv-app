<template>
  <q-header bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <div class="left-section">
        <div class="name-section">
          <div class="decorative-element"></div>
          <span class="name">{{ $t('fullName') }}</span>
        </div>
        <div class="position-info">
          <span class="separator">/</span>
          <span class="position">{{ $t('jobTitle') }}</span>
        </div>
      </div>

      <!-- begin:: Button menu -->
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
        <!-- begin:: Language Selector -->
        <div class="language-selector">
          <q-btn flat @click="changeLanguage('fr-FR')" class="lang-btn">
            <img src="/src/assets/flag_fr.png" alt="French" />
          </q-btn>
          <q-btn flat @click="changeLanguage('en-GB')" class="lang-btn">
            <img src="/src/assets/flag_en.png" alt="English" />
          </q-btn>
        </div>
        <!-- end:: Language Selector -->
      </q-toolbar-title>
      <!-- end:: Button menu -->

      <!-- begin:: Mobile menu -->
      <q-btn
        flat
        icon="menu"
        class="q-mr-sm q-d-none q-d-md-block"
        @click="toggleMenu"
        v-if="isSmallScreen"
      />
      <!-- end:: Mobile menu -->
    </q-toolbar>
  </q-header>

  <!-- begin:: Mobile menu -->
  <q-drawer
    v-model="menu"
    side="right"
    overlay
    behavior="mobile"
    class="full-width-drawer bg-white text-black"
    content-class="q-pa-md"
  >
    <div class="drawer-header">
      <q-btn
        flat
        icon="close"
        @click="toggleMenu"
        class="drawer-close-btn"
      />
    </div>
    <q-list class="drawer-list">
      <q-item clickable @click="goTo('home')">
        <q-item-section>{{ $t('AboutMe') }}</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item clickable @click="goTo('cv')">
        <q-item-section>{{ $t('CV') }}</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item clickable @click="goTo('projects')">
        <q-item-section>{{ $t('Projects') }}</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-separator />
      <div class="flex justify-around" style="margin-top: 1rem;">
        <q-item clickable @click="changeLanguage('fr-FR')">
          <q-item-section class="lang-btn-mobile">
            <img src="/src/assets/flag_fr.png" alt="French" />
          </q-item-section>
        </q-item>
        <q-item clickable @click="changeLanguage('en-GB')">
          <q-item-section class="lang-btn-mobile">
            <img src="/src/assets/flag_en.png" alt="English" />
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-drawer>
  <!-- end:: Mobile menu -->
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'src/boot/i18n'
import type { Locale } from 'src/i18n'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()
const menu = ref(false)
const isSmallScreen = ref(false)

const goTo = (path: string) => {
  router.push({ name: path })
}

const isActive = (name: string) => {
  return route.name === name
}

const changeLanguage = (lang: Locale) => {
  locale.value = lang
}

const toggleMenu = () => {
  menu.value = !menu.value
}

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 600
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
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

.name-section {
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

.lang-btn, .lang-btn-mobile {
  margin-left: 10px;
}

.lang-btn img {
  width: 20px;
  height: auto;
}

.lang-btn-mobile img {
  width: 30px;
  height: auto;
}

/* Drawer Styles */
.full-width-drawer {
  width: 100%;
  max-width: 100%;
}

.drawer-header {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.drawer-close-btn {
  color: blue;
}

.drawer-list .q-item {
  font-size: 1.25rem;
}

.drawer-list .q-item-section {
  font-size: 1.25rem;
}

.drawer-list .q-icon {
  margin-left: auto;
  color: blue;
  font-size: 1.75rem;
}
</style>