var h2 = document.getElementById("demo");
var h3 = document.getElementById("demo3");

// 1 - Start of user entering a number then print it
// var num1 = window.prompt("Enter a Number to be printed: ");
// console.log(num1);
// h2.innerHTML= num1;
// 1 - End of user entering a number then print it

// 2 - Start of number divided by 3 and 4 otherwise print no
// var num2 = Number(window.prompt("Enter a Number divided by 3 & 4: "));
// if (num2 % 3 === 0 && num2 % 4 === 0) {
//     h2.innerHTML = "YES";
// }
// else {
//     h2.innerHTML = "NO";
// }
// 2 - End of number divided by 3 and 4 otherwise print no

// 3 - Start of print the max between 2 integers
// var num3 = Number(window.prompt("Enter number 1(print the max): "));
// var numm3 = Number(window.prompt("Enter number 2(print the max): "));
// if (num3 > numm3) {
//     h2.innerHTML = num3;
// } 
// else if (numm3 > num3){
//     h2.innerHTML = numm3;
// }
// else {
//     h2.innerHTML = "They both are equal numbers";
// }
// 3 - End of print the max between 2 integers

// 4 - Start of number negative otherwise print positive
// var num4 = Number(window.prompt("Enter a number to see its sign: "));
// if (num4 > 0) {
//     h2.innerHTML = "This number is Positive";
// } else if (num4 < 0) {
//     h2.innerHTML = "This number is Negative";
// } else {
//     h2.innerHTML = "This number is Zero";
// }
// 4 - End of number negative otherwise print positive

// 5 - Start of 3 integers and print the max element and the min element
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
// 5 - End of 3 integers and print the max element and the min element

// 7 - Start of check If a number is oven or odd
// var num7 = Number(window.prompt("Enter a number to see its even/odd: "));
// if (num7 % 2 == 0) {
//     h2.innerHTML = "This number is Even";
// } else {
//     h2.innerHTML = "This number is Odd";
// }
// 7 - End of check If a number is oven or odd

// 8 - Start of if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var char8 = window.prompt("Enter any character to see if its (a,e,I,o,u): ").toLowerCase();
// if (char8 == 'a' || char8 == 'e' || char8 == 'i' || char8 == 'o' || char8 == 'u') {
//     h2.innerHTML = "Vowel";
// }
// else {
//     h2.innerHTML = "Consonant";
// }
// 8 - End of if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// 9 - Start of print all numbers between 1 to that’s number
// var num9 = Number(window.prompt("Enter any number printed to 10: "));
// for (let index = 1; index <= num9; index++) {
//     h2.innerHTML += index;
//     console.log(index);
// }
// 9 - End of print all numbers between 1 to that’s number

// 10 - Start of print a multiplication table up to 12
// var num10 = Number(window.prompt("Enter a number to be multiblied till 12: "));
// for (let index = 1; index <= 12; index++) {
//     var result = num10 * index;
//     console.log(result);
//     h2.innerHTML += result;
// }
// 10 - End of print a multiplication table up to 12

// 11 - Start of print all even numbers between 1 to this number
// var num11 = Number(window.prompt("Enter a number to print all its even numbers: "));
// for (let index = 1; index <= num11; index++) {
//     if (index % 2 ==0) {
//         console.log(index);
//         h2.innerHTML += index;
//     }
// }
// 11 - End of print all even numbers between 1 to this number

// 12 - Start of print the power of two integers
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
// 12 - End of print the power of two integers

// 12 - Start of five subjects and calculate total, average and percentage
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
// 12 - End of five subjects and calculate total, average and percentage

// 13 - Start of print number of days in that month
// var num13 = Number(window.prompt("Enter month number: "));
// if (num13 == 1 || num13 == 3 || num13 == 5 || num13 == 7 || num13 == 8 || num13 == 10 || num13 == 12) {
//             h2.innerHTML = "Days in Months: 31";
// }
// else if (num13 == 4 || num13 == 6 || num13 == 9 || num13 == 11) {
//     h2.innerHTML = "Days in Months: 30";
// }
// else if (num13 == 2) {
//     h2.innerHTML = "Days in Months: 28";
// }
// else {
//     h2.innerHTML = "Months are from 1 to 12 only";
// }
// 13 - End of print number of days in that month

// 14 - Start of marks of five subjects + Find percentage and grade
// var percentage14 = Number(window.prompt("Enter your percentage(To get the mark): "));
// switch (true) {
//     case percentage14>=90:
//         console.log("Your grade is A");
//         h2.innerHTML = "Your grade is A";
//         break;
//     case percentage14>=80:
//         console.log("Your grade is B");
//         h2.innerHTML = "Your grade is B";
//         break;
//     case percentage14>=70:
//         console.log("Your grade is C");
//         h2.innerHTML = "Your grade is C";
//         break;
//     case percentage14>=60:
//         console.log("Your grade is D");
//         h2.innerHTML = "Your grade is D";
//         break;
//     case percentage14>=40:
//         console.log("Your grade is E");
//         h2.innerHTML = "Your grade is E";
//         break;
//     case percentage14<40:
//         console.log("Your grade is F");
//         h2.innerHTML = "Your grade is F";
//         break;
//     default:
//         console.log("not a number");
//         h2.innerHTML = "not a number";
//         break;
// }
// 14 - End of marks of five subjects + Find percentage and grade


// ******************************** Using switch case*******************************


// 15 - Start of print number of days in that month
// var num15 = Number(window.prompt("Enter month number: "));
// switch (num15) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         h2.innerHTML = "Days in Months: 31";
//         break;
//     case 2:
//         h2.innerHTML = "Days in Months: 28";
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         h2.innerHTML = "Days in Months: 30";
//         break;
// }
// 15 - End of print number of days in that month

// 16 - Start of checking an alphabet is vowel or not
// var char16 = window.prompt("Enter any character to see if its (a,e,I,o,u): ").toLowerCase();
// switch (char16) {
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
// 16 - End if checking an alphabet is vowel or not

// 17 - Start of finding maximum between two numbers
// var num17 = Number(window.prompt("Enter First number(find the max): "));
// var numm17 = Number(window.prompt("Enter First number(find the max): "));
// switch (true) {
//     case num17>numm17:
//         h2.innerHTML = `The Maximum number is ${num17}`
//         break;
//     case numm17>num17:
//         h2.innerHTML = `The Maximum number is ${numm17}`
//         break;
//     default:
//         h2.innerHTML = "They both are equal numbers";
//         break;
// }
// 17 - End of finding maximum between two numbers

// 18 - Start of checking whether a number is even or odd
// var num18 = Number(window.prompt("Enter any number(even/odd): "));
// switch (true) {
//     case num18%2==0:
//         h2.innerHTML = `Number ${num18} is Even number`;
//         break;
//     case num18%2==1:
//         h2.innerHTML = `Number ${num18} is Odd number`;
//         break;
//     default:
//         h2.innerHTML = `${num18} is not a number`;
//         break;
// }
// 18 - End of checking whether a number is even or odd

// 19 - Start of number is positive or negative or zero
// var num19 = Number(window.prompt("Enter any number(+/-/0): "));
// switch (true) {
//     case num19>0:
//         h2.innerHTML = `Number ${num19} is Positive`;
//         break;
//     case num19<0:
//         h2.innerHTML = `Number ${num19} is Negative`;
//         break;
//     case num19==0:
//         h2.innerHTML = `Number ${num19} is Zero`;
//         break;
//     default:
//         h2.innerHTML = `${num19} is not a number`;
//         break;
// }
// 19 - End of number is positive or negative or zero

// 20 - Start of Simple Calculator
// var num20 = Number(window.prompt("Enter the First number: "));
// var numm20 = Number(window.prompt("Enter the Second number: "));
// var operator20 = window.prompt("Enter the Operator: ");
// var result = "";
// switch (operator20) {
//     case '+':
//         result = num20 + numm20;
//         h2.innerHTML = `The Sum of ${num20} and ${numm20} is ${result}`;
//         break;
//     case '-':
//         result = num20 - numm20;
//         h2.innerHTML = `The Subtract of ${num20} and ${numm20} is ${result}`;
//         break;
//     case '*':
//         result = num20 * numm20;
//         h2.innerHTML = `The Multiby of ${num20} and ${numm20} is ${result}`;
//         break;
//     case '/':
//         result = num20 / numm20;
//         h2.innerHTML = `The Division of ${num20} and ${numm20} is ${result}`;
//         break;
//     default:
//         h2.innerHTML = "Not an operator";
//         break;
// }
// 20 - End of Simple Calculator