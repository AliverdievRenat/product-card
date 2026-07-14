function showTemperature (city, temperature) {
  return `Сейчас в ${city} температура : ${temperature} градусов по Цельсию`
};

console.log(showTemperature("Санкт-Петербург", "+25"));


const getSpeedCategory = speed => {
  const LIGHT_SPEED = 299792458;
  if (speed > LIGHT_SPEED) {
    return "Сверх световая скорость"
  }
  else if (speed < LIGHT_SPEED) {
    return "Субсветовая скорость"
  }
  else {
    return "Скорость света"
  }
};


function purchaseProduct (budget, productName = "Lenovo ThinkPad", productPrice = 1999) {
  if (budget >= productPrice) {
    return `${productName} приобретён. Спасибо за покупку!`
  }
  else {
    return `Вам не хватает ${productPrice - budget}$, пополните баланс`
  }
};


function isFavoriteBrand(brand) {
  const favoriteBrand = "Audi";
  return favoriteBrand === brand;
};


const carBrand = "Audi";
const carModel = "A6 Allroad";
const productionYear = 2025;
