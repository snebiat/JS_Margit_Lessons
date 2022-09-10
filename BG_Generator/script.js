const gradient_direction = document.querySelectorAll('input[type="radio"]'); 

let gradient_angle;

const output = document.getElementById('bg_show');
const css_output = document.querySelector('#css_result');
 

const generateGradient = (id) => {
    const first_color = document.querySelector('#first_color').value; 
    const second_color = document.querySelector('#second_color').value; 
    switch (id) {
        case 'id_left_down' : 
            angle = 'to top left';
            break; 
        case 'id_down' : 
            angle = 'to top';
            break;
        case 'id_right_down':
            angle = 'to top right';
            break;
        case 'id_left_middle':
            angle = 'to left';
            break;
        case 'id_right_middle':
            angle = 'to right';
            break;
        case 'id_left_up':
            angle = 'to bottom left';
            break;
        case 'id_up':
            angle = 'to bottom';
            break;
        case 'id_right_up':
            angle = 'to bottom right';
            break;
    } 
    output.style.background = `linear-gradient(${angle}, ${first_color}, ${second_color})`; 
    css_output.textContent = `linear-gradient(${angle}, ${first_color}, ${second_color});`; 
}









/* document.querySelectorAll('input[type="radio"]').forEach(item => { item.addEventListener('click',generateGradient(item.id));}); */