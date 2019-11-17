export default window.customElements.define(
    'c-list-item',
    class ListItem extends HTMLLIElement {
        constructor() {
            super();
        }
        // Specify observed attributes so that attributeChangedCallback will work
        static get observedAttributes() {
            return ['done'];
        }
        connectedCallback() {

            var id = this.getAttribute('id');
            var content = this.textContent;
            var isDone = this.getAttribute('done') !== null;
            var isChecked = isDone ? 'checked' : '';

            this.classList.add('c-list-item');

            this.innerHTML = `
                <div class="o-grid">
                    <div>
                        <label for="item${id}" class="is-visually-hidden">Mark Item ${id} as done</label>
                        <input type="checkbox" class="c-checkbox" name="items" id="item${id}" ${isChecked}>
                    </div>
                    <div class="o-grid__full">${content}</div>
                    <div>
                        <button type="button" class="c-button js-remove" data-id="${id}">
                            <c-icon icon="remove"></c-icon>
                        </button>
                    </div>
                </div>
            `;

            document.getElementById('item' + id).addEventListener('change', toggleDone);

            function toggleDone() {
                var li = this.closest('li');
                if(this.checked) {
                    li.setAttribute('done', '');
                }
                else {
                    li.removeAttribute('done');
                }
            }
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (name == 'done') {
                var isDone = this.getAttribute('done') !== null;
                if (isDone) {
                    this.classList.add('--done');
                }
                else {
                    this.classList.remove('--done');
                }
            }
        }
 
    }, { extends: "li" }
);