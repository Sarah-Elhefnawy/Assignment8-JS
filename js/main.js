var h2 = document.getElementById("demo");
var h3 = document.getElementById("demo3");

// Start of user entering a number then print it
// var num1 = window.prompt("Enter a Number to be printed: ");
// console.log(num1);
// h2.innerHTML= num1;
// End of user entering a number then print it

// Start of number divided by 3 and 4 otherwise print no
// var num2 = Number(window.prompt("Enter a Number divided by 3 & 4: "));
// if (num2 % 3 === 0 && num2 % 4 === 0) {
//     h2.innerHTML = "YES";
// }
// else {
//     h2.innerHTML = "NO";
// }
// End of number divided by 3 and 4 otherwise print no

// Start of print the max between 2 integers
// var num3 = Number(window.prompt("Enter number 1(print the max): "));
// var numm3 = Number(window.prompt("Enter number 2(print the max): "));
// if (num3 > numm3) {
//     h2.innerHTML = num3;
// } else {
//     h2.innerHTML = numm3;
// }
// End of print the max between 2 integers

// Start of number negative otherwise print positive
// var num4 = Number(window.prompt("Enter a number to see its sign: "));
// if (num4 > 0) {
//     h2.innerHTML = "This number is Positive";
// } else if (num4 < 0) {
//     h2.innerHTML = "This number is Negative";
// } else {
//     h2.innerHTML = "This number is Zero";
// }
// End of number negative otherwise print positive

// Start of 3 integers and print the max element and the min element
// var num5 = Number(window.prompt("Enter the First number(print the max): "));
// var numm5 = Number(window.prompt("Enter the Second number(print the max): "));
// var nummm5 = Number(window.prompt("Enter the Third number(print the max): "));
// if (num5 > numm5 && num5 > nummm5) {
//     h2.innerHTML = `The max number between ${num5}, ${numm5}, ${nummm5} is ${num5}`;
//     if (numm5 < num5 & numm5 < nummm5) {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${numm5}`;
//     } else {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${nummm5}`;
//     }
// } else if (numm5 > num5 & numm5 > nummm5) {
//     h2.innerHTML = `The max number between ${num5}, ${numm5}, ${nummm5} is ${numm5}`;
//     if (num5 < numm5 & num5 < nummm5) {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${num5}`;
//     } else {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${nummm5}`;
//     }
// } else {
//     h2.innerHTML = `The max number between ${num5}, ${numm5}, ${nummm5} is ${nummm5}`;
//     if (numm5 < num5 & numm5 < nummm5) {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${numm5}`;
//     } else {
//         h3.innerHTML = `The min number between ${num5}, ${numm5}, ${nummm5} is ${num5}`;
//     }
// }
// End of 3 integers and print the max element and the min element

// Start of check If a number is oven or odd
// var num7 = Number(window.prompt("Enter a number to see its even/odd: "));
// if (num7 % 2 == 0) {
//     h2.innerHTML = "This number is Even";
// } else {
//     h2.innerHTML = "This number is Odd";
// }
// End of check If a number is oven or odd

// Start of if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var char8 = window.prompt("Enter any character to see if its (a,e,I,o,u): ").toLowerCase();
// switch (char8) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'u':
//     case 'o':
//         h2.innerHTML = "Vowel";
//         break;
//     default:
//         h2.innerHTML = "Consonant";
//         break;
// }
// End of if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// Start of print all numbers between 1 to that’s number
// var num9 = Number(window.prompt("Enter any number printed to 10: "));
// for (let index = 1; index <= num9; index++) {
//     h2.innerHTML += index;
//     console.log(index);
// }
// End of print all numbers between 1 to that’s number

// Start of print a multiplication table up to 12
// var num10 = Number(window.prompt("Enter a number to be multiblied till 12: "));
// for (let index = 1; index <= 12; index++) {
//     var result = num10 * index;
//     console.log(result);
//     h2.innerHTML += result;
// }
// End of print a multiplication table up to 12

// Start of print all even numbers between 1 to this number
// var num11 = Number(window.prompt("Enter a number to print all its even numbers: "));
// for (let index = 1; index <= num11; index++) {
//     if (index % 2 ==0) {
//         console.log(index);
//         h2.innerHTML += index;
//     }
// }
// End of print all even numbers between 1 to this number

// Start of print the power of two integers
// var num12 = Number(window.prompt("Enter the First number(print the power): "));
// var numm12 = Number(window.prompt("Enter the Second number(print the power): "));
// var result = 1;
// if (numm12 >= 0) {
//     for (let i = 0; i < numm12; i++) {
//         result *= num12;
//     }
//     console.log(result);
// } else {
//     console.log("Can't be zero");
// }
// End of print the power of two integers

// Start of five subjects and calculate total, average and percentage
// var num12_1 = Number(window.prompt("Enter the First grade: "));
// var num12_2 = Number(window.prompt("Enter the Second grade: "));
// var num12_3 = Number(window.prompt("Enter the Third grade: "));
// var num12_4 = Number(window.prompt("Enter the Fourth grade: "));
// var num12_5 = Number(window.prompt("Enter the Fifth grade: "));
// var totalGrades = num12_1 + num12_2 + num12_3 + num12_4 + num12_5;
// var averageGrades = totalGrades / 5;
// var percentageGrades = totalGrades / (5 * 100) * 100;
// console.log(`Total marks is ${totalGrades}`);
// console.log(`Average is ${averageGrades}`);
// console.log(`Percentage is ${percentageGrades}`);
// End of five subjects and calculate total, average and percentage

// Start of print number of days in that month
// var num13 = Number(window.prompt("Enter month number: "));
// switch (num13) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         h2.innerHTML = 31;
//         break;
//     case 2:
//         h2.innerHTML = 28;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         h2.innerHTML = 30;
//         break;
// }
// End of print number of days in that month