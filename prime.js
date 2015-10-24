#!/usr/bin/env node

//calculate if prime or not and return the number if prime or else null
var prime = function(testnum) {
	if(testnum < 1) { return null; }
	else if(testnum == 1) { return null; }
	else {
		var limit = (Math.sqrt(testnum));
		for(x=2; x<limit+1; x++)
		{if(testnum % x === 0) {return null;}
		}
		return testnum;
	}
};

//identifies the first k primes and puts them into an array
var firstkprime = function(kprime) {
	var number = 2;
	var arr = [];
	count = 1;
	while (count < kprime+1)
		{var calculated = prime(number);
	 	if(calculated !== null) {
		arr.push(calculated);
		count++;
		}
	number++ ;
	}
	return arr;
};

var kprime = 20;
console.log("The first "+ kprime + " prime numbers are:");
console.log(firstkprime(kprime));
console.log("Krithika is awesome!");
