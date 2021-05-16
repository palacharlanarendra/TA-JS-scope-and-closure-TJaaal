For the given code below:

- re-write the code in ways that system will understand

For Example:

1.

```js
// Declaration Phase

// Execution Phase
var username = 'Arya';
let brothers = ['John', 'Ryan', 'Bran'];

console.log(username, brothers[0]);

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// Declaration Phase
var username = undefined;
let brothers;

function sayHello(name) {
  return `Hello ${name}`;
}

let message;
var nextMessage = undefined;

// Execution Phase

username = 'Arya';
brothers = ['John', 'Ryan', 'Bran'];

console.log(username, brothers[0]);

message = sayHello(username);
nextMessage = sayHello('Test');
```

2.

```js
console.log(username, numbers);

var username = 'Arya';
let number = 21;

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// Declaration Phase
var username = undefined;
let number;
function sayHello(name) {
  return `Hello ${name}`;
}
let message;
var nextMessage = undefined;
// Execution Phase
console.log(username, numbers);//Reference Error :numbers is not defined.

username = 'Arya';
number = 21;

message = sayHello(username);
nextMessage = sayHello('Test');
```

3.

```js
console.log(username, numbers);
let username = 'Arya';
let number = 21;

let sayHello = function (name) {
  return `Hello ${name}`;
};

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// Declaration Phase
let username;
let number;

let sayHello = function (name) {
  return `Hello ${name}`;
};

let message;
var nextMessage = undefined;
// Execution Phase
username = 'Arya';
number = 21;
message = sayHello(username);
nextMessage = sayHello('Test');
```

4.

```js
let username = 'Arya';
console.log(username, numbers);

let number = 21;
let message = sayHello(username);

let sayHello = function (name) {
  return `Hello ${name}`;
};

var nextMessage = sayHello('Test');
```

<!-- Answer -->

```js
// Declaration Phase
let username;
console.log(username, numbers);

let number;
let message;

let sayHello = function (name) {
  return `Hello ${name}`;
};

var nextMessage = undefined;
// Execution Phase
username = 'Arya';
console.log(username, number);//Reference Error , number are not defined.

number = 21;
message = sayHello(username);
nextMessage = sayHello('Test');

```

5.

```js
console.log(name);
console.log(age);
var name = 'Lydia';
let age = 21;
```

<!-- Answer -->

```js
// Declaration Phase

var name = undefined;
let age;
// Execution Phase
console.log(name);//undefined
console.log(age);//Reference Error : age is undefined. 
name = 'Lydia';
age = 21;
```

6.

```js
function sayHi(name) {
  console.log(name);//undefined
  console.log(age);//Reference Error : age is undefined.
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

<!-- Answer -->

```js
// Declaration Phase
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

// Execution Phase
sayHi();
   console.log(name);//undefined
  console.log(age);//Reference Error : age is undefined.
  name = 'Lydia';
  age = 21;
```

7.

```js
sayHi();
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
```

<!-- Answer -->

```js
// Declaration Phase
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
// Execution Phase
sayHi();
console.log(name);//undefined
console.log(age);//Reference Error : age is not defined.
```

8.

```js
sayHi();
let sayHi = function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
};
```

<!-- Answer -->

```js
// Declaration Phase
let sayHi;
// Execution Phase
sayHi();//Reference Error : sayHi is not defined.
```

9.

```js
let num1 = 21;
console.log(sum);
var sum = num1 + num2;
let num2 = 30;
```

<!-- Answer -->

```js
// Declaration Phase
let num1;

var sum = undefined;
let num2;

// Execution Phase
num1 = 21;
console.log(sum);//Reference Error : num2 is not defined.
sum = num1 + num2;
num2 = 30;
```

10.

```js
var num1 = 21;

let sum2 = addAgain(num1, num2, 4, 5, 6);

let add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
function addAgian(a, b) {
  return a + b;
}
let num2 = 200;

let sum = add(num1, num2, 4, 5, 6);
```

<!-- Answer -->

```js
// Declaration Phase
var num1 = undefined;

let sum2;

let add;
function addAgian(a, b) {
  return a + b;
}
let num2;

let sum;
// Execution Phase
num1 = 21;

sum2 = addAgain(num1, num2, 4, 5, 6);

add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

num2 = 200;

sum = add(num1, num2, 4, 5, 6);
```

11.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

let add = (a, b) => {
  return a + b;
};
```

<!-- Answer -->

```js
// Declaration Phase
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum;

let add;
// Execution Phase
sum = test(100);
```

12.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

function add(a, b) {
  return a + b;
}
```

<!-- Answer -->

```js
//declaration phase

function test(a) {
  let num1 = 21;
  return add(a, num1);
}
let sum;

function add(a, b) {
  return a + b;
}
//Execution phase

sum = test(100);

//declaration inside this phase
let num1;
num1=21;
add(a,num1);
```
