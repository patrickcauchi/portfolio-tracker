const button = document.getElementById('myButton');
const priceDisplay = document.getElementById('btcPrice');

button.addEventListener("click", () => {
    console.log("Button clicked ✅");
    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())

        .then(data => {
            console.log("Raw data:", data);         // Full response
            console.log("data.bitcoin:", data.bitcoin); // The inner object
            console.log("data.bitcoin.usd:", data.bitcoin.usd); // Direct access

            const price = data.bitcoin.usd;  // Still trying to access here
            priceDisplay.textContent = `Current BTC Price: $${price}`;
        })


        .catch(error => {
            console.error('Error fetching BTC price:', error);
            priceDisplay.textContent = 'Error fetching price';
        });

    });
