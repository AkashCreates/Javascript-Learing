// alert("Loops");

// 1
// let i = 0;

// while (i < 4) {
//   alert(i);
//   i++;
// }

// // 2
// let i = 4;
// while (i != -3) {
//   console.log(i);
//   i--;
// }

// 3 do-while

// let sum = 0;
// while (1) {
//   let i = +prompt("Enter Number", "");

//   if (!i) break;

//   sum += i;
// }
// alert(sum);

// let i = 3;

// while (i) {
//   alert( i-- );̀̀
// }

// for (let i = 0; i < 5; ++i) console.log(i);

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// Repeat until the input is correct

// let value;
// do {
//   value = +prompt("Enter number greater than 100", 0);
// } while (value <= 100 && value);

// Output prime numbers

// let limitValue = +prompt("Enter the range:");
// let limitValue = +prompt("Enter the range", 0);
// let pNum = [];

// for (let i = 2; i <= limitValue; i++) {
//   let isPrimeNum = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrimeNum = false;
//       break;
//     }
//   }

//   if (isPrimeNum) {
//     pNum.push(i);
//   }
// }
// console.log(pNum);

// let limitValue = +prompt("Enter the range", 0);




// let limitValue = 10;
// let pNum = [];

// primeloop: for (let i = 2; i <= limitValue; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       continue primeloop;
//     }
//   }
//   pNum.push(i);
// }
// console.log(pNum);
