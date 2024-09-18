const apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // API URL for exchange rates
const form = document.querySelector('form');
const amountInput = document.querySelector('#amount');
const fromSelect = document.querySelector('#from');
const toSelect = document.querySelector('#to');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  fetch(`${apiUrl}${from}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const result = amount * rate;
      resultDiv.textContent = `Result: ${result.toFixed(2)} ${to}`;
    })
    .catch(error => {
      console.error(error);
      resultDiv.textContent = 'Error: Unable to convert currency.';
    });
});