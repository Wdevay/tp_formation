const { createApp,ref } = Vue
import ComponentCompo from "./components/ComponentCompo.js";

createApp({
    setup() {
        const count = ref(0);
        const name = ref('Compo')
        const message = ref('Bonjour')
    return {
        message,
        name,
        count,
    }
    },
    components: {
        ComponentCompo
    }
}).mount('#app-compo')  