let reviews: number[] = [1,2,3,4,5,6,7,8,9];
let sports: string[] = ["football","soccer","swimming","tennis","box"];
let types: (string|number|boolean)[] = [true,"Joel",23];

sports.push("baseball");
sports.push("cricket");

for(let i: number = 0; i < reviews.length; i++){
    console.log(reviews[i]);
}

for(let sport of sports){
    console.log(sport);
}
for(let tempType of types){
    console.log(tempType);
}