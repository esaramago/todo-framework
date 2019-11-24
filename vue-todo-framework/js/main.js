import header from "./components/header.js";
import icon from "./components/icon.js";
import listItem from "./components/list-item.js";

const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue JS',
        placeholder: 'Add new to do!',
        items: [
            {
                id: 1,
                content: 'dknslnsdcljd',
                isDone: false
            },
            {
                id: 2,
                content: 'dcsdcc',
                isDone: false
            },
            {
                id: 3,
                content: ' dscsdcdscsc',
                isDone: true
            },
        ]
    },

    methods: {
    }
})