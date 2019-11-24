export default Vue.component('list-item', {
    props: ['content', 'isDone'],
    data() {
        return {
            isChecked: this.isDone ? 'checked' : '',
            isDoneClass: this.isDone ? '--done' : ''
        }
    },
    template: `
        <li class="c-list-item" :class="isDoneClass">
            <div class="o-grid">
                <div>
                    <label for="item111" class="is-visually-hidden">Mark Item 111 as done</label>
                    <input type="checkbox" class="c-checkbox js-check-item" name="items" id="item111" :checked="isChecked">
                </div>
                <div class="o-grid__full">{{this.content}}</div>
                <div>
                    <button type="button" class="c-button js-remove-item" data-id="1111">
                        <icon icon="remove"></icon>
                    </button>
                </div>
            </div>
        </li>
    `
});