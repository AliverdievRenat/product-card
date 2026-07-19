const person = {
  name: 'Ренат',
  surname: 'Аливердиев',
  email: 'aliverdiev.renat@icloud.com',
  job: 'Frontend developer',
  position: 'Trainee programmer',
  age: 33,
  country: 'Саудовская аравия',
  city: 'Медина',
  relationshipStatus: 'Женат',
  religion: 'Ислам',
  learning: 'it - Симулятор',
}

const carInfo = {
  carMark: 'Audi',
  model: 'A6 Allroad',
  productionYear: 2026,
  color : 'green',
  selectiveGear: 'DSG',
}

carInfo.personInfo = person;

const checkMaxSpeed = obj => {
  obj.maxSpeed ??= 350;
}

checkMaxSpeed(carInfo);

const getObjectProperty = (obj, key) => obj?.[key]

const products = ['Яблоко', 'Груша', 'Арбуз', 'Мандарин', 'Апельсин', 'Клубника', 'Черешня',]

const booksOfIbnQasim = [
  {
    title: 'Маджму аль-Фатава',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1968,
    coverColor: 'Тёмно-зелёный',
    genre: 'Фатава (религиозные заключения)'
  },
  {
    title: 'Хашия Аля Рауда аль-Мурбиа',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1972,
    coverColor: 'Коричневый',
    genre: 'Фикх (исламское право)'
  },
  {
    title: 'Аль-Манхадж аль-Анза Аль-Асари',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1965,
    coverColor: 'Бежевый',
    genre: 'Акида (вероучение)'
  },
  {
    title: 'Игасатуль Лафхан',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1970,
    coverColor: 'Синий',
    genre: 'Фикх и Усуль (правовые основы)'
  },
  {
    title: 'Хашия Аля Зад аль-Мустакни',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1975,
    coverColor: 'Красный',
    genre: 'Ханафитский фикх'
  },
  {
    title: 'Шарх Аля Умдат аль-Ахкам',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1969,
    coverColor: 'Тёмно-синий',
    genre: 'Хадисоведение'
  },
  {
    title: 'Аль-Фаваид аль-Джияадия',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1967,
    coverColor: 'Зелёный',
    genre: 'Фикх и Усуль'
  },
  {
    title: 'Рауда аль-Мурбиа Шарх Зад аль-Мустакни',
    author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
    publicationYear: 1973,
    coverColor: 'Бордовый',
    genre: 'Фикх (исламское право)'
  },
]

booksOfIbnQasim.push({
  title: 'Фатх аль-Маджид Шарх Китаб ат-Таухид',
  author: 'Шейх Абдуррахман ибн Касим Ан-Недждий',
  publicationYear: 1976,
  coverColor: 'Золотистый',
  genre: 'Акида (вероучение)'
});

const booksAlBukhari = [
  {
    title: 'Сахих аль-Бухари (Аль-Джами ас-Сахих)',
    author: 'Имам Мухаммад ибн Исмаил Аль-Бухари',
    publicationYear: 846,
    coverColor: 'Золотисто-зелёный',
    genre: 'Хадисы'
  },
  {
    title: 'Аль-Адаб аль-Муфрад',
    author: 'Имам Мухаммад ибн Исмаил Аль-Бухари',
    publicationYear: 850,
    coverColor: 'Синий',
    genre: 'Адаб (этика)'
  },
  {
    title: 'Ат-Тарих аль-Кабир (Большая история)',
    author: 'Имам Мухаммад ибн Исмаил Аль-Бухари',
    publicationYear: 840,
    coverColor: 'Коричневый',
    genre: 'История'
  },
]

const islamicBooks = [...booksAlBukhari, ...booksOfIbnQasim];

const markRareBooks = books => books.map(book => ({
  ...book,
  isRare: book.publicationYear > 1970
}))

const markedIslamicBooks = markRareBooks(islamicBooks);