Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

Example:

```js
function hello() {
  var username = 'Arya';
}
console.log(username); // Reference Error username is not defined.
```

In above code we are looking for the variable named `username`. There is no variable named `username` in the global scope. The variable is inside the function named `hello` and we can't access the variable defined inside a function from outside.

The above code will throw an error `Reference Error username is not defined`.

2. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
{
  const username = 'Arya';
}
console.log(username); // Reference Error username is not defined
```
In above code we are looking for the variable named `username`. There is no variable named `username` in the block scope. The variable is inside the block and we can't access the variable defined inside a function from outside.

The above code will throw an error `Reference Error username is not defined`.

3. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  let username = 'Arya';
}
console.log(username); //  Reference Error username is not defined
```
In above code we are looking for the variable named `username`. There is no variable named `username` in the block scope. The variable is inside the block and we can't access the variable defined inside a function from outside.

The above code will throw an error `Reference Error username is not defined`.


4. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  var username = 'Arya';
}
console.log(username); // Arya
```
In above code we are looking for the variable named `username`. username is iside the block scope, it is declared with "var" , so var is only having functional scope not the block scope , so that the username will be available for the global scope.
The above code will give "Arya" as an output.


5. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
if (true) {
  var username = 'Arya';
}
console.log(username); // Syntax Error, username is already been declared.
```
In the above code snippet , we declared username with let in global scope, where as the username is again declared inside the block scope. so when the code is getting executed, "let" will not allow the redeclaration of the same variablename. so there will be an syntax error, username is already been declared.


6. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
if (true) {
  let username = 'Arya';
}
console.log(username); // output
```
In  the above code snippet , the username declared inside the if block will be having the block scope , where as username declared outside the block will be having global scope. so "John" will be the output.


7. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
function sayHello() {
  let username = 'Arya';
}
sayHello();
console.log(username); // John
```
In  the above code snippet , the username declared inside the if function will be having the function scope , where as username declared outside the function will be having global scope. so "John" will be the output.

8. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (var i = 0; i < 10; i++) {
  console.log(i, 'First'); // 0,'First', 1,'First' to 9,'First'
}
console.log(i, 'Second'); // 10,'Second'
```
In  the above code snippet , the "i" is incremented and printed till the condition breaks the loop, once the condition fails, before the i will be incremented further to one more time, and the console.log out of the block wil be get printed for the last time.
i is gobal variable. 

9. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (let i = 0; i < 10; i++) {
  console.log(i, 'First'); // 0,'First', 1,'First' to 9,'First'
}
console.log(i, 'Second'); // Reference Error, i is not defined. 
```
In  the above code snippet , the "i" is incremented and printed till the condition breaks the loop, once the condition fails, before the i will be incremented further to one more time, and the console.log out of the block will be get printed for the last time. but the "let" is a block scoped , so the i will not be defined.
"i" is an variable with block scope . 