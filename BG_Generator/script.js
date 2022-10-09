const form = document.querySelector('#direction_form'); 
const gradient_direction = document.querySelectorAll('input[type="radio"]'); 
const output = document.getElementById('bg_show');
const css_output = document.querySelector('#css_result');
let gradient_angle;

const generateGradient = (id) => {
    const first_color = document.querySelector('#first_color').value; 
    const second_color = document.querySelector('#second_color').value; 
    for (const current of gradient_direction) {
        if (current.checked) gradient_angle = current.value;
    }
    output.style.backgroundImage = `linear-gradient(${gradient_angle}, ${first_color}, ${second_color})`; 
    css_output.textContent = `linear-gradient(${gradient_angle}, ${first_color}, ${second_color});`; 
}


form.addEventListener('change', generateGradient);