<template>
  <q-page class="max-w-5xl mx-auto p-4">
    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Catálogo" to="/catalogo" />
      <q-breadcrumbs-el :label="title" />
    </q-breadcrumbs>

    <div v-if="!car" class="text-center text-gray-500 py-10">Auto no encontrado.</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <q-img :src="car.image" :ratio="16/9" class="rounded-2xl" />
      <div>
        <h1 class="text-2xl font-semibold mb-2">{{ title }}</h1>
        <p class="text-gray-600 mb-2">Año {{ car.year }} • {{ car.transmission }} • {{ car.seats }} plazas • {{ car.fuel }}</p>
        <div class="flex gap-2 flex-wrap mb-4">
          <q-chip v-for="f in car.features" :key="f" color="primary" text-color="white" class="rounded-xl">{{ f }}</q-chip>
        </div>
        <div class="text-3xl font-bold mb-6">${{ car.pricePerDay.toLocaleString('es-AR') }} <span class="text-base text-gray-500">/ día</span></div>
        <q-btn color="primary" :to="{ name: 'reserve', params: { id: car.id } }" label="Reservar" class="rounded-xl" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFleetStore } from '@/stores/fleet'
import { computed } from 'vue'

const route = useRoute()
const fleet = useFleetStore()
const car = computed(() => fleet.getById(route.params.id as string))
const title = computed(() => car.value ? `${car.value.brand} ${car.value.model}` : '')
</script>