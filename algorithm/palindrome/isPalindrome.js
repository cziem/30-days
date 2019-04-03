function isPalindrome(str) {
  strArr = str.toLowerCase().split(" ");
  let validChar = "abcdefghijklmnopqrstuvwxyz".split("");
  let lettersArr = [];

  strArr.forEach(string => {
    if (validChar.indexOf(string) > -1) lettersArr.push(string);
  });
  return lettersArr.join("") === lettersArr.reverse().join("") ? true : false;
}

isPalindrome(`Madam I'm Adam`);
