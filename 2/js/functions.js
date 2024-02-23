
const checksTheString = (userString, userMaxNumber) => userString.length <= userMaxNumber ? 'true' : 'false';

checksTheString('проверяемая строка', 20); // true

checksTheString('проверяемая строка', 18); // true

checksTheString('проверяемая строка', 10); // false


const checksForPalindromy = (str) => {
  const normalizeString = str.replaceAll(' ', '').toLowerCase().length;
  let reversedStr = '';
  for (let i = normalizeString - 1; i >= 0; i--) {
    reversedStr += normalizeString[i];
  }
  return normalizeString === reversedStr;
};
checksForPalindromy('топот'); // true
checksForPalindromy('ДовОд'); // true
checksForPalindromy('Кекс'); // false
