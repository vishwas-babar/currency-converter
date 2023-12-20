fetch('https://open.er-api.com/v6/latest/INR').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.rates);
    console.log(data.rates.USD);

    for (const currency in data.rates) {
        setTheOptions(currency.toString());
    }
})

function setTheOptions(currencies) {
    let from = document.querySelector('.from');
    let from_option = document.createElement('option');
    from_option.textContent = currencies;
    from.appendChild(from_option);
    // to.appendChild(option);

    let to = document.querySelector('.to');
    to_option = document.createElement('option');
    to_option.textContent = currencies;
    to.appendChild(to_option);
    to.value = 'USD';
}

// change the flags when option is selected
const from = document.querySelector('.from');
const to = document.querySelector('.to');
from.addEventListener('change', (event) => {
    let selected_option = event.target.value;
    let from_country_flag = document.querySelector('.from-country-flag');
    console.log(`https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`)
    from_country_flag.src = `https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`;
});

to.addEventListener('change', (event) => {
    let selected_option = event.target.value;
    let to_country_flag = document.querySelector('.to-country-flag');
    console.log(`https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`)
    to_country_flag.src = `https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`;
});



const submit_btn = document.querySelector('.submit-btn');
submit_btn.addEventListener('click', (event) => {
    event.preventDefault(); // To prevent the default behaviour of the form the problem is when btn is clicked then page is reloading and the result is not shown
    let amount = document.querySelector('.amount').value;
    console.log(amount);
    if (amount === '' || amount === 0) {
        alert('Please enter the amount');
    } else {
        let from_value = document.querySelector('.from').value;
        let to_value = document.querySelector('.to').value;
        let per_unit;
        let to_currency;

        const url = `https://open.er-api.com/v6/latest/${from_value}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            per_unit = data.rates[to_value];
            console.log(per_unit);
            to_currency = amount * per_unit;
            console.log(to_currency);

            printResult(to_currency, amount);
        });
    }

});


function printResult(to_currency, amount) {
    let result = document.querySelector('.result');
    result.textContent = `${amount} ${from.value} = ${parseFloat(to_currency.toFixed(3))} ${to.value}`;
}
