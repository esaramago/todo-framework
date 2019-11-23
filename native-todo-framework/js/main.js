import header from "./components/header.js";
import icon from "./components/icon.js";
import todo from "./components/todo.js";

const App = function() {

    var todo = document.getElementById('todo');

    function init() {
        var storage = JSON.parse(localStorage.getItem('todo-items'));
        if (storage) {
            todo.items = storage; // setter - sets todo component data
            todo.items; // getter - runs todo component data for the first time
        }
    }


 
    return {
        init: init
    }
}();

App.init();