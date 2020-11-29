// 1
const findMax = (n) => +Math.max(...(n + '').split(''));
console.log(findMax(3295566));


// 2
const degreeOfNumber = (x, n) => {
   let result = x;
   for (let i = 1; i < n; i++) {
      result *= x;
   }
   return result;
}
console.log(degreeOfNumber(2, 4));


// 3
const cursiveLetter = (name) => {                              
   return name[0].toUpperCase() + name.slice(1);        
}
console.log(cursiveLetter('i will be back'));


// 4
const profit = (countProfit) => {                        
   return countProfit - (countProfit * 19.5 / 100);      

}
console.log(profit(1000));


// 5
const randomNumber = (min, max) => {
   return Math.floor(min + Math.random() * (max + 1 - min));
}
console.log(randomNumber(2, 5));


// 6
const countLatter = (letter, word) => {
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
const convertCurency = (convert) => {
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
const getRandomPassword = (genPass = 8) => {
   for (let i = 0; i < genPass; i++) {
      return +Math.random().toString().slice(-genPass);
   }
}
console.log(getRandomPassword(6));


// 9
const deletLetters = (enterLetter, enterWord) => {
   return enterWord.replaceAll(enterLetter, '');
}
console.log(deletLetters('а', 'блаблабла'));


// 10
const isPalyndrom = (someWord) => {
   let someWordRevers = someWord.split('').reverse().join('');
   if (someWordRevers == someWord) {
      return true;
   } else {
      return false;
   }
}
console.log(isPalyndrom('мадам'));