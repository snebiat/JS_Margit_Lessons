const checkOddEven = () => {
    const number = Number.parseInt(prompt("Enter number : "));
    if (number>=0) {
        if (number%2 == 0)
            return console.log("The number is even");
        else
            return console.log("The number is odd");
    } 
return console.log("The number is negative.");
}

checkOddEven();