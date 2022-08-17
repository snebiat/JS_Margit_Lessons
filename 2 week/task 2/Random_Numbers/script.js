const checkRandomNum = () => {
const num1= Number.parseInt(prompt("Enter the first number"));
const num2= Number.parseInt(prompt("Enter the second number"));
const num3= Number.parseInt(prompt("Enter the third number"));

if (num1<0 && num2<0 && num3<0)
    console.log("Only negatives");
else if (num1>=0 || num2>=0 || num3>=0)
{
    console.log("Sum = " + (num1 + num2 + num3));
    if (num1>=0 && num2>=0 && num3>=0) {
        console.log("Product = " + num1*num2*num3);
    } 
}
}

checkRandomNum();
