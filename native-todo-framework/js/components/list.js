export default window.customElements.define(
    'c-list',
    class List extends HTMLUListElement {
        constructor() {
            super();
        }
        // Specify observed attributes so that attributeChangedCallback will work
        static get observedAttributes() {
        }
        connectedCallback() {
            
            this.classList.add('c-list');

            var html = '';

        
            var storage = JSON.parse(localStorage.getItem('todo-items'));
            if (storage) {
                this.data = storage;
                html = this.renderList();
            }




            this.innerHTML = html;

            /* document.querySelectorAll('.js-remove').forEach(button => {
                button.addEventListener('click', removeItem);
            });
 */
        }
        attributeChangedCallback(name, oldValue, newValue) {
        }


        renderList() {
            const listElm = document.querySelector('.js-list');
            var list = '';
            this.data.forEach(item => {
                var isDone = item.isDone ? 'done' : '';
                list += `<li is="c-list-item" id="${item.id}" ${isDone}>${item.text}</li>`;
            });
            listElm.innerHTML = list;

            return list;

        }
        removeItem() {
            var id = this.dataset.id;
            var item = this.data.find(x => x.id == id);
            var index = this.data.indexOf(item);
            if (index > -1) {
                this.data.splice(index, 1);
                renderList(); // re-render list
                saveLocalStorage();
            }
        }

        saveLocalStorage() {
            localStorage.setItem('todo-items', JSON.stringify(this.data));
        }
        



    }, { extends: "ul" }
);