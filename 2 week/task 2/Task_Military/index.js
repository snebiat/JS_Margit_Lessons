const age = prompt("Enter your age : "); 
if(age<18) console.log("too young");
else if (age<27) console.log("Right age for military service");
else if (age<41) console.log("You are in reserve");
else if (age<55) console.log("You are in backup reserve");
else console.log("Too aged");
