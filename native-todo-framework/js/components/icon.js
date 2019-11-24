export default window.customElements.define(
    'c-icon',
    class Icon extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {

            var icon = this.getAttribute('icon');
            var size = this.getAttribute('size'); // optional

            this.innerHTML = `
                <svg class="c-icon --${size}">
                    <use xlink:href="/src/img/sprite.svg#icon-${icon}"></use>
                </svg>
            `;
        };
    }
);