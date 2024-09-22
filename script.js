document.getElementById('convertButton').addEventListener('click', function() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let result;

    if (isNaN(inputTemperature)) {
        result = "Please enter a valid number.";
    } else {
        if (unit === "Celsius") {
            const fahrenheit = (inputTemperature * 9/5) + 32;
            result = `${fahrenheit.toFixed(2)} °F`;
        } else {
            const celsius = (inputTemperature - 32) * 5/9;
            result = `${celsius.toFixed(2)} °C`;
        }
    }

    document.getElementById('result').textContent = result;
});

