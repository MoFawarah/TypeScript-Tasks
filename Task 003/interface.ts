


/////////////////// task 01 /////////////////////////

interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 32 },]

    for (let i = 0; i<people.length; i++) 
    {
        if (people[i].age > 18)
        {
            console.log(people[i].name + " is above 18");
        }
        else {
            console.log(people[i].name + " is not above 18");
        }
    }







/////////////////// task 02 /////////////////////////


    interface Teacher {
        name : string,
        subjects: string [],
    }

    let Ahmad : Teacher = {
        name: 'Ahmad',
        subjects: ['Math', 'Science', 'English']
    }

    for (let i =0; i<Ahmad.subjects.length; i++)
    {
        console.log(Ahmad.name + " teaches " + Ahmad.subjects[i]);
    }










 /////////////////// task 03 /////////////////////////


    interface Product {
        name: string,
        price: number,
        quantity: number,
    }

    let iPhone: Product = {
        name: 'iPhone',
        price: 1000,
        quantity: 5,
    }

    let samsung: Product = {
        name: 'Samsung Galaxy',
        price: 800,
        quantity: 3,
    }

    let arr: Product [] = [iPhone, samsung]

    for (let i = 0 ; i< arr.length; i++)
    {
        arr[i].price += arr[i].price * 0.1;
    }

    for (let i = 0 ; i<arr.length; i++)
    {
        console.log(arr[i].name + " price after increase: " + arr[i].price);
    }   






/////////////////// task 04 /////////////////////////

interface Device {
    brand: string,
    model: string,
    year: number,
    start? : () => void
}

let myPhone: Device = {
    brand: 'Apple',
    model: 'iPhone 12',
    year: 2021,
    start: function() {
        console.log('Phone started');
    }

}

let myPhone02: Device = {
    brand: 'Potato',
    model: 'Potato 02',
    year: 2025,
   

}

let dev : Device [] = [myPhone02, myPhone]

for (let i = 0; i < dev.length; i++) {
    if (dev[i].start) {
        console.log(dev[i].brand + " is starting with custom start");
        dev[i].start?.();  // Optional chaining to safely invoke start
    } else {
        console.log(dev[i].brand + " is starting with default start");
    }
}