const productCard = document.querySelector('.card');
const productCardList = document.querySelectorAll('.card');
const changeColorCardButton = document.querySelector('#change-color-card-button');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');
const blueColorHash = 'rgba(0, 162, 255, 1)';
const greenColorHash = 'rgba(0, 255, 0, 1)';
const yellowColorHash = 'rgb(245, 229, 11)';
const redColorHash = 'rgb(151, 11, 11)';
let clickCount = 0;


changeColorCardButton.addEventListener('click', () => {
  clickCount += 1;
  
  if (clickCount % 3 === 0) {
    productCard.style.backgroundColor = "";
  }
  else if (clickCount % 3 === 1) {
    productCard.style.backgroundColor = blueColorHash;
  }
  else {
    productCard.style.backgroundColor = redColorHash;
  }
});


changeColorAllCardButton.addEventListener('click', () => {
  clickCount += 1;
  
  if (clickCount % 3 === 0) {
    productCardList.forEach((card) => card.style.backgroundColor = "");
  }
  else if (clickCount % 3 === 1) {
    productCardList.forEach((card) => card.style.backgroundColor = greenColorHash);
  }
  else {
    productCardList.forEach((card) => card.style.backgroundColor = yellowColorHash);
  }
});


const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

const headerOutputText = document.querySelector('.header-card-text');

headerOutputText.addEventListener('mouseenter', () => {
  console.log(headerOutputText.textContent)
})

const buttonColorGeneration = document.querySelector('#color-generation');

buttonColorGeneration.addEventListener('click', () => {
  if (buttonColorGeneration.classList.toggle('greenColorHash')) {
    buttonColorGeneration.style.backgroundColor = greenColorHash;
  } else {
    buttonColorGeneration.style.backgroundColor = blueColorHash;
  }
})