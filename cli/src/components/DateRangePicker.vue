<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm text-gray-600">Rango de fechas</label>
    <q-date v-model="range" range color="primary" square class="rounded-xl bg-white" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const model = defineModel<{from: string, to: string }>({
    required: true 
  })
  
  const range = computed({
    get: () => ({ from: model.value.from, to: model.value.to }),
    set: (val: any) => {
      model.value.from = val?.from ?? ''
      model.value.to = val?.to ?? ''
    }
  })
</script>