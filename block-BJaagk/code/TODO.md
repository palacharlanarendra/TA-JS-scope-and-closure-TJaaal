1. Convert the function below into different forms of function expression.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}

// Your code goes here
let percentage = function(marks,total){
  return (marks * 100) / total;
}
let percentage = (marks,total)=>{
  return (marks * 100) / total;
}

```

2. Write Function Declaration or Function Expression next to the function.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}
// Function Declaration
// Your answer

```

```js
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
};
// Function Expression
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};
// Function Expression
```

```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
// Function Expression
```

```js
let percentage = (marks, total) => (marks * 100) / total;
// Function Expression
```

3. Why is a function definition an expression in JavaScript? Give one example of function expression.

function is an object, so we can assigne any object to the variable,in the same way , we  can assign function definition to any variable or write in the form of expression.
```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
```

4. Why is a function call an expression in JavaScript?

the result of the function call will be the datatype, so any of the datatype can be asigned to the variable.so function call an expression in js.



5. Write VALID and INVALID next to each example below with the reason.

```js
function add(a, b) {
  return a + b;
}

let five = add(2, 3); // VALID
five = add; // VALID
five = five(10, 11); // VALID
five = function () {
  return 'Hello';
}; // VALID
```

6. What is the difference between function definition and function call? Explain with an example.
function definition is the declaration of the function
with arguments and whta to be returned.
where as function call is the execution of the function definition.
```js
//function definition
function add(a,b){
  return a+b;
}
//function call
add(2,3);
```
7. What is the similarities between function definition and function call?
the similarity is we will call the function with the same name.
8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // valid 
```
function is an object so when you create the function with the name of "hello" , it behaves like an object ,so you can add properties to it , like you add props to object.So it is "VALID"

9. What is higher order function explain with an example.
higher order functions goes higher and operates on the functions ,instead of strings , booleans, numbers.

a function is said to be HOF , it should take function as  argument or it should return function.

example : 

```js
add = (x) => (y) => x + y;
```

10. Explain what is callback function. Why you can pass a function inside a function?
when we passed any function reference in to any function as an argument then it is called as callback function. 
functions in javascript is first class, so it can passed as an variable or returned like a variable inside the other functions.