// Regular function
function sayHello() {
    return "Hello, world!";
}

const sayHelloArrow = () => "Hello"; 

// Regular function
function double(x) {
    return x * 2;
}

const doubleArrow = x => x * 2;

// Regular function
function add(x, y) {
    return x + y;
}

const addArrow = (x, y) => x + y;

// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

// const personArrow = {
//     name1: "alice",
//     sayHi: () => "hi," + this.name1 + "!"
// };

//call back function
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});

const numberss = [1, 2,3 , 4, 5];
const doubledd = [];
numberss.forEach(numm => doubledd.push(numm * 2));


