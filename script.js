// // alert('hey there')
// console.error("this is an error");
// console.warn(' this is a worning');

// // variables
// console.log();
// console.log();
// console.error("cobject");

// console.groupEnd();
// console.table("table");

// const name = 'john';
// const age = 34;
// const rating = 4.5;

// console.log('my name is ' + name + " i'm " + age + ' years  of age and I have a total rating of' + rating);

// //using teplate literals
// // const hello = `my name is ${name} , i'm  ${age} ' years  of age and I have a total rating of ${rating}`;
// console.log(hello);

const num1 = 1000;
const num2 = 10;
const sum = `the total sum ${num1 + num2} , difference is ${num1 - num2}, 
multiplication ${num1 * num2}, division ${num1 / num2}`;
// console.log(sum);

// console.log(sum.toLocaleUpperCase(0, 2));
// console.log(sum.substring(0, 9).toLocaleLowerCase());

//split a string
// console.log(sum.split(",  "));

// array[array are variable tha hold multiple numbers]
// new key word means a constructor
let nums = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 'dog');
const sort = nums.sort();
sort.push(23);
sort.unshift('dog');
// console.log(sort);
//adding a list to an array

// console.log(Array.isArray(nums));

//objects

// const myPerson =Array => i<this[Array];


const person = {
    fname: 'john',
    lname: 'muriu',
    age: 34,
    hobbies: ["dancing", "music", "dancing", "movies"],
    address: {
        street: 'kawangware',
        city: 'Nairobi',
        state: 'Ke'
    }
};
// console.log(person.fname); // PRINTS THE first name from the object
// console.log(person.address);
// person.push.hobbies("Eating");
// console.log(person.hobbies);
// // console.log(person.hobbies[3]);
// person.person = myPerson;
// person.person('eating');
// person.hobbies.push("eating", "football"); //add the properties to an array
// console.log(person.hobbies);
// console.log(person.hobbies[5]);
// console.log(person);
const {
    fname,
    lname,
    address: {
        city
    }
} = person; //desctructuring the object
console.log(city); //print city key
console.log(lname);

//adding peroperties and key values

person.email = "johnmuriw@gmail.com";
person.hobbies = "laughing";
// console.log(person);

// an Array for todos
const toDos = [{
        id: 1,
        text: "take the Trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "take the notes",
        isCompleted: true
    },
    {
        id: 3,
        text: "Clean the office",
        isCompleted: false
    },
    {
        id: 4,
        text: "set the meeting area",
        isCompleted: true
    }
];
console.log(toDos[3].text);