const convertTemp = () => {
    const cels = +document.querySelector('#celsius').value;
    const fah = +document.querySelector('#fahrenheit').value;
    const kelv = +document.querySelector('#kelvin').value;
    if(document.activeElement.id == "celsius") {
        document.querySelector('#fahrenheit').value = (cels*1.8)+32;
        document.querySelector('#kelvin').value = (cels+273.15);
    }
    else if (document.activeElement.id == "fahrenheit") {
        document.querySelector('#celsius').value = (fah-32)/1.8;
        document.querySelector('#kelvin').value = (((fah-32)/1.8)+273.15);
    }
    else if (document.activeElement.id == "kelvin") {
        document.querySelector('#celsius').value = kelv-273.15;
        document.querySelector('#fahrenheit').value = ((kelv-273.15)*1.8)+32;
    } 
}