//write a java script program to print square of first 10 prime numbers

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2; // Start checking for prime from 2
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function printSquaresOfPrimes(n) {
    const primes = getFirstNPrimes(n);
    console.log(`The squares of the first ${n} prime numbers are:`);
    primes.forEach(prime => {
        console.log(`${prime}^2 = ${prime * prime}`);
    });
}

// Print squares of the first 10 prime numbers
printSquaresOfPrimes(10);