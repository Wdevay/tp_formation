<script setup>
import CompOptions from './components/CompOptions.vue'
import CompCompo from './components/CompCompo.vue'
import  {ref} from 'vue'

const numb = ref(1)
/*  
CE COMPOSANT RACINE APP RESTE EN MODE COMPOSITION API
IMPORTER LES COMPOSANTS ICI 
*/
</script>

<template>
  <!-- Monter les composants ici -->
  <label for="numb">Nombre : </label>
  <input v-model="numb" name="numb" placeholder="nombre entier" type="number"/>
  <h2>Mode Option</h2>
  <CompOptions msg="C'est fort l'IA" :numb="numb"/>
  <hr>
  <h2>Mode Composition</h2>
  <CompCompo msg2="Je l'ai fait tout seul" :numb="numb"/>


</template>

<style scoped>


</style>
