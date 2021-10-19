/* 3. Create a For Loop that will take in a user input and print out different console messages.
- If the value provided is less than or equal to 50, terminate the loop
- If the value is divisible by 10, skip printing the number
- If the value is divisible by 5, print the number
*/

let number = Number(prompt("Give me a number"));
console.log("The number that you provided is: " + number);
do {
	if (number <= 50) {
		console.log("Current value is less than or equal to 50. Terminating the loop.");
		break;
	} else if (number % 10 === 0) {
		console.log(number);
		console.log("The number is divisible by 10, skipping the number");
		number -= 1;
		continue;
	} else if (number % 5 === 0) {
		console.log(number);
		console.log("The number is divisible by 5, printing the number");
		console.log(number);
		number -= 1;
	} else {
		console.log(number);
		number -= 1;
	}
} while (number >= 50)

/*4. Given a string, create a For Loop that will take take all the consonants of the string and store it in a different variable.*/

let word = 'Polyphiloprogenitive';
console.log(word);
let wordNew = [];
for(let i = 0; i < word.length; i++){

	if(!(
		word[i].toLowerCase() == "a" ||
		word[i].toLowerCase() == "e" ||
		word[i].toLowerCase() == "i" ||
		word[i].toLowerCase() == "o" ||
		word[i].toLowerCase() == "u" 
	)) {
		wordNew[i] = word[i];
		continue;
	} else {
		continue;
	}
}
console.log(wordNew);