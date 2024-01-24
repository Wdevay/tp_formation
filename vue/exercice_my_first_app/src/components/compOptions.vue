<script>
export default { 
    name: "CompOptions",
    props : {
        msg: String,
        numb: Number
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
        <p>le nombre choisi est : {{numb}}</p>
        <p>count : {{count}}</p>
        <button @click="multiple(numb)">multiplier par {{ numb }}</button>
        <button @click="count=1">RESET</button>
    </div>
</template>