///////////////// task01 ////////////////////
var numbers = [1, 2, 3, 4];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of the numbers: " + sum);
///////////////// task02 ////////////////////
var numbersArr = [1, 2, 3, 4, -5];
var isPositive = true;
for (var i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] < 0) {
        isPositive = false;
        break;
    }
}
if (isPositive) {
    console.log("All Positive");
}
else {
    console.log("Not all Positive");
}
///////////////// task03 ////////////////////
var arrString = ["Hi", "DDD", "WWWEEEEE"];
var longestString = arrString[0];
for (var i = 1; i < arrString.length; i++) {
    if (arrString[i].length > longestString.length)
        longestString = arrString[i];
}
console.log("Longest String: " + longestString);
///////////////// task04 ////////////////////
var word = "wearethewwwbestinthearena";
var howMany = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] == 'w') {
        howMany++;
    }
}
console.log("Number of 'w's: " + howMany);
///////////////// task05 ////////////////////
var array = [5, 10, 20];
for (var j = 0; j < array.length; j++) {
    var isPrime = true;
    var numberToCheck = array[j];
    if (numberToCheck <= 1) {
        isPrime = false;
    }
    else {
        for (var i = 0; i <= numberToCheck / 2; i++) {
            if (numberToCheck % i === 0) {
                console.log(numberToCheck + " is not a prime number");
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(numberToCheck + " is a prime number");
    }
}
