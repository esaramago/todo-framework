export default window.customElements.define(
    'c-list-item',
    class ListItem extends HTMLLIElement {
        constructor() {
            super();
            this._item = {};
        }

        // Specify observed attributes so that attributeChangedCallback will work
        static get observedAttributes() {
            return ['content', 'id', 'isDone'];
        }

        set item(value) {
            // this runs when property "item" is set on component (component.item = [...])
            this._item = value;
            this.render();
        }
        get item() {
            // this runs when property "item" is run (component.item)
            this.render();
            return this._item;
        }

        connectedCallback() {

            var id = this.getAttribute('id');
            var content = this.getAttribute('content');
            var isDone = this.getAttribute('is-done') === 'true';
            var isChecked = isDone ? 'checked' : '';

            this.classList.add('c-list-item');
            if (isDone) {
                this.classList.add('--done');
            }

            this.innerHTML = `
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
            `;
        };

        attributeChangedCallback(name, oldValue, newValue) {
            this.textContent = newValue;
        };
    }, { extends: 'li' }
);
