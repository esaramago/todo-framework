export default Vue.component('list-item', {
    props: ['content', 'isDone', 'id'],
    data() {
        return {
            isDoneClass: this.isDone ? '--done' : '',
            inputId: 'item' + this.id
        }
    },
    template: `
        <li class="c-list-item" :class="isDone ? '--done' : ''">
            <div class="o-grid">
                <div>
                    <label :for="inputId" class="is-visually-hidden">Mark Item {{id}} as done</label>
                    <input type="checkbox" class="c-checkbox" name="items" :id="inputId" :value="isDone" :checked="isDone" v-on:change="toggleDone">
                </div>
                <div class="o-grid__full">{{this.content}}</div>
                <div>
                    <button type="button" class="c-button" v-on:click="remove">
                        <icon icon="remove"></icon>
                    </button>
                </div>
            </div>
        </li>
    `,
    methods: {
        toggleDone() {
            //this.isDone = true; // [Vue warn]: Avoid mutating a prop directly...

            this.$emit('check', {
                isDone: !this.isDone,
                id: this.id
            });
        },
        remove() {
            this.$emit('remove', this.id);
        }
    }
});