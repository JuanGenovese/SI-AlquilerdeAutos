<template>
  <q-layout view="hHh lpR fFf" class="bg-gray-50 min-h-screen">
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
</script>