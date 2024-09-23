var x = 10;
x = 20;
var y = 20;
if (y % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
var prices = [100, 150, 101, 300, 400, 450, 125];
var thresholdPrice = 100;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > thresholdPrice) {
        console.log(prices[i]);
    }
}
var users = [
    {
        name: "Rami",
        age: 30,
        isAdmin: true
    },
    {
        name: "Ali",
        age: 20,
        isAdmin: false
    },
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
];
for (var i = 0; i < users.length; i++) {
    var oldest = users[0].age;
    if (users[i].isAdmin) {
        if (users[i].age > oldest) {
            oldest = users[i].age;
            console.log(users[i].name + " is the oldest admin");
        }
    }
}
