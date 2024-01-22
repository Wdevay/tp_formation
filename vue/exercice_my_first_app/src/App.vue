<script setup>
import compOptions from './components/compOptions.vue'
import compCompo from './components/compCompo.vue';
/*  
CE COMPOSANT RACINE APP RESTE EN MODE COMPOSITION API
IMPORTER LES COMPOSANTS ICI 
*/
</script>

<template>
  <!-- Monter les composants ici -->
  <h2>Mode Option</h2>
  <compOptions msg="C'est fort l'IA" :numb="5"/>
  <hr>
  <h2>Mode Composition</h2>

</template>

<style scoped>


</style>
