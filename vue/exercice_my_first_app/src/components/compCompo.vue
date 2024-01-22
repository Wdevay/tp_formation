<script setup>
import {ref} from 'vue'
defineProps({
    msg2: String,
    numb: Number
})
const count2 = ref(1)
function mult(num) { this.count2 = this.count2 * num }


</script>

<template>
    <div>
        <p>message : {{ msg2 }}</p>
        <br>
        <p>le nombre choisi est : {{numb}}</p>
        
        <br>
        <p>count : {{count2}}</p>
        <br>
        <button @click="mult(numb)">multiplier</button>
        <button @click="count2=1">RESET</button>
    </div>
</template>