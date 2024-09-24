
///////////////// task01 ////////////////////
let numbers: number[] = [1, 2, 3, 4];

let sum : number = 0;

for (let i = 0 ; i<numbers.length; i++)
{
    sum += numbers[i];  
}

console.log("Sum of the numbers: " + sum);  



///////////////// task02 ////////////////////


let numbersArr: number[] = [1, 2, 3, 4, -5];

let isPositive : boolean = true;

for (let i = 0 ; i<numbersArr.length; i++)
{

    if (numbersArr[i]<0)
    {
        isPositive = false;
        break
    }    
}

if (isPositive)
    {
        console.log("All Positive")
    }
    else{
        console.log("Not all Positive")
    }




///////////////// task03 ////////////////////


let arrString: string [] = ["Hi", "DDD", "WWWEEEEE"]
let longestString: string = arrString[0];

for (let i = 1 ; i<arrString.length; i++)
{
    if (arrString[i].length > longestString.length)
        longestString = arrString[i];
}

console.log("Longest String: " + longestString);



///////////////// task04 ////////////////////

let word : string = "wearethewwwbestinthearena"
let howMany : number = 0;
for(let i =0; i<word.length; i++)
{
    if (word[i] == 'w')
    {
        howMany++;
    }
}

console.log("Number of 'w's: " + howMany);


///////////////// task05 ////////////////////

let prime: number = 5;
let isPrime: boolean = true;

for (let i = 2; i <= prime / 2; i++) {
    if (prime % i == 0) {
        console.log(prime + " is not a prime number");
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(prime + " is a prime number");
}


