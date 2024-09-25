/////////////////// task 01 /////////////////////////
var people = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 32 },
];
for (var i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        console.log(people[i].name + " is above 18");
    }
    else {
        console.log(people[i].name + " is not above 18");
    }
}
var Ahmad = {
    name: 'Ahmad',
    subjects: ['Math', 'Science', 'English']
};
for (var i = 0; i < Ahmad.subjects.length; i++) {
    console.log(Ahmad.name + " teaches " + Ahmad.subjects[i]);
}
var iPhone = {
    name: 'iPhone',
    price: 1000,
    quantity: 5,
};
var samsung = {
    name: 'Samsung Galaxy',
    price: 800,
    quantity: 3,
};
var arr = [iPhone, samsung];
for (var i = 0; i < arr.length; i++) {
    arr[i].price += arr[i].price * 0.1;
}
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name + " price after increase: " + arr[i].price);
}
var myPhone = {
    brand: 'Apple',
    model: 'iPhone 12',
    year: 2021,
    start: function () {
        console.log('Phone started');
    }
};
var myPhone02 = {
    brand: 'Potato',
    model: 'Potato 02',
    year: 2025,
};
var dev = [myPhone02, myPhone];
for (var i = 0; i < dev.length; i++) {
    if (dev[i].start != null) {
        console.log(dev[i].brand + "is starting with custom start");
    }
    else {
        console.log(dev[i].brand + "is starting with default start");
    }
}
