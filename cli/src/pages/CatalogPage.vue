<template>
  <q-page class="max-w-6xl mx-auto p-4">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-semibold">Catálogo</h1>
      <q-btn flat color="primary" icon="filter_list" label="Filtros" class="sm:hidden" @click="filtersOpen = !filtersOpen" />
    </div>

    <div class="mb-4" v-show="filtersOpen">
      <CarFilters @update="applyFilters" />
    </div>

    <div v-if="fleet.loading" class="flex items-center justify-center py-10">
      <q-spinner size="2em" />
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CarCard v-for="c in filtered" :key="c.id" :car="c" />
    </div>

    <div v-if="!filtered.length && !fleet.loading" class="text-center text-gray-500 py-10">No se encontraron autos con esos filtros.</div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFleetStore } from '@/stores/fleet'
import CarCard from '@/components/CarCard.vue'
import CarFilters from '@/components/CarFilters.vue'

const fleet = useFleetStore()
const { cars } = storeToRefs(fleet)
const filtersOpen = ref(true)

const state = ref({ q: '', transmission: undefined as string | undefined, seats: undefined as number | undefined, maxPrice: undefined as number | undefined })

function applyFilters(payload: any) {
  state.value = payload
}

const filtered = computed(() => {
  return cars.value.filter(c => {
    const matchesQ = [c.brand, c.model].join(' ').toLowerCase().includes(state.value.q.toLowerCase())
    const matchesT = state.value.transmission ? c.transmission === state.value.transmission : true
    const matchesS = state.value.seats ? c.seats === state.value.seats : true
    const matchesP = state.value.maxPrice ? c.pricePerDay <= state.value.maxPrice : true
    return matchesQ && matchesT && matchesS && matchesP
  })
})

onMounted(() => fleet.fetchAll())
</script>