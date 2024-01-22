const { createApp } = Vue
import ComponentOption from "./components/ComponentOption.js"

createApp({
    components: {
        ComponentOption
    },
    data() {
    return {
        message: 'Bonjour',
        name: 'Option',
        count: 0,
    }
    }
}).mount('#app')