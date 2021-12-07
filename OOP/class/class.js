//product object
class Product {
  constructor(img, name, id, desc, price) {
    this.img = img;
    this.name = name;
    this.id = id;
    this.desc = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product){
    this.items.push(product);
    this.totalOutput.innerText = `Total: \$${1}`;
  }

  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <div class="shop-cart">
         <h2 class="shop-cart__title">Total: \$${0}</h2>
         <button class="button">Order</button>
      </div>
    `
    this.totalOutput = cartEl.querySelector('.shop-cart__title');
    return cartEl;
  }
}


//product item
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCard(this.product);
  }

  render() {
    const element = document.createElement('li');
    element.className = 'item';
    element.innerHTML = `
        <div class="item__content-img">
            <img src="${this.product.img}" alt="${this.product.name}"/>  
           
        </div>
        <div class="item__content-info">
         <h2 class="item__title">${this.product.name}</h2>
          <p class="item__id">${this.product.id}</p>
          <p class="item__desc">${this.product.desc}</p>
          <p class="item__price">${this.product.price} $</p>
          <button class="button">Buy this</button>
        </div>
      `
    const addButton = element.querySelector('.button');
    addButton.addEventListener('click', this.addToCart.bind(this)); //bind card
    return element;
  }
}


//product list
class ProductList {
  products = [
    new Product(
        'https://m.media-amazon.com/images/I/71p9oi5gu7S._AC_SY450_.jpg',
        'Panasonic',
        Math.floor(Math.random() * 1000),
        'The best seller',
        100.99,
    ),
    new Product(
        'https://media.wired.com/photos/6008b7cd103a85a519187c3e/master/pass/Gear-galaxys21_plus_phantom_silver_front.jpg',
        'Samsung',
        Math.floor(Math.random() * 1000),
        'The best seller',
        120.99,
    )
  ];

  render() {
    const list = document.querySelector('#list');
    for (let el of this.products) {
      const productItem = new ProductItem(el);
      const productEl = productItem.render();
      list.append(productEl);
    }
    return list;
  }
}


//render cartShop
class Shop {
  render(){
    const app = document.querySelector('#app');

    this.card = new ShoppingCart();
    const cardEl = this.card.render();
    const pList = new ProductList();
    const cardList = pList.render();

    app.append(cardEl);
    app.append(cardList);
  }
}

class App {
  static card;

  static init(){
    const shop = new Shop();
    shop.render();
    this.card = shop.card;
  }

  static addProductToCard(product){
    this.card.addProduct(product);
  }
}

App.init();
