export default Vue.component('main-header', {
    props: ['title'],
    data() {
        return {
            icon: 'logo',
            size: 'lg'
        }
    },
    template: `
        <header class="c-header">
            <icon :icon="this.icon" :size="this.size"></icon>
            <h1 class="c-heading">
                ToDo
                <span class="c-heading__strong">{{title}}</span>
            </h1>
        </header>
    `
});