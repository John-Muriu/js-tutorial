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
console.log(sort);
//adding a list to an array

// console.log(Array.isArray(nums));

//objects

const person = {
    fname: 'john',
    lname: 'muriu',
    age: 34,
    hobbies: ["dancing", "music", "dancing"],
    address: {
        street: 'kawangware',
        city: 'Nairobi',
        state: 'Ke'
    }
}
console.log(person.fname);