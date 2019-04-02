/* Using a For loop */
function fizzBuzz(num) {
  if (num <= 0) return false;

  let i;

  for (i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Fizz");
    else if (i % 3 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(20);

/* Uisng a while loop */
function fizzBuzz(num) {
  if (num <= 0) return false;

  let i = 0;

  while (i <= num) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Fizz");
    else if (i % 3 === 0) console.log("Buzz");
    else console.log(i);

    i++;
  }
}

fizzBuzz(20);
