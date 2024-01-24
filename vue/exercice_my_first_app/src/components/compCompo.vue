<script setup>
import {ref} from 'vue'
defineProps({
    msg2: String,
    numb: Number
})
const count2 = ref(1)
function mult(num) {this.count2 = this.count2 * num }


</script>

<template>
    <div>
        <p>message : {{ msg2 }}</p>
        <p>le nombre choisi est : {{numb}}</p>
        <p>count : {{count2}}</p>
        <button @click="mult(numb)">multiplier par {{ numb }}</button>
        <button @click="count2=1">RESET</button>
    </div>
</template>