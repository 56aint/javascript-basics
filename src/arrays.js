const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(up => up.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(rev => rev.split("").reverse().join(""));
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  
};

const elementsStartingWithAVowel = strings => {
  // your code here
  const results = [];
  for (let i = 0; i < strings.length; i++) {
  if ((strings[i].startsWith('a')) || 
      (strings[i].startsWith('e')) || 
      (strings[i].startsWith('i')) || 
      (strings[i].startsWith('o')) || 
      (strings[i].startsWith('u')) ||
      (strings[i].startsWith('A')) || 
      (strings[i].startsWith('E')) || 
      (strings[i].startsWith('I')) || 
      (strings[i].startsWith('O')) || 
      (strings[i].startsWith('U'))) {
        results.push(strings[i])
      }
 }
 return results;
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s/g,'');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  // your code here
  const reversed = reverseWordsInArray(strings);
  reversed.sort();
  return reverseWordsInArray(reversed);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
