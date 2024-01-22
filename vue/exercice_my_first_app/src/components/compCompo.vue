<script setup>
import {ref} from 'vue'
defineProps({
    msg2: String,
    // numb2: Number
})
const count2 = ref(1)
function mult(num) { this.count2 = this.count2 * num }


</script>



<template>
    <div>
        <p>message : {{ msg2 }}</p>
        <hr>
        <p>le nombre choisi est : {{numb2}}</p>
        <input v-model="numb2" placeholder="nombre entier"/>
        <hr>
        <p>count : {{count2}}</p>
        <hr>
        <button @click="mult(numb2)">multiplier</button>
        <button @click="count2=1">RESET</button>
    </div>
</template>