//Loop Assignments (Don’t use arrays)
// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

const printOddNumbers = () => {
    for (let num=1; num<100;num++){
        if (num%2 != 0) {
            console.log(num);
        }
    } 
}

//printOddNumbers();


// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
const printEvenNumbers = () => {
    for (let num1 = 2, num2=98; num1<100, num2>0; num1+=2, num2-=2) {
          if (num1%2 == 0 && num2%2 ==0) {
              results = results + " " + num1 + " " + num2;
          }
      }
      console.log(results);
  }
  
//printEvenNumbers();


// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
let distance;
let time;
const calculateAverage = () => {
    do {
        distance = Number(prompt("Enter the distance : "));
        if (distance!=0)
        time = Number(prompt("Enter the time : "));
        console.log(distance/time);

    } while (distance !== 0)
} 

//calculateAverage();

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let num;
let count = 0;
let EvenCount=0;
const printEvenCount = () => {
    do {
        num = Number(prompt("Enter 20 numbers : "));
        if (num%2 == 0) EvenCount++;
        count++;
    } while (count <= 20)
console.log(EvenCount);
}

//printEvenCount();

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

const printAverage = () => {
    let num;
    let sum = 0;
    let count=0;
    do {
        num = Number(prompt("Enter numbers : "));
        sum += num;
        count++;
    } while (num != 0)
console.log(sum/(count-1));
}

//printAverage();

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

const showAverage = () => {
    let num;
    let sum = 0;
    let count=0;
    for (let i=0; i<5;i++) {
        num = Number(prompt("Enter numbers : "));
        sum += num;
        count++;
    }
console.log(sum/count);
}

//showAverage();

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

const calcAverage = () => {
    let num;
    let sum = 0;
    let count=0;
    
    do {
        num = Number(prompt("Enter a number : "));
        answer = prompt("Do you want to continue giving numbers?(y/n)");
        count++;
        sum += num;
    } while (answer == "y")
console.log(sum/count);
}

//calcAverage();

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

const showSmallest = () => {
    let num;
    let minNum = 100000;
    let count=0;
    count = Number(prompt("How many numbers would you like to enter : "));
    for (let i=0; i<count;i++){
        num = Number(prompt("Enter a number : "));
        if (num < minNum) minNum=num;
    } 
    console.log('The smallest number is ' , minNum);
}

//showSmallest();

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

const showTwoBigNumbers = () => {
    let num;
    let big1 =0 , big2 = 0;
    for (let i=0; i<10;i++){
        num = Number(prompt("Enter ten numbers : "));
        if (num > big1) {
            big2=big1
            big1=num;
        }
    } 
    console.log('The two biggest numbers are ' , big1 , ' and ' , big2);
}

//showTwoBigNumbers();

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

const showSumAverage = () => {
    let num;
    let sum=0;
    let min = 100000000;
    let big = 0;
    for (let i=0; i<10;i++){
        num = Number(prompt("Enter a number : "));
        sum += num;
        if (num < min) min=num;
        if (num > big) big=num;
    } 
    console.log('Sum : ' , sum , ', Average : ' , sum/10 , ', Smallest number : ' , min , ', Biggest number : ' , big);
}

//showSumAverage();
