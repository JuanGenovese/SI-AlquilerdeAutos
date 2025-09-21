<template>
  <q-page class="">
    <!-- -->
    <section class="h-[90vh] bg-gradient-to-r from-brand-marronRojizo to-brand-marronClaro text-white">
      
      <div class="h-[55vh] flex flex-col justify-center items-start bg-cover bg-center relative px-20"
        style="background-image: url('/Imagenampliadaconia.png');"
      > 
        <h1 class="text-3xl font-bold mb-2">Tu viaje por jujuy comienza acá</h1>
        <p class="text-white/90 mb-4">Explorá la Quebrada, a tu ritmo.</p>
      </div>

      <div class="h-[35vh] flex flex-col justify-center items-end px-20">
        <h2 class="text-xl font-bold mb-2"> Alquiler de autos en Jujuy</h2>
        <p class="text-white/90 mb-4"> Descubri los paisajes unicos de la Quebrada de Humahuaca y disfrutá de un viaje inolvidable en nuestro servicio de alquiler de autos</p>
        <div class="flex gap-2">
          <q-btn color="" text-color="black" to="/catalogo" label="Explorá las rutas"  class="btn-explorar"/>
        </div>
      </div>
      
    </section>

    <section class="py-10 h-[100vh] border-solid border-2 border-gray-300 p-4">
      <h2 class="text-xl font-semibold mb-4">Destacados</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CarCard v-for="c in featured" :key="c.id" :car="c" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useFleetStore } from '@/stores/fleet'
  import CarCard from '@/components/CarCard.vue'
  
  const fleet = useFleetStore()
  const { cars } = storeToRefs(fleet)
  const featured = cars.value.slice(0, 3)
</script>

<style>
  .btn-explorar {
    background-color: #f8efde;
  }
</style>