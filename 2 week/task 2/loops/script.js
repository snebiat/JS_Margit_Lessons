//Loop Assignments (Don’t use arrays)
//Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// const printOddNumbers = () => {
//     for (let num=1; num<100;num++){
//         if (num%2 != 0) {
//             console.log(num);
//         }
//     } 
// }

// printOddNumbers();


// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
// const printEvenNumbers = () => {
//     for (let num=0; num<100;num++){
//         if (num%2 == 0 || num2%2 ==0) {
//             console.log(num);
//         }
//     } 
// }

// printEvenNumbers();


//Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
let distance;
const calculateAverage = () => {
    do {
        distance = Number(prompt("Enter the distance : "));
        const time = Number(prompt("Enter the time : "));
        console.log(distance);

    } while (distance !== 0)
} 

calculateAverage();
/*Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

Make a program that asks ten numbers and in the end prints out two biggest numbers.

Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.*/

