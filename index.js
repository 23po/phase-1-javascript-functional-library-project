function myEach(collection, callback) {
 if (typeof collection === 'object') {
    let newArray = []
    var values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        
        newArray.push(callback(values[i]));
    }
 return collection;
}
else {
    var arrayArray = [];
    for (let i = 0; i < collection.length; i++) {
        arrayArray.push(callback(collection[i]));
    }
    return collection
}
}

function myMap(collection, callback) {
    let newArray = [];
    if (typeof collection === 'object') {
        var values = Object.values(collection);
     }
     else {
        values = collection 
     }
     for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i]));
     }
 return newArray
}

function myReduce(collection, callback, acc) {
    
    if (typeof collection === 'object') {
        var values = Object.values(collection);
     }
     else {
        values = collection 
     }
     let start = acc;
     if (typeof acc !== "number") {
    start = values[0];
    for (let i = 1; i < values.length; i++) {
        start = callback (start, values[i], values)
    } 
    }
     else {
      for (let i = 0; i < values.length; i++) {
        start = callback(start, values[i], values);
     }
    }
     return start;
}

function myFind(collection, predicate) {
    if (typeof collection === "object") {
       var values = Object.values(collection);
    }
    else {
        values = collection;
    }
    for (let i = 0; i < values.length; i++) {
       if( predicate(values[i])) {
       return values[i]; 
       }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    if (typeof collection == "object") {
        var values = Object.values(collection);
    }
    else {
        values = collection;
    }
   let arrayOfTruth = [];
for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
        arrayOfTruth.push(values[i])
    }
}
return arrayOfTruth;
}

function mySize(collection) {
    if (typeof collection == "object") {
        var values = Object.values(collection);
    }
    else {
        values = collection;
    }
    var result = 0;
    for (let i = 0; i < values.length; i++) {
        result += 1;
    }
    return result;
}
function myFirst (array, n) {
   let arrayOfFirsts = [];
   if (n) {
    for (let i = 0; i < n; i++) {
        arrayOfFirsts.push(array[i]);
    }
    return arrayOfFirsts;
}
else{
    return array[0];
}
}

function myLast (array, n) {
    let arrayOfLasts = [];
    if (n) {
for (let i = 1; i <= n; i++) {
    arrayOfLasts.unshift(array[array.length-i])
      }
    return arrayOfLasts;
    }
 else {
    return array[array.length-1]
 }
}

function myKeys (object) {
    let newArray = []
    for (let key in object) {
      newArray.push(key)
    }
    return newArray
  }
  
  function myValues (object) {
    let newArray = []
    for (let key in object) {
      newArray.push(object[key])
    }
    return newArray  }
