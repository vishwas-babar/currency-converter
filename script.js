fetch('https://open.er-api.com/v6/latest/INR').then((response)=> {
    return response.json();
}).then((data)=> {
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
from.addEventListener('change', (event)=>{
    let selected_option = event.target.value;
    let from_country_flag = document.querySelector('.from-country-flag');
    console.log(`https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`)
    from_country_flag.src = `https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`;
});

to.addEventListener('change', (event)=>{
    let selected_option = event.target.value;
    let to_country_flag = document.querySelector('.to-country-flag');
    console.log(`https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`)
    to_country_flag.src = `https://flagsapi.com/${countryList[selected_option]}/shiny/64.png`;
});




