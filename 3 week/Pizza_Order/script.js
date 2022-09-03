const form = document.querySelector('form');

let price;
let selected_size;
let topping_values = [];
const toppings = document.querySelectorAll('input[name="topping"]');
const delivery = document.querySelector("#delivery");

const selectDelivery = () => {
    if(String(delivery.options[delivery.selectedIndex].value).toLowerCase() === "home delivery") 
        document.querySelector("#delivery_price").textContent = '+ 5€'; 
    else 
        document.querySelector("#delivery_price").textContent = ' '; 
}

const selectSize = (id) => {
    document.querySelector("#p_size").textContent = id;
}

const generateSummary = (event) => {
    event.preventDefault();
    topping_values = [];
    price=0;
    selected_size = document.querySelector("#p_size").textContent;
    if (selected_size == "for 2") price += 7.50;
    else if (selected_size == "for 4") price += 10.50;
    else if (selected_size == "for 6") price += 12.50;
    else if (selected_size == "for 8") price += 15.50;
    toppings.forEach(function(topping) {
        if (topping.checked) {
            topping_values.push(topping.value); 
        }
    })
    if (topping_values.length>4) {
            price += (topping_values.length-4) * 0.5;
    }
    document.querySelector("#cust_name_summary").textContent = document.querySelector("#customer_name").value;
    document.querySelector("#piz_size_summary").textContent = document.querySelector("#p_size").textContent;
    document.querySelector("#toppings_summary").textContent = topping_values.join(' , ');
    if(String(document.getElementById("delivery").value).toLowerCase() === "home delivery") price += 5.00;
    document.querySelector("#delivery_summary").textContent = delivery.options[delivery.selectedIndex].value;
    document.querySelector("#price_summary").textContent = price + ' €';
    document.querySelector("#summary").style['visibility'] = 'visible';
}

form.addEventListener('submit', generateSummary);
