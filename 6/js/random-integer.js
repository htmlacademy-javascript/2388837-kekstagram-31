// todo Функция создаёт случайные чисела
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower; // не понимаю эту запись , что тут происходит и для чего.
  return Math.floor(result);
};

export{getRandomInteger};
