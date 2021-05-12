1. What does thread of execution means in JavaScript?
thread of execution means js will be  executed in an sequence, from top to bottm.
2. Where the JavaScript code gets executed?
In Global Execution Context
3. What does context means in Global Execution Context?
This context is the JS environment in which the JS code will be executed.
4. When do you create a global execution context.
It will be craeted when the file first loads in the browser. This is the default execution context in which JS code start its execution.
5. Execution context consists of what all things?
memory section , execution section. 
6. What are the different types of execution context?
a.Global execution context.
b.Functional execution context.
7. When global and function execution context gets created?
global execution context will be created when the file started loading. while functional execution context gets created when the functionexecution /call. 
8. Function execution gets created during function execution or while declaring a function.
Function execution gets created during function execution.


9. Create a execution context diagram of the following code on your notebook. Take a screenshot/photo and store it in the folder named `img`. Use `![](./img/image-name.png)` to display it here.



```js
var user = "Arya";

function sayHello(){
  return `Hello ${user}`;
}

var userMsg = sayHello(user);
```

<!-- Put your image here -->

![](./img/image-name.jpg)



```js
var marks = 400;
var total = 500;

function getPercentage(amount, totalAmount){
  return (amount * 100) / totalAmount;
}

var percentageMarks = getPercentage(marks, total);
var percentageProfit = getPercentage(400, 200);
```

<!-- Put your image here -->

![](./img/image-name.jpg)



```js
var age = 21;

function customeMessage(userAge){
  if(userAge > 18){
    return `You are an adult`;
  }else {
    return `You are a kid`;
  }
}

var whoAmI = customeMessage(age);
var whoAmIAgain = customeMessage(12);
```

<!-- Put your image here -->

![](./img/image-name.jpg)