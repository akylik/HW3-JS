// 1
const findMax = (n) => +Math.max(...(n + '').split(''));
console.log(findMax(3295566));


// 2
const pow = function (x, n) {
   let result = x;
   for (let i = 1; i < n; i++) {
      result *= x;
   }
   return result;
}
console.log(pow(2, 4));


// 3
const cursiveLetter = function (name) {
   return name[0].toUpperCase() + name.slice(1);
}
console.log(cursiveLetter('i will be back'));


// 4
const profit = function (countProfit) {
   return countProfit - (countProfit * 19.5 / 100);
}
console.log(profit(1000));


// 5
const random = function (min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}
console.log(random(2, 5));


// 6
const countLatter = function (letter, word) {
   let count = 0;
   const wordLength = word.length;
   for (let i = 0; i < wordLength; i++) {
      if (word[i].toLowerCase() === letter.toLowerCase()) {
         count++;
      }
   }
   return count;
}
console.log(countLatter('а', 'Асталависта'));


// 7
const convertCurency = function (convert) {
   const curencyDoll = 25;
   let result = 0;
   if (convert.slice(-3) === 'UAH' || convert.slice(-3) === 'uah') {
      result = Math.round(parseInt(convert) / curencyDoll);
   } else if (convert.slice(-1) === '$') {
      result = Math.round(parseInt(convert) * curencyDoll);
   }
   else {
      result = 'Error'
   }
   return result;
}
console.log(convertCurency('100$'));


// 8
const getRandomPassword = function (genPass = 8) {
   for (let i = 0; i < genPass; i++) {
      return +Math.random().toString().slice(-genPass);
   }
}
console.log(getRandomPassword(6));


// 9
const deletLetters = function (enterLetter, enterWord) {
   return enterWord.replaceAll(enterLetter, '');
}
console.log(deletLetters('а', 'блаблабла'));


// 10
const isPalyndrom = function (someWord) {
   let someWordRevers = someWord.split('').reverse().join('');
   if (someWordRevers == someWord) {
      return 'yes';
   } else {
      return 'no'
   }
}
console.log(isPalyndrom('мадам'));