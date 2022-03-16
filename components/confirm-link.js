class ConfirmLink extends HTMLAnchorElement {
    connectedCallback(){
        this.addEventListener('click', e => {
            if(!confirm('Do you leave this page?')){
                e.preventDefault();
            }
        })
    }
}

customElements.define('uc-link', ConfirmLink, {extends: 'a'});
