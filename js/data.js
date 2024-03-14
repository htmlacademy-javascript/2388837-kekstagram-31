
// !импорт всехперменных
import { getValue, MIN_LIKES, MAX_LIKES, REPEAT_OBJ, MIN_AVATAR, MAX_AVATAR, COMMENTS_MIN, COMMENTS_MAX } from './util.js';
// ! импорт функции случайноного числа а до b
import { getRandomInteger} from './random-integer.js';

//Todo Создаёт функцию счетчик для того чтобы повторов не было и будет вызываться N количество раз, сколько потребуется в array.from
const CREAT_NUMBER = () => {
  let RESULT_UMBER = 0;
  return function () {
    RESULT_UMBER += 1;
    return RESULT_UMBER;
  };
};


const CREAT_ID = CREAT_NUMBER();
const CREAT_URL = CREAT_NUMBER();

const CREAT_COMMENT = () => ({
  id: CREAT_ID(),
  avatar: `img/avatar/${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getValue().MESSAGE[getRandomInteger(0,getValue(). MESSAGE.length - 1)],
  name: getValue().NAMES[getRandomInteger(0, getValue().NAMES.length)],
});

const CREAT_PHOTO = Array.from({ length: REPEAT_OBJ }, () => ({
  id: CREAT_ID(),
  url: `..photos/${CREAT_URL()}.jpg`,
  description: getValue().DESCRIPTION[getRandomInteger(0, getValue().DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, CREAT_COMMENT),
}));
// eslint-disable-next-line no-console
console.log(CREAT_PHOTO);
