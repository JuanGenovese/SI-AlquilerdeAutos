<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    <q-input v-model="q" dense outlined label="Buscar marca o modelo" />
    <q-select v-model="transmission" :options="['manual','automatic']" dense outlined label="Transmisión" emit-value map-options clearable />
    <q-select v-model="seats" :options="[5,7]" dense outlined label="Plazas" emit-value map-options clearable />
    <q-input v-model.number="maxPrice" type="number" dense outlined label="Precio máx. por día" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const emit = defineEmits<{
  (e: 'update', payload: { q: string; transmission?: string | undefined; seats?: number | undefined; maxPrice?: number | undefined }): void
}>()

const q = ref('')
const transmission = ref<string | undefined>()
const seats = ref<number | undefined>()
const maxPrice = ref<number | undefined>()

watchEffect(() => {
  emit('update', { q: q.value, transmission: transmission.value, seats: seats.value, maxPrice: maxPrice.value })
})
</script>