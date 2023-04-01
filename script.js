// problem_92 ???
// let n = 5,
//     s = 1;
// for (let i = 1; i <= n; i++) {
//     s *= 1 + i / 10;
// }
// console.log(s);

// problem_93 ???
// let n = 10,
//     s = 0;
// for (let i = 1; i <= n; i++) {
//     s += -1 * Math.pow(-1, i) * (1 + i / 10);
// }
// console.log(s);

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
function difference(a, b) {
    return a.filter((x) => !b.includes(x));
}

let a = [];
let b = [4, 5];
console.log(difference(a, b));
