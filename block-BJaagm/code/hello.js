let array = [1,4,2,3,2,5,6,6,6];

var itemObj ={}

for(var i=0;i<array.length;i++){
    var element = array[i];
    var prevCount=itemObj[element];
    if(prevCount==undefined){
        itemObj[element] = 1;
    }else{
        itemObj[element] = prevCount+1;
    }   
}

