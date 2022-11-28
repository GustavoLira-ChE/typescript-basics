import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Shape from "./Shape";

let myShapeArray: Shape[] = [];

let circle: Shape = new Circle(4,5,5);
let rectagle: Shape = new Rectangle(1,2,3,4);
let shape: Shape = new Shape(5,5);

myShapeArray.push(circle);
myShapeArray.push(rectagle);
myShapeArray.push(shape);

let shape1:Shape;
for(shape1 of myShapeArray) {
    console.log(shape1.getInfo());
}
