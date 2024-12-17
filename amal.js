//Decision Making

/*Task 1: Leap Year Checker */

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

console.log(isLeapYear(2024));


/*Task 2: Determine ticket price based on age (Ticket Pricing) */

function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket price: $10 (for children)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price: $15 (for teens)";
    } else {
        return "Ticket price: $20 (adult)";
    }
}

console.log(ticketPrice(10)); 
console.log(ticketPrice(16)); 
console.log(ticketPrice(25)); 


//Recursion
/*Task 1: Fibonacci Sequence */

function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

console.log(fibonacci(5)); 
console.log(fibonacci(7)); 

/*Task 2: Palindrome Checker */

function isPalindrome(str) {

    str = str.replace(/\s+/g, '').toLowerCase();

    if (str.length <= 1) {
        return true;
    }


    if (str[0] === str[str.length - 1]) {
      
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 




