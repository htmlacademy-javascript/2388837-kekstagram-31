
// !импорт всехперменных
import { DESCRIPTION,MESSAGE,NAMES,MIN_LIKES,MAX_LIKES,REPEAT_OBJ,MIN_AVATAR,MAX_AVATAR,COMMENTS_MIN,COMMENTS_MAX } from './util.js';
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
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length)],
});

const CREAT_PHOTO = Array.from({ length: REPEAT_OBJ }, () => ({
  id: CREAT_ID(),
  url: `..photos/${CREAT_URL()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, CREAT_COMMENT),
}));
// eslint-disable-next-line no-console
console.log(CREAT_PHOTO);
