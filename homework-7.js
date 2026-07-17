function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура : ${temperature} градусов по Цельсию`);
}

showTemperature("Санкт-Петербург", "+25");

const getSpeedCategory = speed => {
  const LIGHT_SPEED = 299792458;
  if (speed > LIGHT_SPEED) {
    console.log("Сверх световая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

function purchaseProduct(budget, productName = "Lenovo ThinkPad", productPrice = 1999) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс`);
  }
}

function isFavoriteBrand(brand) {
  const favoriteBrand = "Audi";
  return favoriteBrand === brand;
}

const carBrand = "Audi";
const carModel = "A6 Allroad";
const productionYear = 2025;