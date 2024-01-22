<script>
export default { 
    name: "CompOptions",
    props : {
        msg: String,
        //numb: Number
    },
    data() {
        return {
            count: 1
        }
    },
    methods: {
        multiple(numb) {
            this.count = this.count * numb
        }
    }   

}
</script>

<template>
    <div>
        <p>message : {{ msg }}</p>
        <hr>
        <p>le nombre choisi est : {{numb}}</p>
        <input v-model="numb" placeholder="nombre entier"/>
        <hr>
        <p>count : {{count}}</p>
        <hr>
        <button @click="multiple(numb)">multiplier</button>
        <button @click="count=1">RESET</button>
    </div>
</template>