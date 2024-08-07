<template>
  <!-- begin:: Header Component -->
  <q-header bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <!-- begin:: Left Section: Name and Position -->
      <div class="left-section">
        <!-- begin:: Name Section -->
        <div class="name-section">
          <DecorativeElement />
          <span class="name">{{ $t('fullName') }}</span>
        </div>
        <!-- end:: Name Section -->

        <!-- begin:: Position Info: Job Title with separator -->
        <div :class="['position-info', { 'mobile-position-info': isSmallScreen }]">
          <span v-if="!isSmallScreen" class="separator">/</span>
          <span class="position">{{ $t('jobTitle') }}</span>
        </div>
        <!-- end:: Position Info: Job Title with separator -->
      </div>

      <!-- begin:: Right Section: Navigation and Language Selector -->
      <q-toolbar-title class="right-section" v-if="!isMediumScreen">
        <!-- begin:: Navigation Buttons -->
        <q-btn
          :class="{ 'active-btn': isActive('aboutme') }"
          flat
          :label="$t('AboutMe')"
          @click="goTo('aboutme')"
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
        <!-- end:: Navigation Buttons -->

        <!-- begin:: Language Selector -->
        <div class="language-selector">
          <q-btn flat @click="changeLanguage('fr-FR')" class="lang-btn">
            <img src="/../assets/flag_fr.png" alt="French" />
          </q-btn>
          <q-btn flat @click="changeLanguage('en-GB')" class="lang-btn">
            <img src="/../assets/flag_en.png" alt="English" />
          </q-btn>
        </div>
        <!-- end:: Language Selector -->
      </q-toolbar-title>
      <!-- end:: Right Section: Navigation and Language Selector -->

      <!-- begin:: Mobile Menu Button -->
      <q-btn
        flat
        icon="menu"
        class="q-mr-sm q-d-none q-d-md-block burger-menu-btn"
        @click="toggleMenu"
        v-if="isSmallScreen || isMediumScreen"
      />
      <!-- end:: Mobile Menu Button -->
    </q-toolbar>
  </q-header>

  <!-- begin:: Mobile Drawer Menu -->
  <q-drawer
    v-model="menu"
    side="right"
    overlay
    behavior="mobile"
    class="full-width-drawer bg-white text-black"
    content-class="q-pa-md"
  >
    <!-- begin:: Drawer Header with Close Button -->
    <div class="drawer-header">
      <q-btn
        flat
        icon="close"
        @click="toggleMenu"
        class="drawer-close-btn"
      />
    </div>
    <!-- end:: Drawer Header with Close Button -->

    <!-- begin:: Drawer Navigation List -->
    <q-list class="drawer-list">
      <q-item clickable @click="goTo('aboutme')">
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

      <!-- begin:: Language Selector -->
      <div class="flex justify-around" style="margin-top: 1rem;">
        <q-item clickable @click="changeLanguage('fr-FR')">
          <q-item-section class="lang-btn-mobile">
            <img src="/../assets/flag_fr.png" alt="French" />
          </q-item-section>
        </q-item>
        <q-item clickable @click="changeLanguage('en-GB')">
          <q-item-section class="lang-btn-mobile">
            <img src="/../assets/flag_en.png" alt="English" />
          </q-item-section>
        </q-item>
      </div>
      <!-- end:: Language Selector -->

    </q-list>
    <!-- end:: Drawer Navigation List -->
  </q-drawer>
  <!-- end:: Mobile Drawer Menu -->
</template>

<script lang="ts" setup>
import DecorativeElement from '../base/DecorativeElement.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'src/boot/i18n'
import type { Locale } from 'src/i18n'

// Vue Router and I18n hooks
const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

// State variables
const menu = ref(false)
const isSmallScreen = ref(false)
const isMediumScreen = ref(false)

// Function to navigate to a specific route
const goTo = (path: string) => {
  router.push({ name: path })
}

// Function to check if a route is active
const isActive = (name: string) => {
  return route.name === name
}

// Function to change the language
const changeLanguage = (lang: Locale) => {
  locale.value = lang
}

// Function to toggle the mobile menu
const toggleMenu = () => {
  menu.value = !menu.value
}

// Function to check if the screen size is small
const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 600;
  isMediumScreen.value = window.innerWidth <= 768 || window.innerHeight <= 768;
}

// Lifecycle hooks to manage event listeners for screen size
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
/* Header Styles */
.q-header {
  padding: 1rem 0;
}

/* Left Section Styles: Name and Position */
.left-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 1.5rem;
}

.name-section {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
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

.mobile-position-info {
  margin-top: 1rem;
}

.mobile-position-info span {
  font-size: 1rem;
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

/* Right Section Styles: Navigation and Language Selector */
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
.burger-menu-btn {
  position: absolute;
  top: 10px;
  right: 10px;
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