// function that prompts the user to enter their age and then determines the price of a movie ticket based on the given age criteria.
  function getTicketPrice() {
    const age = Number(prompt("Please enter your age:"), 10);
    
    let ticketPrice;
    if (age <= 12) {
      ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
      ticketPrice = 15;
    } else if (age >= 18) {
      ticketPrice = 20;
    } else {
      alert("Invalid age entered.");
      return;
    }

    alert(`Your movie ticket price is $${ticketPrice}.`);
  }
  getTicketPrice();



// function that takes a year as input and determines whether it is a leap year or not
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false



// fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1


// recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent > 0) {
    return base * power(base, exponent - 1);
  }
  return 1 / power(base, -exponent);
}

console.log(power(2, 3));  // 8
console.log(power(5, 0));  // 1
console.log(power(2, -2)); // 0.25


  