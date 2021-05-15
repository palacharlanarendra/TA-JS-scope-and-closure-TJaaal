## Understanding Scope and the difference between var, let and const

Watch this video before doing the exercise: https://www.youtube.com/watch?v=XgSjoHgy3Rk

1. Guess the output:

```js
let firstName = 'Arya';
const lastName = 'Stark';
var knownAs = 'no one';

console.log(
  window.firstName,
  window.lastName,
  window.knownAs
);//undefined,undefined,"no one"
```

2. Guess the output:

```js
let firstName = 'Arya';
const lastName = 'Stark';
var knownAs = 'no one';

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));//AryaStark
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js
function addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);//1 2
```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);//1 2
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));//1
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);//2
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = (num) => {
  return num + 1;
};
var two = addOne(1);
console.log(two);//2
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));//Reference Error: cannot access before intialization.
const addOne = (num) => {
  return num + 1;
};
var two = addOne(1);
console.log(two);//2
```

8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();//undefined
```

9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();//true
```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
```

11. What will be the output of the following

```js
let firstName = 'Arya';
const lastName = 'Stark';
var knownAs = 'no one';

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);//AryaStark
```

12. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = 'Arya Stark';
}
sayHello();

console.log(name);//
// there is nothing to execute as an output because the let and const declared variables will be declared and later in the execution phase it will be intialized, so the function executed and name get declared , but when it consoled before , it just consoled nothing.
```

13. Guess the output of the code below with a reason.

```js
if (true) {
  var name = 'Arya Stark';
}
console.log(name);//"Arya Stark"
```

14. Guess the output of the code below with a reason.

```js
if (true) {
  let name = 'Arya Stark';
}
console.log(name);//
// there is nothing to execute as an output because the let and const declared variables will be declared and later in the execution phase it will be intialized, so the function executed and name get declared , but when it consoled before , it just consoled nothing.
```

15. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);//20
//var is a global scope variable, when the i=20 then it is not <20, so then "i" will be incremented , then i will be avaialble for global scope and  consoled as 20.
```

16. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
//let is a functional and block scope variable, when the i=20 then it is not <20, so then "i" will be incremented , then i will be avaialble for block,functional scope and output will be "i is not defined".
```

17. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = 'John Snow';
  }
  console.log(username);
}
sample();//"John Snow"
// username declared with "var" is not having any blockscope ,so that we get the value as "John Snow", when we compiled the "username".
```

18. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = 'John Snow';
  }
  console.log(username);
}
sample();//Reference Error : username is not defined.
//username declared with "let" is  having any blockscope ,so that we get the reference error:musername is not defined, when we compiled the "username".
```

19. Guess the output and the reason behind that.

```js
function sample() {
  var username = 'Arya Stark';
  if (true) {
    var username = 'John Snow';
    console.log(username);//John Snow
  }
  console.log(username, 'second');//John Snow second
}
sample();
//variable declared withh var is having the global scope , so that username value will be consoled everywhere in the function. 
```


20. Guess the output and the reason behind that.

```js
function sample() {
  let username = 'Arya Stark';
  if (true) {
    let username = 'John Snow';
    console.log(username, 'first');
  }
  console.log(username, 'second');
}

sample();
//John Snow first
//Arya Stark second

//the variable "username" with let will be having the block scope , so that there will not be any conflict between the both username declaration and intiaizations.
```

21. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample('First', 'Second', 'Third');

//Hello I am First
//Hello I am Second
//Hello I am Third

//we can spread the args as an array and loop through them and update the message variable with let in every iteration and console the output. 
```

22. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample('First', 'Second', 'Third');
//Hello I am First
//Hello I am Second
//Hello I am Third

//we can spread the args as an array and loop through them and update the message variable with const in every iteration and console the output. 
```

23. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function () {
    console.log(username, 'Second');
  };
  console.log(username, 'First');//ReferenceError : cannot access the username with out initialization.
  let username = 'Hello World!';
  myFunc();
}
// because of the variable "username" declared with let keyword , so that variable will be intialized in execution phase , so due to the early console , we got the reference error.
 ```

24. Guess the output and the reason behind that.

```js
function outer() {
  let movie = 'Mad Max: Fury Road';
  function inner() {
    console.log(
      `I love this movie called ${movie.toUpperCase()}`
    );//I love this movie called MAD MAX: FURY ROAD
  }
  inner();
}

outer();

//the inner function is the closure , so that it will be having the "movie" in it's scope.
```

25. Guess the output and the reason behind that.

```js
function outer() {
  let movie = 'Mad Max: Fury Road';
  function inner() {
    let movie = 'Before Sunrise';
    console.log(
      `I love this movie called ${movie.toUpperCase()}`
    );//I love this movie called BEFORE SUNRISE
  }
  inner();
}

outer();
//the inner function is the closure , so that it will be having the "movie" in it's scope. , if dthere is already the "movie" name is avaialable in its inner scope then it wont bubble out to search for the value of the variable.
```

26. Guess the output and the reason behind that.

```js
function outer() {
  let movie = 'Mad Max: Fury Road';
  function inner() {
    let movie = 'Before Sunrise';
    function extraInner() {
      let movie = 'Gone Girl';
      console.log(
        `I love this movie called ${movie.toUpperCase()}`
      );//I love this movie called GONE GIRL
    }
    extraInner();
  }
  inner();
}
outer();
//the inner function is the closure , so that it will be having the "movie" in it's scope. , if dthere is already the "movie" name is avaialable in its inner scope then it wont bubble out to search for the value of the variable.
```

30. Using reduce find the final value when the initial value passed is `100`. You have to pass the output of one function into the input of next function in the array `allFunctions` starts with `addOne` ends with `half`.

```js
const addOne = (num) => {
  return num + 1;
};
const subTwo = (num) => {
  return num - 2;
};
const multiplyThree = (num) => {
  return num * 3;
};
const half = (num) => {
  return num / 2;
};

let allFunctions = [
  addOne,
  subTwo,
  multiplyThree,
  addOne,
  multiplyThree,
  half,
];


allFunctions.reduce((acc,elem,index)=>{
  
    return elem(acc);

},100);

// Answer is: 447
```
