<template>
  <div class="bg-[#f8efde] text-white/90 h-[10vh]">
    <q-toolbar class="w-full bg-[#f8efde]">
      <q-btn flat to="/" class="text-xl font-semibold "><p class="text-[#3d4d40] mt-[2vh]">Logo</p></q-btn>
      <q-space />
      <div class="hidden sm:flex gap-2">
        <q-btn flat to="/catalogo" label="Catálogo" />
      </div>
      <q-btn flat><p class="text-[#3d4d40] mt-[2vh]">Menú</p></q-btn>
    </q-toolbar>
  </div>
</template>