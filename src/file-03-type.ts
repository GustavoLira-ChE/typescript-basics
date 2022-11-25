(()=>{
    let myProductName = "Product";
    myProductName.repeat(2);
    
    let myArray: (number | string | boolean)[] = []; 
    myArray.push(true);
    myArray.push(13);
    myArray.push("hola");
    console.log(myArray);
    myArray.map(item => console.log(item.toString()));
})();