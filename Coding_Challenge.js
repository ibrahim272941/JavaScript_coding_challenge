// ///------------Multi Table--------------------////

// const num = parseInt(prompt("Enter an integer"));

// for (let i = 1; i < 11; i++) {
//   let multi = `${num}* ${i} = ${i * num}`;
//   document.write(`${multi} <br/>`);
// }

// ///----------Kilometer to Mile Convert---------///

// function kmToMile(num) {
//   let result = num * 0.621371192;
//   return document.write(result, "miles");
// }

// ///---------------REverse Word-----------//

// function reverse(s) {
//   return s.split("").reverse().join("");
// }

// console.log(reverse("ibrahim")); //

// //--------Celcius_to_Fahrenheit--------/////7

// function temprature() {
//   while (true) {
//     let choose = prompt(
//       "Welcome to Cell to Fahre \n 1-) Cell to Fahre \n 2-) Fahre to Cell \n 3-) Exit"
//     );
//     if (choose == 1) {
//       let choose1 = prompt("Please Enter Cell Value");
//       let result = cellToFahre(choose1);
//       document.write(result);
//       break;
//     } else if (choose == 2) {
//       let choose2 = prompt("Please Enter Fahre Value");
//       let result = fahreToCell(choose2);
//       document.write(result);
//       break;
//     } else if (choose == 3) {
//       document.write("<h1>Have a nice day</h1>");
//       break;
//     }
//   }
// }

// function cellToFahre(params) {
//   return `<h1>${params}°C = ${(params * 1.8 + 32).toFixed(2)}°F</h1> `;
// }
// function fahreToCell(params) {
//   return `<h1>${params}°F = ${((params - 32) / 1.8).toFixed(2)}°C</h1>`;
// }
// temprature();

// //-----------Find Most Common word and which index ist in?------/////
// function commonIndx() {
//   let stra = prompt("Write a something");

//   var b = [];
//   var count = 0;
//   let maxChar = "";
//   var stran = stra.toLowerCase();
//   var arr = stran.split(" ");

//   for (i of arr) {
//     let missingLength = stra.split(i).length;
//     if (missingLength > count) {
//       maxChar = i;
//       count = missingLength;
//       2;
//     }
//   }
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === maxChar) {
//       b.push(i);
//     }
//   }
//   return document.write(
//     `Most common character is : "${maxChar.toLocaleUpperCase()}"<br><hr>Index numbers are : ${b} `
//   );
// }
// commonIndx();

// /////------Find Fibonacci numbers between two given numbers---/////

// function fibonacci(min, max) {
//   const fibonacci = [];

//   while (min <= max) {
//     fibonacci.push(min);
//     if (fibonacci.length < 2) {
//       min += min;
//     } else {
//       min = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     }
//   }
//   return fibonacci;
// }

// ////----------Find fibonacci number which index-----////////
// function fib(index) {
//   var a = 1;

//   const fib = [];
//   while (true) {
//     fib.push(a);
//     if (fib.length < 2) {
//       a += a;
//     } else if (fib[index - 1] === a) {
//       break;
//     } else {
//       a = fib[fib.length - 1] + fib[fib.length - 2];
//     }
//   }
//   return `${a},${fib}`;
// }
// console.log(fib(12));

// iki array arasindaki farki biulma (find to differen element in two array)
// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item));
// }

// //harflerin alfabedeki yerini bulma (find the position letter in alphabet)
// const findPosition = (letter) =>
//   `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`;

// const text = "The suns232et sets at twelve o' clock.";

// function alphabetPosition(text) {
//   const [...punctuations] = "`~!@#$%^&*()_+{}|:\"<>?-=[];'./,' ',";
//   const cleanUp = text.split("").filter((item) => !punctuations.includes(item));
//   const position = cleanUp.map((item) => {
//     return item.toLowerCase().charCodeAt() - 96;
//   });
//   return position
//     .filter((item) => item > 0)
//     .toString()
//     .split(",")
//     .join(" ");
// }
// console.log(alphabetPosition(text));

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map((c) => c.charCodeAt() - 64)
//     .join(" ");
// }
// function alphabetPosition(text) {
//   return text
//     .match(/[a-zA-Z]/g)
//     .map((el) => el.toLowerCase().charCodeAt() - 96)
//     .join(" ");
// }
console.log("hello world");

const second = 3662;

const minute = (second - (second % 60)) / 60;
const hour = (minute - (minute % 60)) / 60;

const readAble = `${hour} hour , ${minute % 60} minute ${second % 60} ,second `;
function formatDuration(seconds) {
  function numberEnd(num) {
    return num > 1 ? "s" : "";
  }
  const minute = Math.floor(seconds / 60) % 60;
  const hour = Math.floor(seconds / (60 * 60));

  const h = hour > 0 ? `${hour} hour${numberEnd(hour)}` : "";
  const m = minute > 0 ? `${minute} minute${numberEnd(minute)}` : "";
  const s =
    seconds % 60 > 0 ? `${seconds % 60} second${numberEnd(seconds % 60)}` : "";
  if (h && m && s) {
    return `${h} , ${m} and ${s}`;
  }
  if (h && m && !s) {
    return `${h} and ${m}`;
  }
  if (!h && m && s) {
    return `${m} and ${s}`;
  }
  if (h && !m && !s) {
    return `${h}`;
  }
  if (!h && m && !s) {
    return `${m}`;
  }
  if (!h && !m && s) {
    return `${s}`;
  }
}
console.log(formatDuration(120));

("1 hour, 1 minute and 2 seconds");
("1 minute and 2 seconds");
