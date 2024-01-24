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
  <h1> Test Composants </h1>
  <div class="container">
    <div class="form-number">
      <label for="numb">Entrez un nombre : </label>
      <input v-model="numb" name="numb" placeholder="nombre entier" type="number"/>
    </div>
    <div class="option">
      <h2>Mode Option</h2>
      <CompOptions msg="C'est fort l'IA" :numb="numb"/>
    </div>
    <div class="compo">
      <h2>Mode Composition</h2>
      <CompCompo msg2="Je l'ai fait tout seul" :numb="numb"/>
    </div>
  </div>


</template>

<style scoped>
template{
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  text-align: center;
  justify-content: center;
}
h1 {
  text-align: center;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  text-align: center;
}
.form-number {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.option, .compo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
