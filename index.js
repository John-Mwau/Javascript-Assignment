 //Question One;
function firstHundredNumbers() {
  let allNumbers = [];// Take in an input array
  let number = 1;
  let sum = 0;

  while (allNumbers.length < 100) {
    allNumbers.push(number); //Loop through the condition, and assign the output number to the array.
    sum += number;
    number++;// Iterates though the array until the condition is met.
  }

  return {
    numbers: allNumbers,
    sum: sum
  };
}
let result = firstHundredNumbers(); //Define  a newvaribale and assign it the function.
result.numbers;// Print all numbers.
result.sum;// Print the sum all numbers within the array.


//Question Two

function factorialCheck() {

  let number = 10; // Define a variable and assign it a random number.
  let result = 1; // Define  a variable that will hold output once the loop iterates though the random number.
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  result;
}
factorialCheck();


//Question Three
function firstFiftyEvenNumbers (){
    let EvenNumbers = []; // Define a variable to hold an empty array;
    let Number1= 0; // Define the first number where the array will begin itteration
    let sum = 0; // Initial sum 
      for (let i=0;EvenNumbers.length <= 50; i++) {
        EvenNumbers.push(Number1); //append numbers to the empty array.
        sum +=i;
        Number1 +=2;
      }
  return  {
  newNumbers: EvenNumbers,
  newSum:sum}
};
let FiftyEvenNumbers = firstFiftyEvenNumbers()
FiftyEvenNumbers.newNumbers; // Print all even numbers
FiftyEvenNumbers.newSum; // Print the sum of all even numbers.


//QUESTION FOUR
let reversedString = () =>{
  let inputString = ''; // Take in an empty string. User can enter any string.
  let newString = inputString.split('').reverse().join(''); // Split string into single letters, reverse them, and join them.
  return `'The Reversed String is:'${newString}` // Output the reversed string
}
reversedString ()


//Question Five;
function quadraticSolver () {
  let a = parseInt ('1');
  let b = parseInt ('9');
  let c = parseInt ('18'); 
  let result  =  ((-1 * b) + Math.sqrt((Math.pow(b,2) -(4 * a * c)))) / (2 *a);
return result;
}
console. log (quadraticSolver ())

//Question Six;
function GCDCalculator (num1, num2) {
  let remainder = 1;
  let GCD;
    while (remainder){
      remainder = num1 % num2;
      num1 = num2;
      num2 = remainder;
    }
 return GDC=num1;
}
GCDCalculator();

//Question Seven;
function Finobacci () {
  let n1 = 0; // Decleare first number';
  let n2 = 1; // Declare second number
  let fib = [n1, n2]; // Define an array to take in output after iterration
    for (let i=2; i <50 ; i++){
      fib[i] = fib[i-1] + fib[i-2]; // Define the finobacci formula.
    }
  return fib
  }
  Finobacci()


//Question Eight;
function PalindromeChecker () {
  let InputWord = 'madam';
  let newWord = InputWord.split ('').reverse ().join ('');
  let OutputMessage;
  if (InputWord === newWord){
      OutputMessage ='Palindrome'
  }else{
    OutputMessage = 'Not Palindrome';
  }
  return OutputMessage;
}
PalindromeChecker ()


//Question Nine;
function PrimeNumbersfrom1_100() {
  let inputNumbers = [];
  let outputPrime = 2;

  while (inputNumbers.length < 100) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(outputPrime); i++) {
      if (outputPrime % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      inputNumbers.push(outputPrime);
    }

    outputPrime++;
  }

  return inputNumbers;
}

PrimeNumbersfrom1_100(); 


//Question 10;
 function MultiplicationTable (){
  let multNumber = 12;
  let result =[]
  for (let i = 1; i <= 12 ; i++){
    result.push (multNumber * i);
  }
  return result
 }
 MultiplicationTable ();
 