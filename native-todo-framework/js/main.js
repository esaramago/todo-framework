import header from "./components/header.js";
import icon from "./components/icon.js";
import listItem from "./components/list-item.js";

const App = function() {

    /* localStorage.setItem('todo-items', JSON.stringify([
        {
            id: 1,
            text: 'Lorem ipsum 1',
            isDone: false
        }
    ])); */

    var data = [];

    function init() {
        var storage = JSON.parse(localStorage.getItem('todo-items'));
        if (storage) {
            data = storage;
            renderList();
        }
        document.querySelector('.js-form').addEventListener('submit', addItem);
    }


    function renderList() {
        const listElm = document.querySelector('.js-list');
        var list = '';
        data.forEach(item => {
            var isDone = item.isDone ? 'done' : '';
            list += `<li is="c-list-item" id="${item.id}" ${isDone}>${item.text}</li>`;
        });
        listElm.innerHTML = list;


        document.querySelectorAll('.js-remove').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    function addItem(e) {

        e.preventDefault();
        
        setItem();
    }
    function setItem() {

        var input = document.getElementById('add');
        var text = input.value;

        if (text) {

            var id = Math.random();
            
            // check if id already exists
            var isRepeated = data.find(x => x.id == id);
            
            if (isRepeated) {
                setItem();
            }
            else {
                data.push({
                    id: id,
                    text: text,
                    isDone: false
                });
                
                renderList(); // re-render list
                saveLocalStorage();

                input.value = '';
            }
        }
    }
    function removeItem() {
        var id = this.dataset.id;
        var item = data.find(x => x.id == id);
        var index = data.indexOf(item);
        if(index > -1) {
            data.splice(index, 1);
            renderList(); // re-render list
            saveLocalStorage();
        }
    }

    function saveLocalStorage() {
        localStorage.setItem('todo-items', JSON.stringify(data));
    }

    return {
        init: init
    }
}();

App.init();