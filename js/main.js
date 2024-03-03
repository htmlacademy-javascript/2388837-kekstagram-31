
import { DESCRIPTION,MESSAGE,NAMES } from './data.js';

// Структура каждого объекта должна быть следующей:

// todo создайт случайные чисела
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower; // не понимаю эту запись , что тут происходит и для чего.
  return Math.floor(result);
};
//Todo Создаёт функцию счетчик для того чтобы повторов не было и будет вызываться N количество раз, сколько потребуется в array.from
const CREAT_NUMBER = () => {
  let RESULT_UMBER = 0;
  return function () {
    RESULT_UMBER += 1;
    return RESULT_UMBER;
  };
};

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const REPEAT_OBJ = 25;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const CREAT_ID = CREAT_NUMBER();
const CREAT_URL = CREAT_NUMBER();

const CREAT_COMMENT = () => ({
  id: CREAT_ID(),
  avatar: `img/avatar/${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length)],
});
const CREAT_PHOTO = Array.from({ length: REPEAT_OBJ }, () => ({
  id: CREAT_ID(),
  url: `..photos/${CREAT_URL()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length:getRandomInteger(COMMENTS_MIN,COMMENTS_MAX)},CREAT_COMMENT),
}));

console.log(CREAT_PHOTO);
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к
// каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.



