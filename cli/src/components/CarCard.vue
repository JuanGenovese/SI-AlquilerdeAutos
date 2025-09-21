<template>
  <q-card class="rounded-2xl shadow-sm overflow-hidden">
    <q-img :src="car.image" :ratio="16/9" />
    <q-card-section>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold">{{ car.brand }} {{ car.model }}</h3>
          <p class="text-sm text-gray-500">{{ car.year }} • {{ car.transmission }} • {{ car.seats }} plazas</p>
        </div>
        <div class="text-right">
          <div class="text-xl font-bold">${{ car.pricePerDay.toLocaleString('es-AR') }}</div>
          <div class="text-xs text-gray-500">/ día</div>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="between">
      <q-btn color="primary" :to="{ name: 'car-detail', params: { id: car.id } }" label="Ver detalle" />
      <q-btn outline color="primary" :to="{ name: 'reserve', params: { id: car.id } }" label="Reservar" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import type { Car } from '@/stores/fleet'

defineProps<{ car: Car }>()
</script>