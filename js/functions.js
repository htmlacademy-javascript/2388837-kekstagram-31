function calculation_string_user(user_string, user_max_number) {
  if (user_string.length <= user_max_number) {
      console.log(true);
      return true;
  } else {
      console.log(false);
      return false;
  }

}
calculation_string_user("проверяемаяASDASDASD", 20);

function isPalindrome(str) {
  let normalaze_str = str.replaceAll(' ', '').toLowerCase().length;
  let reverse_str = '';
  for (let i = normalaze_str - 1; i >= normalaze_str; i--) {
      reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}
const testString = "пап";
console.log(isPalindrome(testString));