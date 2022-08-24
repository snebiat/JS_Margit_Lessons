const calculateGasoline = (price, money) => {
    const result = money/price;
    let result_text = "";
    if (result>10) result_text=`You could get ${Math.floor(result)} litres , good, you can escape now!`;
    else result_text="Oops, you have to stay here!";
    document.querySelector('#result').textContent=result_text;
}