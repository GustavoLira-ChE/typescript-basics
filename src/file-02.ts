const myArray = [1,2,3,4,5,6,7,8,9,10];
const myArray2 = myArray.map(item => item*2);
console.log(myArray);
console.log(myArray2);

let mytype: number = 12;
mytype = 14;

// add type annotations on person and date to describe what types of values greet can be called with.
function greet(person: string, date: string) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
greet("Brendan", Date());

var xIIFE = 23;
(function(){
  var xIIFE = 43;
  (function(){
    xIIFE ++;
    console.log("I'm: ",xIIFE);
    //var xIIFE = 21;
  })();
})();
