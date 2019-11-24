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
        this.data = JSON.parse(localStorage.getItem('todo-items'));
    },
    render() {
        var html = '';
        this.data.forEach(item => {
            html += `
                <li content="${item.content}" is-done="${item.isDone}" id="${item.id}" is="c-list-item"></li>
            `;

            //var element = document.getElementById('#' + item.id);
            //element.item = this.data; // setter - sets todo component data
            //element.item; // getter - runs todo component data for the first time
        });

        this.list.innerHTML = html;
    }

};

window.App = App;
App.init();