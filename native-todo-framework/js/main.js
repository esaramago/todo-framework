import header from "./components/header.js";
import icon from "./components/icon.js";
import listItem from "./components/list-item.js";

const App = {

    data: [],
    list: document.querySelector('.js-list'),

    init() {

        this.getData();
        this.render();

    },

    getData() {
        var storage = localStorage.getItem('todo-items');
        if (storage && storage !== 'undefined') {
            this.data = JSON.parse(storage);
        }
    },
    render() {
        var html = '';
        this.data.forEach(item => {
            html += `
                <li content="${item.content}" is-done="${item.isDone}" id="${item.id}" is="c-list-item"></li>
            `;
        });

        this.list.innerHTML = html;

        this.setEvents();
    },

    setEvents() {

        // set events
        document.querySelector('.js-form').addEventListener('submit', (e) => {
            this.addItem(e, this);
        });

        var itemsCheck = document.querySelectorAll('.js-check-item');
        itemsCheck.forEach(check => {
            check.addEventListener('change', (e) => {
                this.toggleDone(e, this);
            });
        });

        var itemsRemove = document.querySelectorAll('.js-remove-item');
        itemsRemove.forEach(button => {
            button.addEventListener('click', (e) => {
                this.removeItem(e, this);
            });
        });
    },


    addItem(e, _this) {
        e.preventDefault();
        _this.setItem(_this);
    },
    setItem(_this) {

        var input = document.getElementById('add');
        var content = input.value;

        if (content) {

            var id = Math.random();

            // check if id already exists
            var isRepeated = _this.data.find(x => x.id == id);

            if (isRepeated) {
                setItem();
            }
            else {
                _this.data.push({
                    id: id,
                    content: content,
                    isDone: false
                });

                input.value = '';

                _this.render();
                _this.saveLocalStorage(_this);
            }
        }
    },
    
    toggleDone(e, _this) {
        var li = e.currentTarget.closest('li');
        if (e.currentTarget.checked) {
            li.classList.add('--done');
        }
        else {
            li.classList.remove('--done');
        }
        _this.saveLocalStorage(_this);
    },
    
    removeItem(e, _this) {
        var id = e.currentTarget.dataset.id;
        var item = _this.data.find(x => x.id == id);
        var index = _this.data.indexOf(item);
        if (index > -1) {
            _this.data.splice(index, 1);
            _this.render();
            _this.saveLocalStorage(_this);
        }

    },

    saveLocalStorage(_this) {
        localStorage.setItem('todo-items', JSON.stringify(_this.data));
    }

};

//window.App = App;
App.init();