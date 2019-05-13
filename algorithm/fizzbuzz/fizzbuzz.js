function fizzBuzz(num) {
	if (num <= 1) return 1;

	if (num % 5 === 0 && num % 3 === 0) return 'fizzBuzz';
}

console.log(fizzBuzz(20));
