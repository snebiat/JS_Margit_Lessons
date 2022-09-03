const form = document.querySelector('form');
const customerName = document.querySelector('#name');
const customerAge = document.querySelector('#age');
const final_score = document.querySelector('#score');
let score;
let health_values = [];
let habit_pos_values = [];
let habit_neg_values = [];
const calculateScore = (event) => {
    event.preventDefault();
    health_values = [];
    habit_pos_values = [];
    habit_neg_values = [];
    score=500;
    if (customerAge.value>18 && customerAge.value<25) score += score * 0.1;
    else if (customerAge.value>26 && customerAge.value<35) score += score * 0.3;
    else if (customerAge.value>36 && customerAge.value<45) score += score * 0.6;
    else if (customerAge.value>46 && customerAge.value<55) score += score;
    else if (customerAge.value>56 && customerAge.value<65) score += score * 1.5;
    else if (customerAge.value>56 && customerAge.value>66) score += score * 2.1;

    const health_cond = document.querySelectorAll('input[name="health"]');  
    health_cond.forEach(function(health) {
            if (health.checked) {
                health_values.push(health.value); 
            }
        })
        
    if (health_values.length>0) score += score * (health_values.length * 0.01);

    const habits = document.querySelectorAll('input[name="habit"]');  
    habits.forEach(function(habit) {
            if (habit.checked && habit.value == 'positive') {
                habit_pos_values.push(habit.value); 
            }
            else if (habit.checked && habit.value == 'negative')
            {
                habit_neg_values.push(habit.value);
            }
        })
       
    if (habit_pos_values.length>0) score -= score * (habit_pos_values.length * 0.05);
    
    if (habit_neg_values.length>0) score += score * (habit_neg_values.length * 0.05);
    
    final_score.innerHTML = `Dear <span>${customerName.value}</span>, your score is <span>${Math.floor(+score)} </span>`;
}

form.addEventListener('submit', calculateScore);