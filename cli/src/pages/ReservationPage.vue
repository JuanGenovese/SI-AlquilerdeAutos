<template>
  <q-page class="max-w-3xl mx-auto p-4">
    <div v-if="!car" class="text-center text-gray-500 py-10">Auto no encontrado.</div>
    <div v-else class="space-y-6">
      <h1 class="text-2xl font-semibold">Reservar: {{ car.brand }} {{ car.model }}</h1>

      <DateRangePicker v-model="range" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <q-input v-model="form.name" label="Nombre y Apellido" outlined />
        <q-input v-model="form.email" label="Email" type="email" outlined />
        <q-input v-model="form.phone" label="Teléfono" outlined />
      </div>

      <div class="p-4 rounded-2xl bg-white shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-gray-500 text-sm">Total</div>
            <div class="text-2xl font-bold">${{ total.toLocaleString('es-AR') }}</div>
          </div>
          <q-btn color="primary" label="Confirmar reserva" class="rounded-xl" @click="confirm" :disable="!canSubmit" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFleetStore } from '@/stores/fleet'
import { useReservationStore } from '@/stores/reservation'
import DateRangePicker from '@/components/DateRangePicker.vue'

const route = useRoute()
const router = useRouter()
const fleet = useFleetStore()
const reservations = useReservationStore()

const car = computed(() => fleet.getById(route.params.id as string))

const range = reactive({ from: '', to: '' })
const form = reactive({ name: '', email: '', phone: '' })

const days = computed(() => {
  if (!range.from || !range.to) return 0
  const a = new Date(range.from)
  const b = new Date(range.to)
  const diff = Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24)) + 1
  return Math.max(diff, 0)
})

const total = computed(() => (car.value ? car.value.pricePerDay * (days.value || 0) : 0))
const canSubmit = computed(() => !!(car.value && range.from && range.to && form.name && form.email))

function confirm() {
  if (!car.value) return
  const created = reservations.create({
    carId: car.value.id,
    from: range.from,
    to: range.to,
    name: form.name,
    email: form.email,
    phone: form.phone,
    total: total.value
  })
  router.push({ name: 'confirmation', params: { resId: created.id } })
}
</script>