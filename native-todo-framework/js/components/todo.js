export default window.customElements.define(
    'c-todo',
    class ToDo extends HTMLElement {
        constructor() {
            super();
            this._items = [];
        }

        set items(value) {
            // this runs when property "items" is set on component (component.items = [...])
            this._items = value;
            this.render();
        }
        get items() {
            // this runs when property "items" is run (component.items)
            this.render();
            return this._items;
        }

        connectedCallback() {
            this.render();
        };

        render() {
            var list = '';
            this._items.forEach(item => {

                var id = item.id;
                var content = item.content;
                var isChecked = item.isDone ? 'checked' : '';

                list += `
                    <li class="c-list-item">
                        <div class="o-grid">
                            <div>
                                <label for="item${id}" class="is-visually-hidden">Mark Item ${id} as done</label>
                                <input type="checkbox" class="c-checkbox js-check-item" name="items" id="item${id}" ${isChecked}>
                            </div>
                            <div class="o-grid__full">${content}</div>
                            <div>
                                <button type="button" class="c-button js-remove-item" data-id="${id}">
                                    <c-icon icon="remove"></c-icon>
                                </button>
                            </div>
                        </div>
                    </li>
                `;
            });

            var placeholder = this.getAttribute('placeholder');
            var id = Math.random();
            this.innerHTML = `
                
                <form class="o-grid js-form">
                    <div class="o-grid__full">
                        <label for="add${id}" class="is-visually-hidden">${placeholder}</label>
                        <input type="text" id="add${id}" placeholder="${placeholder}" class="c-input js-add-item">
                    </div>
                    <div>    
                        <button type="submit" class="c-button">
                            <c-icon icon="add"></c-icon>
                        </button>
                    </div>
                </form>
                
                <ul class="c-list">
                    ${list}
                </ul>
            `;


            // set events
            this.querySelector('.js-form').addEventListener('submit', (e) => {
                this.addItem(e, this);
            });
            
            var itemsCheck = this.querySelectorAll('.js-check-item');
            itemsCheck.forEach(check => {
                check.addEventListener('change', (e) => {
                    this.toggleDone(e, this);
                });
            });

            var itemsRemove = this.querySelectorAll('.js-remove-item');
            itemsRemove.forEach(button => {
                button.addEventListener('click', (e) => {
                    this.removeItem(e, this);
                });
            });
            
        };

        
        addItem(e, _this) {
            e.preventDefault();
            _this.setItem(_this);
        }
        setItem(_this) {

            var input = _this.querySelector('.js-add-item');
            var content = input.value;

            if (content) {

                var id = Math.random();

                // check if id already exists
                var isRepeated = _this._items.find(x => x.id == id);

                if (isRepeated) {
                    setItem();
                }
                else {
                    _this._items.push({
                        id: id,
                        content: content,
                        isDone: false
                    });

                    input.value = '';

                    _this.render();
                    _this.saveLocalStorage(_this);
                }
            }
        }
        
        toggleDone(e, _this) {
            var li = e.currentTarget.closest('li');
            if (e.currentTarget.checked) {
                li.classList.add('--done');
            }
            else {
                li.classList.remove('--done');
            }
        }
        
        removeItem(e, _this) {
            var id = e.currentTarget.dataset.id;
            var item = _this._items.find(x => x.id == id);
            var index = _this._items.indexOf(item);
            if (index > -1) {
                _this._items.splice(index, 1);
                _this.render();
                _this.saveLocalStorage(_this);
            }

        }

        saveLocalStorage(_this) {
            localStorage.setItem('todo-items', JSON.stringify(_this.items));
        }

    }
);