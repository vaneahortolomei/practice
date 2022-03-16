class ShadowDom extends HTMLElement {
    constructor() {
        super();
        this._name = 'John'
    }
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        if(this.hasAttribute('name')){
            this._name = this.getAttribute('name');
        }
        shadow.innerHTML = `
                <p>Hello, ${this._name}</p>
                <button>Click</button>
                `;
        this.shadowRoot.querySelector('button').addEventListener('click', function (e) {
            alert(e.target);
        })
    }
}


customElements.define('uc-greetings', ShadowDom);
