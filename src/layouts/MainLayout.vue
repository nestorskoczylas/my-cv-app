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
import Header from 'components/AppHeader.vue'
import Footer from 'components/AppFooter.vue'
</script>
