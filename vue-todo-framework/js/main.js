import header from "./components/header.js";
import icon from "./components/icon.js";
import listItem from "./components/list-item.js";

const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue JS',
        inputValue: '',
        placeholder: 'Add new to do!',
        items: []
    },

    created() {

        var storage = localStorage.getItem('todo-items');
        if (storage && storage !== 'undefined') {
            this.items = JSON.parse(storage);
        }
    },

    methods: {

        addItem(e) {
            e.preventDefault();
            this.setItem();
        },
        setItem() {

            if (this.inputValue) {

                var id = Math.random();

                // check if id already exists
                var isRepeated = this.items.find(x => x.id == id);

                if (isRepeated) {
                    this.setItem();
                }
                else {
                    this.items.push({
                        id: id,
                        content: this.inputValue,
                        isDone: false
                    });

                    this.inputValue = '';
                    this.saveLocalStorage();

                }
            }
        },

        toggleDone(data) {
            var item = this.items.find(x => x.id == data.id);
            item.isDone = data.isDone;
            this.saveLocalStorage();
        },
        remove(id) {
            var item = this.items.find(x => x.id == id);
            var index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
                this.saveLocalStorage();
            }
        },


        saveLocalStorage() {
            localStorage.setItem('todo-items', JSON.stringify(this.items));
        }
    }
})