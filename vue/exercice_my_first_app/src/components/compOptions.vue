<script>
export default { 
    name: "compOptions",
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
        <hr>
        <p>le nombre choisi est : {{numb}}</p>
        <hr>
        <p>count : {{count}}</p>
        <hr>
        <button @click="multiple(numb)">multiplier</button>
    </div>
</template>