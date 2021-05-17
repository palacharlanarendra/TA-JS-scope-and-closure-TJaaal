1. Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. You can only use reduce method to do this.

```js
// function intersection(...arrays) {

//   for(let i=0;i<arrays.length;i++){
//     arrays[i].reduce((acc,elem)=>{
//       if(acc[elem]){
//         acc[elem]=acc[elem]+1;
//       }else{
//         acc[elem]=1;
//       }
//       return acc;
//     },{});
    
//   }
  
// }
function intersection(...arrays) {
  var obj={};
  for(let i=0;i<arrays.length;i++){
    var arr = arrays[i].reduce((acc,elem)=>{
      if(acc[elem]){
        acc[elem]=acc[elem]+1;
      }else{
        acc[elem]=1;
      }
      return acc;
    },obj); 
  }
  let newArray = [];
  for(let keys in arr){
    if(arr[keys]==3){
      newArray.push(Number(keys));
    }
  }
  return newArray;
}



  
// Test
console.log(
  intersection(
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20]
  )
); // should log: [5, 15]
```

2. Construct a function `union` that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. You can only use reduce method to do this.

```js
function union(...arrays) {
  var obj={};
  for(let i=0;i<arrays.length;i++){
    var arr = arrays[i].reduce((acc,elem)=>{
      if(acc[elem]){
        acc[elem]=acc[elem]+1;
      }else{
        acc[elem]=1;
      }
      return acc;
    },obj); 
  }
  let newArray = [];
  for(let keys in obj){
    newArray.push(Number(keys));
  }
  return newArray;
}

// Test
console.log(
  union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])
);
// should log: [5, 10, 15, 88, 1, 7, 100]
```
