import { productList } from "./products.js";

//4
const productDescriptions = productList.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, []);

console.log(productDescriptions);

//5
function getCardCount() {
  let userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  
  if (userInput === null || userInput === '') {
    alert('Ввод отменен. Будет отображено 3 карточки (по умолчанию)');
    return 3;
  }

  const count = Number(userInput);

  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Пожалуйста, введите целое число от 1 до 5');
    return getCardCount();
  }
}

function renderProducts(products, count) {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';

  const productsToRender = products.slice(0, count);

  const template = document.getElementById('product-card-template');

  productsToRender.forEach(product => {
    const card = template.content.cloneNode(true);

    card.querySelector('.card__img').src = product.img;
    card.querySelector('.card__img').alt = product.name;
    card.querySelector('.card__category').textContent = product.category;
    card.querySelector('.card__product-name').textContent = product.name;
    card.querySelector('.card__product-description').textContent = product.description;

    const compoundList = card.querySelector('.card__compound');
    product.compoundItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'card__compound-item';
      li.textContent = item;
      compoundList.appendChild(li);
    });

    const priceData = card.querySelector('data');
    priceData.value = product.priceValue;
    priceData.textContent = `${product.priceDisplay} ₽`;

    productsContainer.appendChild(card);
  });
}

const count = getCardCount();
renderProducts(productList, count);