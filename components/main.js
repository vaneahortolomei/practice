//customElements пользовательские элементы
//компонент имеет свой собственный класс

class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._textContainer;
        this._tooltipIcon;
        this._defaultText = 'Выдают кредиты всем';
    }

    connectedCallback(){
        // браузер вызывает этот метод при добавлении элемента в документ
        if(this.hasAttribute('text')){
            this._defaultText = this.getAttribute('text');
        }
        this._tooltipIcon = document.createElement('span');
        this._tooltipIcon.textContent = ' (?)';
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(this._tooltipIcon);
    }

    disconnectedCallback(){
        // браузер вызывает этот метод при удалении элемента из документа
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip.bind(this));
        this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip.bind(this));
    }
    _render(){
        //..render code!
    }
    _showTooltip(){
        this._textContainer = document.createElement('div');
        this._textContainer.className = 'box';
        this._textContainer.textContent = 'Here is tooltip';
        this._textContainer.textContent = this._defaultText;
        this.appendChild(this._textContainer);

    }
    _hideTooltip(){
        this.removeChild(this._textContainer);
    }
}

customElements.define('uc-tooltip', Tooltip);




//template example
const persons = [
    {
        name: 'John',
        age: 22
    },
    {
        name: 'Ben',
        age: 21
    },
    {
        name: 'Vasya',
        age: 25
    },
    {
        name: 'Sanea',
        age: 27
    },
    {
        name: 'Jimbo',
        age: 19
    },
];

const block = document.querySelector('.main');
const template = document.querySelector('#box');


persons.forEach(item => {
    const box = document.importNode(template.content, true);
    box.querySelector('.box__title').textContent = item.name;
    box.querySelector('.box__subtitle').textContent = item.age;
    block.appendChild(box);
});



