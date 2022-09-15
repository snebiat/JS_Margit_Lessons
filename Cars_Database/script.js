const search_form = document.querySelector('#form_search');
const insert_form = document.querySelector('#insert');
const result = document.querySelector('#search_result');
const carDatabase = [];

class Car {
    constructor (carLicense,carMaker,carModel,carOwner,carPrice,carColor) {
        this.license = carLicense;
        this.maker = carMaker;
        this.model = carModel;
        this.owner = carOwner;
        this.price = carPrice;
        this.color = carColor;
    }
}
const insertCar = (event) => {
    event.preventDefault();
    const license_number = document.querySelector('#license_number').value;
    const car_maker = document.querySelector('#car_maker').value;
    const car_model = document.querySelector('#car_model').value;
    const car_owner = document.querySelector('#car_owner').value;
    const car_price = document.querySelector('#car_price').value;
    const car_color = document.querySelector('#car_color').value
    newcar = new Car(license_number,car_maker,car_model,car_owner,car_price,car_color);
    carDatabase.push(newcar);
    document.getElementById("cars_database").innerHTML += `<tr>
    <td>${license_number}</td>
    <td>${car_maker}</td>
    <td>${car_model}</td>
    <td>${car_owner}</td>
    <td>${car_price}</td>
    <td>${car_color}</td>
    </tr>`;
    console.table(carDatabase);
}

const searchCar = (event) => {
    event.preventDefault();
    const license_number = document.querySelector('#search_license_number').value;    
    let car_result;
    if (carDatabase.length==0) result.textContent = `There is no data in the database. Please insert car information first.`;
    else {
        car_result = carDatabase.find(search => search.license == license_number);
        car_result!==undefined ? result.textContent = `License number ${car_result.license} is ${car_result.maker} ${car_result.model} and it belongs to ${car_result.owner}`
        : result.textContent = `License number ${license_number} cannot be found.`;
    }  
}

search_form.addEventListener('submit', searchCar);
insert_form.addEventListener('submit', insertCar);