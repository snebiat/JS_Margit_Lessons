const claculateSalary = () => {
    const hourly_salary = Number.parseFloat(prompt("Enter hourly salary : "));
    const hours = Number.parseFloat(prompt("How many hours have you worked per day : "));
    let half_extra =0;
    let  full_extra = 0;
    let salary=0;

    if (hours>7) {
        half_extra= hours - 7;
        if (half_extra>2) {
            full_extra = half_extra - 2;
            half_extra = 2
        }
        salary = (7 * hourly_salary) + (half_extra * (hourly_salary + (hourly_salary * 0.5))) + (full_extra * (hourly_salary * 2));
        console.log(half_extra);
        console.log(full_extra);
        return console.log("Your salary is : " + salary)
    }
return console.log("Less than 7 hours");
}

claculateSalary();

