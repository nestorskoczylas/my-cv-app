<template>
  <q-layout view="hHh lpR fFf">
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts" setup>
import Header from '../components/layout/AppHeader.vue'
import Footer from '../components/layout/AppFooter.vue'
</script>
