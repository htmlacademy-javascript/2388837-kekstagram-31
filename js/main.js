const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// генерация url
const urlFnWrapper = () => {
  const allArrayPhoto = [];
  return function urlCicle() {
    for (let i = 0; i < id.length; i++) {
      allArrayPhoto.push(`..photos/${id[i]}.jpg`);
    }
    return allArrayPhoto;
  };
};


// делает из типа функции в массив
const generaite = urlFnWrapper();
const avatar = generaite();

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const name = [
  'Maga',
  'Sergo',
  'Zud',
  'Zoxa',
  'Tigo',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayRlement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const objPerson = () => ({
  id: getRandomArrayRlement(id),
  avatar: getRandomArrayRlement(avatar),
  message: getRandomArrayRlement(message),
  name: getRandomArrayRlement(name),
});
const numberRepeat = 30;
const repeatObj = Array.from({ length: numberRepeat }, objPerson);
// eslint-disable-next-line no-console
console.log(repeatObj);
