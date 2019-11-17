export default window.customElements.define(
    'c-header', 
    class Header extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {

            var title = this.getAttribute('title');

            this.innerHTML = `
                <header class="c-header">
                    <c-icon icon="logo" size="lg"></c-icon>
                    <h1 class="c-heading">
                        ToDo
                        <span class="c-heading__strong">${title}</span>
                    </h1>
                </header>
            `;
        };
    }
);