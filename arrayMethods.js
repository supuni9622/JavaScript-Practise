console.log('Array methods');

// 1. Array.prototype.reduceRight()

const sum = [0, 1, 2, 3, 4, 6].reduceRight((a, b) =>  {
    return a + b;
  });

console.log('Summation of array of numbers :', sum);

const textDesigns = ['My', 'name', 'is', 'Supuni'].reduceRight((preText, postText) =>  {
    // return preText +" "+ postText;
    return postText +" "+ preText;
  });

console.log('Summation of array of texts :', textDesigns);

// Filter an array of arrays 

const newArray = [[2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);

console.log('New array', newArray);

// 2. Array.prototype.copyWithin()
//arr.copyWithin(target[, start[, end]])

const array = ['a', 'b', 'c', 'd', 'e', 'f'];
//1.
console.log('Array copyWithin 1 : ', array.copyWithin(0, 3, 5));

console.log('Array copyWithin 2 : ',array.copyWithin(3));

// 3. Array.prototype.unshift()

const array1 = [1, 2, 3, 4];
console.log('Actual array',array1);
console.log(array1.unshift(5, 6, 7));
console.log('Add new elements to beginning of array',array1);

// 4. Array.prototype.shift()

const array2 = [1, 2, 3];
console.log('Actual array',array2);
const firstElement = array2.shift();
console.log('Remove first element from array', array2);

// 5. Array.prototype.every()

// The every() method tests if all elements in the array pass the test implemented by the provided function.

// arr.every(callback(element[, index[, array]])[, thisArg])

const isExpensive= (value) => value>  500 ;
const phonePrices= [150, 100, 450, 1200, 700];

const phonePrices2= [800, 40000, 1200, 700];

console.log('Phone prices Check 1', phonePrices.every(isExpensive));

console.log('Phone prices Check 2', phonePrices2.every(isExpensive));

// 6. Array.prototype.reverse()

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7];
arrayOriginal.reverse();

console.log('Array.prototype.reverse', arrayOriginal);

// 7. Array.prototype.sort()

const alphabet = ['a', 'z', 'b', 'd', 'g', 't'];
alphabet.sort();
console.log('Sort array',alphabet);

function compareFunction(a, b){
  if (a < b){return -1;}
  if (a > b){return 1;}
  if (a === b){return 0;}
}
const array11 = [1, 2, 25, 16];
console.log(array11.sort());
const array22 = [1, 2, 25, 16];
console.log(array11.sort(compareFunction));
console.log(array22.sort(compareFunction));

// 8. Array.prototype.toLocaleString()

const array111 = ['The date is:',' (En locale) ', new Date('21 Dec 1997 14:12:00 UTC')];
const localeStringEn = array111.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeStringEn);

// 9. Array.prototype.findIndex()

const arrayNumbers = [5, 12, 8, 130, 200];
const condition = (element) => element > 100;
console.log(arrayNumbers.findIndex(condition));

// 10. Array.prototype.concat()

const arr1 = [1, 2];
const arr2 = ['a', 'b', 'c'];
const arr = arr1.concat(arr2);
console.log('Array concatination',arr);