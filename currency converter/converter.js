const from_currencyE1 = document.getElementById('from_currency');
const from_amountE1 = document.getElementById('from_amount');
const to_currencyE1 = document.getElementById('to_currency');
const to_amountE1 = document.getElementById('to_amount');
const rateE1 = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyE1.addEventListener("change", calculate);
from_amountE1.addEventListener("input", calculate);
to_currencyE1.addEventListener("change", calculate);
to_amountE1.addEventListener("input", calculate);
exchange.addEventListener("click", () => {
  const aisha = from_currencyE1.value;
  from_currencyE1.value = to_currencyE1.value;
  to_currencyE1.value = aisha;
  calculate();
})

function calculate() {
  const from_currency = from_currencyE1.value;
  const to_currency = to_currencyE1.value;

  fetch(`https://v6.exchangerate-api.com/v6/2c99a8699ea0ff2ff89996a3/latest/${from_currencyE1.value.toUpperCase()}`)
    .then(res => res.json())
    .then(res => {
      //const rate = res.rates[to_currency];
     // rateE1.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
     // to_amountE1.value = (from_amountE1.value * rate).toFixed(2);
      const to = to_currencyE1.value.toUpperCase();
      const rate = res.conversion_rates[to];
      rateE1.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
      to_amountE1.value = (from_amountE1.value * rate).toFixed(2);

      console.log(rate)


//  fetch(`https://v6.exchangerate-api.com/v6/2c99a8699ea0ff2ff89996a3/latest/`)
 //   .then(res => res.json())
//    .then(res => {
//     const rate = res.rates[to_currency];
 //     rateE1.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
 //     to_amountE1.value = (from_amountE1.value * rate).toFixed(2);
    })

  localStorage.setItem("history", JSON.stringify({ fromCurrency: from_amountE1.value, toCurrency: to_amountE1.value }));
//  location.replace(history.html);
  var about = localStorage.getItem(history);
  console.log(about);
}

calculate();