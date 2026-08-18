import { comments } from "./comments.js";

// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumbers = numbers.filter(number => {
  return number >= 5
})

console.log(filterNumbers);

// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.),
// проверить, есть ли в массиве какая-то определенная сущность.
const books = [
  'Сахих аль-Бухари',
  'Сахих Муслим',
  'Сунан Абу Давуд',
  'Джами ат-Тирмизи',
  'Сунан ан-Насаи',
  'Сунан Ибн Маджа',
  'Муватта имама Малика'
];

console.log(books.includes("Сахих Муслим"));

// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать").
// Два вышеуказанных массива с помощью этой функции перевернуть.
const reverseArray = array => {
  return array.reverse()
};

reversArray(books);
reversArray(numbers);

console.log(books);
console.log(numbers);

// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const getCommentsWithComEmail = comments => comments.filter(comment => {
  return comment.email.includes(".com")
})
const filteredEmails = getCommentsWithComEmail(comments)
console.log(filterEmail);

// Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const updatePostIdByUserId = comments => comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

const updatedComments = updatePostIdByUserId(comments);
console.log(updatedComments);

// Перебрать массив, что бы объекты состояли только из айди и имени
const extractIdsAndNames = comments => comments.map(comment => ({
  id: comment.id, name: comment.name
}));

const idsAndNames = extractIdsAndNames(comments);
console.log(idsAndNames);

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов -
// устанавливаем true, меньше - false.
const addInvalidFlag = comments => comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

const markedComments = addInvalidFlag(comments);
console.log(markedComments);

// Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
//.reduce
const reduceToEmails = comments => comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails
}, []);

const emailsFromReduce = reduceToEmails(comments);
console.log(emailsFromReduce);

//.map
const getEmailsMap = comments => comments.map(comment => {
  return comment.email
});

const emailsFromMap = getEmailsMap(comments);
console.log(emailsFromMap);

// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const emailsString = emailsFromReduce.toString();
const emailsJoin = emailsFromMap.join(', ');

console.log(emailsString);
console.log(emailsJoin);