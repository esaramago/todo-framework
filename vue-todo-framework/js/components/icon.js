export default Vue.component('icon', {
    props: ['icon', 'size'],
    data() {
        return {
            iconAttr: "/src/img/sprite.svg#icon-" + this.icon,
            sizeAttr: '--' + this.size
        }
    },
    template: `
        <svg class="c-icon" :class="sizeAttr">
            <use :xlink:href="iconAttr"></use>
        </svg>
    `
});