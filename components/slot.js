class SlotClass extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
             <div>Имя:
                <slot name="username"></slot>
            </div>
            <div>Возраст:
                <slot name="age"></slot>
             </div>
             <fieldset>
                <legend>Другая информация</legend>
                <slot></slot>
              </fieldset>
    `;
    }
}

customElements.define('user-card', SlotClass);
