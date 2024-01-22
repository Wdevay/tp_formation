<script setup>
defineProps({
    msg: String,
    numb: Number
})


</script>



<template>
    <div>
        <p>message : {{ msg }}</p>
        <hr>
        <p>le nombre choisi est : {{numb}}</p>
        <hr>
        <p>count : {{count}}</p>
        <hr>
        <button @click="multiple(numb)">multiplier</button>
    </div>
</template>