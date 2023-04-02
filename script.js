// problem_92
// let n = 30;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     if (i > 9 && i < 99) {
//         result *= 1 + i / 100;
//     } else {
//         result *= 1 + i / 10;
//     }
// }
// console.log(result);

// problem_93
// let n = 10;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     if (i > 9 && i < 99) {
//         result += -1 * Math.pow(-1, i) * (1 + i / 100);
//     } else {
//         result += -1 * Math.pow(-1, i) * (1 + i / 10);
//     }
// }
// console.log(result);

// problem_94
// let n = 8,
//     a = 2;
// let s = 1;
// for (let i = 1; i <= n; i++) {
//     s *= a;
// }
// console.log(s);

// problem_95
// let n = 8,
//     k = 2,
//     s = 0;
// for (let i = 1; i <= n; i++) {
//     s += i ** k;
// }
// console.log(s);

// problem_96
// let a = 1,
//     b = 10;
// for (let i = a; i <= b; i++) {
//     let line = " ";
//     for (let j = 0; j < i; j++) {
//         line += i + " ";
//     }
//     console.log(line);
// }

// problem_97
// let a = [];
// let b = [4, 5];
// function difference(a, b) {
//     return a.filter((x) => !b.includes(x));
// }
// console.log(difference(a, b));

// problem_98
// function maskString(str) {
//     if (str.length <= 4) {
//         return str;
//     }
//     let masked = "";
//     for (let i = 0; i < str.length - 4; i++) {
//         masked += "#";
//     }
//     masked += str.slice(-4);
//     return masked;
// }
// let inputString = "5j3b6bk2435k";
// let result = maskString(inputString);
// console.log(result);

// problem_99
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//     return array.map((x) => (x % 2 ? odd.shift() : x));
// }
// let inputArray = [5, 3, 2, 8, 1, 4];
// let result = sortArray(inputArray);
// console.log(result);

// problem_100
// let n = 123;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         sum += i;
//     } else if (n < 0){
//         console.log(0);
//     }
// }
// console.log(sum);

// problem_101
// let n = 1;
// let arr = [...Array(n).keys()].map(i => i + 1);
// console.log(arr);

// problem_102
// let a = [1, 2, 3];
// let b = [3, 2, 1];
// let c = a.map((x, i) => x + b[i]);
// console.log(c);

// problem_103
// let a = [10, 12];
// let n = 5;
// a.forEach(function(element) {
//     console.log(element * n);
// });

// problem_104
// let a = [10, 12, 3];
// let evenNumbers = a.filter(function (number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// problem_105
// const a = [1, 2, 3];
// const sum = a.filter((x) => x % 2 === 1).reduce((acc, val) => acc + val, 0);
// console.log(sum);

// problem_106
// let a = [1, 'test', 3];
// let v = 3;
// let index = a.indexOf(v);
// console.log(index);

// problem_107
// let arr = [10, 2, 13, 15];
// let isSorted = arr.every(
//     (value, index) => index === 0 || arr[index - 1] <= value
// );
// console.log(isSorted);

// problem_108
// function checkValueTypeInArray(array, value) {
//     return array.some((element) => typeof element === typeof value);
// }
// const a = [];
// const v = 1;
// console.log(checkValueTypeInArray(a, v));

// problem_109
// function findMaxValue(array) {
//     return array.reduce((max, current) => (current > max ? current : max));
// }
// const a = [1, 2, 10, 15, -4];
// console.log(findMaxValue(a));

// problem_110
// function findFirstGreater(array, n) {
//     return array.find((element) => element > n);
// }
// const a = [1, 2, 10, 15, -4];
// const n = 4;
// console.log(findFirstGreater(a, n));

// problem_111
// let n = 5;
// let v = 0;
// let arr = new Array(n);
// arr.fill(v);
// console.log(arr);

// problem_112
// let p0 = 1000;
// let percent = 2;
// let aug = 50;
// let p = 1200;
// let years = 0;
// while (p0 < p) {
//   p0 += p0 * (percent / 100) + aug;
//   years++;
// }
// console.log(years);