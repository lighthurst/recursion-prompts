/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) { // terminal case
    return null;
  }
  if (n === 0) { // base case
    return 1;
  }
  return n * factorial(n - 1); // recursion case
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var first = array[0];
  if (Array.isArray(first)) {
    first = arraySum(first);
  }
  return first + arraySum(array.slice(1));
  // if (Array.isArray(array) === false) {
  //   return array;
  // }
  // return array.reduce(function (sum, cur) {
  //     return sum + arraySum(cur);
  // }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (typeof(n) !== 'number') {
      return 'Invalid number.'
  } else if (n === 0) {
      return true;
  } else if (n === 1) {
      return false;
  } else if (n < 0) {
      return isEven(-n);
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var arr = [];
  if (x < y) {
    if (x + 1 === y) {
      return arr;
    }
    arr.push(x + 1);
    return arr = arr.concat(range(x + 1, y));
  }
  if (x > y) {
    if (x - 1 === y) {
      return arr;
    }
    arr.push(x - 1);
    return arr = arr.concat(range(x - 1, y));
  }
  return arr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
      return 1;
  }
  if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n === -1) {
    return true;
  }
  if (n < 1 && n > -1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  const lg = string.length;
  if (lg === 1) {
    return string;
  }
  return string.charAt(lg - 1) + reverse(string.substring(0, lg - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  const str = string.split(' ').join('').toLowerCase();
  const lg = str.length;
  if (lg === 0 || lg === 1 ) {
      return true;
  }
  if (str.charAt(0) === str.charAt(lg - 1)) {
      return palindrome(str.substring(1, lg - 1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -modulo(-x,  y);
  }
  if (y < 0) {
    return  modulo( x, -y);
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + (multiply(-x, (-y) - 1));
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
  let mixedSign = false;
  if (y === 0) {
    return NaN;
  }
  if (x < 0 && y < 0) {
    [x, y] = [-x, -y];
  }
  if (x < 0 || y < 0) {
    x < 0 ? x = -x : y = -y;
    mixedSign = true;
  }
  if (x === y) {
    return 1;
  }
  if (x < y) {
    return 0;
  }
  let posResult = 1 + divide(x - y, y);
  return mixedSign ? -posResult : posResult;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0) {
      return str1.charAt(0) === str2.charAt(0);
  }
  return str1.charAt(0) === str2.charAt(0) && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str.charAt(0)];
  }
  let strArr = createArray(str.slice(1));
  strArr.unshift(str.charAt(0));
  return strArr;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return [array[0]];
  }
  let revArr = reverseArr(array.slice(0, -1));
  revArr.unshift(array[array.length - 1]);
  return revArr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  }
  let arr = buildList(value, length - 1);
  arr.unshift(value);
  return arr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  } 
  let fizzBuzzArr = fizzBuzz(n - 1);
  if (n % 3 === 0 && n % 5 === 0) {
    fizzBuzzArr.push('FizzBuzz');
  } else if (n % 3 === 0) {
    fizzBuzzArr.push('Fizz');
  } else if (n % 5 === 0) {
    fizzBuzzArr.push('Buzz');
  } else {
    fizzBuzzArr.push(String(n));
  }
  return fizzBuzzArr;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  return (value === array[0] ? 1: 0) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])];
  }
  let result = rMap(array.slice(1), callback);
  result.unshift(callback(array[0]));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var prop in obj) {
    if (prop === key) {
      count++;
    }
    if (typeof obj[prop] !== 'string') {
      count += countKeysInObj(obj[prop], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      count++;
    }
    if (typeof obj[key] !== 'string') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (obj.hasOwnProperty(oldKey)) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof obj[key] !== 'string') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else if (n === 2) {
    return [0, 1, 1];
  }
  let fibArr = fibonacci(n - 1);
  fibArr.push(fibArr[n - 2] + fibArr[n - 1]);
  return fibArr;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return nthFibo(n - 2) + nthFibo(n - 1);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let arr = capitalizeWords(array.slice(1));
  arr.unshift(array[0].toUpperCase());
  return arr;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  let firstLetUpp = array[0].substring(0, 1).toUpperCase();
  let firstStrPsc = firstLetUpp + array[0].substring(1);
  if (array.length === 1) {
    return [firstStrPsc];
  }
  let strArr = capitalizeFirst(array.slice(1));
  strArr.unshift(firstStrPsc);
  return strArr;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let flat = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
        flat.push(...flatten(el));
    } else {
        flat.push(el);
    }
  });
  return flat;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }
  if (str.length === 1) {
    obj[str.charAt(0)] = (obj[str.charAt(0)] || 0) + 1;
    return obj;
  }
  obj[str.charAt(0)] = (obj[str.charAt(0)] || 0) + 1;
  return letterTally(str.substring(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var strArr = str.split(' ');
  var objDigitStr = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  }
  if (objDigitStr.hasOwnProperty(strArr[0])) {
    strArr[0] = objDigitStr[strArr[0]];
  }
  if (strArr.length === 1) {
    return strArr[0];
  }
  return strArr[0] + ' ' + numToText(strArr.slice(1).join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  min = min || array[0], max = max || array[array.length - 1];
  const mid = Math.floor((min + max) / 2);
  if (target === array[mid]) {
      return array[mid];
  }
  if (max - 1 === min) {
      return Math.abs(array[min] - target) > Math.abs(array[max] - target)
        ? array[max]
        : array[min];
  }
  if (target > array[mid]) {
    return binarySearch(array, target, mid, max);
  }
  if (target < array[mid]) {
    return binarySearch(array, target, min, mid);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {

};
