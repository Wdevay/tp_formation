<script setup>
import CompOptions from './components/CompOptions.vue'
import CompCompo from './components/CompCompo.vue'
/*  
CE COMPOSANT RACINE APP RESTE EN MODE COMPOSITION API
IMPORTER LES COMPOSANTS ICI 
*/
</script>

<template>
  <!-- Monter les composants ici -->
  <h2>Mode Option</h2>
  
  <CompOptions msg="C'est fort l'IA"/>
  
  <hr>
  <h2>Mode Composition</h2>
  <CompCompo msg2="Je l'ai fait tout seul"/>


</template>

<style scoped>


</style>
