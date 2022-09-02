const input = require('sync-input');
const currencies = { USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75 };

console.log(`Welcome to Currency Converter!
1 USD equals ${currencies['USD']} USD
1 USD equals ${currencies['JPY']} JPY
1 USD equals ${currencies['EUR']} EUR
1 USD equals ${currencies['RUB']} RUB
1 USD equals ${currencies['GBP']} GBP`);

function get_input_currency() {
	while (true) {
		let from = input('From: ').toUpperCase();

		if (!(from in currencies)) {
			console.log('Unknown currency');
		} else {
			return from;
		}
	}
}

function get_output_currency() {
	while (true) {
		let to = input('To: ').toUpperCase();

		if (!(to in currencies)) {
			console.log('Unknown currency');
		} else {
			return to;
		}
	}
}

function get_amount() {
	while (true) {
		let amount = Number(input('Amount: '));

		if (amount < 1) {
			console.log('The amount cannot be less than 1');
		} else if (isNaN(amount)) {
			console.log("The amount has to be a number");
		} else {
			return amount;
		}
	}
}

while (true) {
	let choice = input("What do you want to do?\n1-Convert currencies 2-Exit program\n")
	if (choice == 1) {
		console.log("What do you want to convert?");
		let input_currency = get_input_currency();
		let output_currency = get_output_currency();
		let input_amount = get_amount();
		console.log(`Result: ${input_amount} ${input_currency} equals ${(input_amount / currencies[input_currency] * currencies[output_currency]).toFixed(4)} ${output_currency}`)
	} else if (choice == 2) {
		console.log("Have a nice day!");
		break;
	} else {
		console.log("Unknown input");
	}
}
