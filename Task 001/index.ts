let x = 10;
x = 20;


const y = 20;

if (y%2 == 0)
{
    console.log("Even");
}
else {
    console.log("Odd");
}

let prices: number[] = [100, 150,101, 300, 400, 450, 125 ];
let thresholdPrice: number = 100;

for (let i= 0; i<prices.length; i++)
{
    if (prices[i] > thresholdPrice)
    {
        console.log(prices[i]);
    }
}

let users : {
    name: string;
    age: number;
    isAdmin: boolean
} []  =

 [
    {
    name: "Rami",
    age: 30,
    isAdmin: true
},
{
    name: "Ali",
    age: 20,
    isAdmin: false
} ,

{
    name: "Khalid",
    age: 35,
    isAdmin: true
},


{
    name: "Suhib",
    age: 45,
    isAdmin: true
}

]

for (let i = 0; i<users.length; i++)
{
    let oldest = users[0].age
    if (users[i].isAdmin)
    {
        if(users[i].age > oldest)
        {
            oldest = users[i].age;
            console.log(users[i].name + " is the oldest admin");
        }
    }
}