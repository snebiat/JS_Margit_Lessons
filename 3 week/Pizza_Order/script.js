let price;
let selected_size;
let topping_result = [];
let topping_values = [];

const calculatePrice = () =>
{
    price=0;
    selected_size = selectSize();
    if (selected_size == "size_2") price += 7.50;
    else if (selected_size == "size_4") price += 10.50;
    else if (selected_size == "size_6") price += 12.50;
    else if (selected_size == "size_8") price += 15.50;
    selectToppings();
    for(i=4;i<topping_result.length;i++) {
        if (topping_result[i] == '1') price += 0.5;
    }
    if(String(document.getElementById("delivery").value).toLowerCase() === "home delivery") price += 5.00;
    return +price;
}


const generateSummary = () => {
    document.querySelector("#cust_name_summary").textContent = document.querySelector("#customer_name").value;
    document.querySelector("#piz_size_summary").textContent = selectSize();
    summaryTopping();
    document.querySelector("#delivery_summary").textContent = document.getElementById("delivery").value;
    document.querySelector("#price_summary").textContent = calculatePrice() + ' €';
    document.getElementById("summary").style.visibility = "visible";
}

const selectDelivery = () => {
    if(String(document.getElementById("delivery").value).toLowerCase() === "home delivery") 
        document.querySelector("#delivery_price").textContent= '+ 5€'; 
    else 
        document.querySelector("#delivery_price").textContent= ' '; 
}

const selectSize = () => {
    let size;
    const sizes = document.querySelectorAll('input[name="pizza_size"]');
    sizes.forEach(function(psize){
       if(psize.checked) size=psize.value;
    })
    return size;
}

const selectToppings = () => {
    topping_result = [];
    const toppings = document.querySelectorAll('input[name="topping"]');
    toppings.forEach(function(topping) {
        if (topping.checked) {
            topping_result.push('1');
            topping_values.push(topping.value); 
        }
        else topping_result.push('0');
    })
}

const summaryTopping = () => {
    topping_values = [];
    const toppings = document.querySelectorAll('input[name="topping"]');
    toppings.forEach(function(topping) {
        if (topping.checked) {
            topping_values.push(topping.value); 
        }
    })
    console.log(topping_values);
    document.querySelector("#toppings_summary").textContent = '';
    for(i=0;i<topping_values.length;i++) {
        document.querySelector("#toppings_summary").textContent += topping_values[i] + ' , ';
    }
}

